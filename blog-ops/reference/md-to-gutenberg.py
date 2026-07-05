#!/usr/bin/env python3
"""Convert a finalized blog markdown file to WordPress Gutenberg block markup.

Why: the blogsmith wordpress-rest adapter posts raw HTML into the WP `content`
field, which WordPress wraps as ONE legacy "Classic" block — the post then
misses the theme's native block styling (spacing, heading typography, image
blocks, TOC-plugin heading detection) and looks broken next to real Gutenberg
posts. This emits proper wp:paragraph / wp:heading / wp:list / wp:image blocks.

Usage:
  python3 md-to-gutenberg.py <finalized.md> <media_map.tsv> > blocks.html
  # media_map.tsv rows: <image-filename>\t<wp_media_id>\t<wp_source_url>
Then PATCH the WP draft: curl ... /wp-json/wp/v2/posts/<id> -d @- with {"content": <blocks>}.
Image markdown ![alt](.../<filename>) is matched by basename against the media map.
The [AFFILIATE_PLACEHOLDER: ...] token (if any) is stripped.
"""
import re, html, sys

md = open(sys.argv[1]).read()
media = {}
if len(sys.argv) > 2:
    for line in open(sys.argv[2]):
        parts = line.rstrip("\n").split("\t")
        if len(parts) == 3: media[parts[0]] = (parts[1], parts[2])

body = re.sub(r'^---\n.*?\n---\n', '', md, count=1, flags=re.S).strip()
body = re.sub(r'\s*\[AFFILIATE_PLACEHOLDER:[^\]]*\]\s*', ' ', body)

def inline(t):
    t = html.escape(t, quote=False)
    t = re.sub(r'\[([^\]]+)\]\(([^)]+)\)', lambda m: f'<a href="{m.group(2)}">{m.group(1)}</a>', t)
    t = re.sub(r'\*\*([^*]+)\*\*', r'<strong>\1</strong>', t)
    t = re.sub(r'(?<!\*)\*([^*]+)\*(?!\*)', r'<em>\1</em>', t)
    return t.strip()

blocks = []
def para(t):
    t = inline(t)
    if t.strip(): blocks.append(f'<!-- wp:paragraph -->\n<p>{t}</p>\n<!-- /wp:paragraph -->')
def heading(t, level):
    lv = '' if level == 2 else ' {"level":%d}' % level
    blocks.append(f'<!-- wp:heading{lv} -->\n<h{level} class="wp-block-heading">{inline(t)}</h{level}>\n<!-- /wp:heading -->')
def image(fn, alt):
    if fn not in media: para(f"[missing image {fn}]"); return
    i, u = media[fn]
    blocks.append(f'<!-- wp:image {{"id":{i},"sizeSlug":"large","linkDestination":"none"}} -->\n<figure class="wp-block-image size-large"><img src="{u}" alt="{html.escape(alt, quote=True)}" class="wp-image-{i}"/></figure>\n<!-- /wp:image -->')
def lst(items, ordered):
    o = ' {"ordered":true}' if ordered else ''
    tag = 'ol' if ordered else 'ul'
    lis = "".join(f'<!-- wp:list-item -->\n<li>{inline(x)}</li>\n<!-- /wp:list-item -->\n' for x in items)
    blocks.append(f'<!-- wp:list{o} -->\n<{tag} class="wp-block-list">\n{lis}</{tag}>\n<!-- /wp:list -->')

lines = body.split("\n"); n = len(lines); k = 0
while k < n:
    s = lines[k].strip()
    if not s: k += 1; continue
    mimg = re.match(r'^!\[([^\]]*)\]\(([^)]+)\)$', s)
    if mimg: image(mimg.group(2).split('/')[-1], mimg.group(1)); k += 1; continue
    if s.startswith('### '): heading(s[4:], 3); k += 1; continue
    if s.startswith('## '): heading(s[3:], 2); k += 1; continue
    if s.startswith('# '): heading(s[2:], 2); k += 1; continue
    if re.match(r'^- ', s):
        items = []
        while k < n and re.match(r'^\s*- ', lines[k]): items.append(re.sub(r'^\s*- ', '', lines[k])); k += 1
        lst(items, False); continue
    if re.match(r'^\d+\. ', s):
        items = []
        while k < n and re.match(r'^\s*\d+\. ', lines[k]): items.append(re.sub(r'^\s*\d+\. ', '', lines[k])); k += 1
        lst(items, True); continue
    buf = [s]; k += 1
    while k < n and lines[k].strip() and not re.match(r'^(#{1,3} |- |\d+\. |!\[)', lines[k].strip()):
        buf.append(lines[k].strip()); k += 1
    para(" ".join(buf))

# Insert a Kadence Table of Contents block (dynamic — auto-builds from H2/H3)
# before the first heading, matching this blog's convention (see WP post 1321).
import os
_uid = "toc_" + re.sub(r'[^a-z0-9]', '', os.path.basename(sys.argv[1]).lower())[:12] + "-1"
_toc = ('<!-- wp:kadence/tableofcontents {"uniqueID":"' + _uid + '",'
    '"allowedHeaders":[{"h1":false,"h2":true,"h3":true,"h4":true,"h5":false,"h6":false}],'
    '"listStyle":"none","linkStyle":"underline_hover","containerBackground":"palette9",'
    '"titleColor":"palette3","titleFontWeight":"bold","titleBorderColor":"",'
    '"titleTextTransform":"uppercase","enableToggle":true,"toggleIcon":"arrowcircle",'
    '"contentColor":"palette1","contentHoverColor":"palette2","contentFontWeight":"inherit",'
    '"listGap":[null,"",""],"displayShadow":true,'
    '"shadow":[{"color":"#000000","opacity":0.5,"spread":-10,"blur":25,"hOffset":0,"vOffset":14,"inset":false}],'
    '"enableSmoothScroll":true,'
    '"borderStyle":[{"top":["palette3","",2],"right":["palette3","",2],"bottom":["palette3","",2],"left":["palette3","",2],"unit":"px"}],'
    '"titleBorderStyle":[{"top":[null,"",""],"right":[null,"",""],"bottom":[null,"",""],"left":[null,"",""],"unit":"px"}],'
    '"enableTitleToggle":true} /-->')
_first_h = next((idx for idx, b in enumerate(blocks) if b.startswith('<!-- wp:heading')), 0)
blocks.insert(_first_h, _toc)

sys.stdout.write("\n\n".join(blocks) + "\n")

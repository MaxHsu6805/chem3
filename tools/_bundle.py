# -*- coding: utf-8 -*-
"""把 SPA 打包成單一 HTML 檔（CSS＋JS 全部 inline）。

各模組本來有自己的 scope（每個檔都各自宣告 $ / $$ / esc），直接串接會撞名，
所以每個檔包進獨立 IIFE；跨檔共用的 export 透過 globalThis 傳遞。
產物用「傳統 script」執行，可直接雙擊開啟（file://），也可丟到任何靜態站台。

用法：python3 tools/_bundle.py
"""
import os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ORDER = ['data.js', 'figs.js', 'content-a.js', 'content-b.js', 'tools.js', 'app.js']

EXPORT_RE = re.compile(r'^export\s+(const|let|var|function)\s+([A-Za-z_$][\w$]*)', re.M)
IMPORT_RE = re.compile(r'^\s*import\s*\{([^}]+)\}\s*from\s*[\'"]([^\'"]+)[\'"]\s*;?\s*$', re.M)

# 先掃一遍：檔名 -> 它 export 的名稱
EXPORTS = {}
SRCS = {}
for f in ORDER:
    src = open(os.path.join(ROOT, 'scripts', f), encoding='utf-8').read()
    SRCS[f] = src
    EXPORTS[f] = [m.group(2) for m in EXPORT_RE.finditer(src)]

# 建立「名稱 -> 來源檔」對照
ORIGIN = {}
for f, names in EXPORTS.items():
    for n in names:
        assert n not in ORIGIN, '名稱重複 export：%s（%s / %s）' % (n, ORIGIN.get(n), f)
        ORIGIN[n] = f

parts = []
for f in ORDER:
    src = SRCS[f]

    # 1) 收集 import，改寫成從 globalThis 取
    need = []
    def sub_import(m):
        names = [x.strip() for x in m.group(1).split(',') if x.strip()]
        for n in names:
            assert n in ORIGIN, '%s import 了不存在的 export：%s' % (f, n)
            need.append(n)
        return ''
    src = IMPORT_RE.sub(sub_import, src)
    assert 'import ' not in src.split('\n')[0] or True

    # 2) 去掉 export 關鍵字、記錄名稱
    exported = [m.group(2) for m in EXPORT_RE.finditer(src)]
    src = EXPORT_RE.sub(lambda m: '%s %s' % (m.group(1), m.group(2)), src)
    assert not re.search(r'^\s*export\b', src, re.M), '%s 仍有殘留 export' % f

    head = []
    if need:
        head.append('  const { %s } = globalThis;' % ', '.join(need))
    tail = []
    if exported:
        tail.append('  Object.assign(globalThis, { %s });' % ', '.join(exported))

    parts.append('/* ===== %s ===== */\n(function () {\n%s\n%s\n%s\n})();'
                 % (f, '\n'.join(head), src.rstrip(), '\n'.join(tail)))

bundle_js = '\n'.join(parts)

css = open(os.path.join(ROOT, 'styles.css'), encoding='utf-8').read()
html = open(os.path.join(ROOT, 'index.html'), encoding='utf-8').read()

css_safe = css.replace('</style>', '<\\/style>')
js_safe = bundle_js.replace('</script>', '<\\/script>')

out = html.replace('<link rel="stylesheet" href="styles.css">', '<style>\n' + css_safe + '\n</style>')
out = out.replace('<script type="module" src="scripts/app.js"></script>',
                  '<script>\n' + js_safe + '\n</script>')
assert 'href="styles.css"' not in out and 'src="scripts/app.js"' not in out, '仍有外部參照'

dst = os.path.join(ROOT, '氧化還原×電化學_互動學習網_單檔版.html')
open(dst, 'w', encoding='utf-8').write(out)
open('/tmp/bundle.js', 'w', encoding='utf-8').write(bundle_js)   # 供語法／jsdom 驗證
print('已產出：%s' % dst)
print('大小：%.1f KB（CSS %.1f KB ＋ JS %.1f KB）'
      % (os.path.getsize(dst) / 1024, len(css) / 1024, len(bundle_js) / 1024))
print('各檔 export：%s' % '、'.join('%s(%d)' % (f, len(EXPORTS[f])) for f in ORDER))

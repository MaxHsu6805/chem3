# -*- coding: utf-8 -*-
"""重建 data.js 的 HALF_RX。
資料結構：
  sp     = [{n:物種, sd:'L'|'R', ci:係數在 target/coefs 中的索引}]  ← 站位明確
  target = 8 個最終係數
  steps  = 每一步的 coefs 陣列，其中恰好一個位置是 null（＝該步要填的空格）
"""
import io

SPEC = [
 dict(id='h1', title='MnO₄⁻ → Mn²⁺（酸性）', env='acid',
   sp=[('MnO₄⁻','L',0),('H⁺','L',1),('e⁻','L',2),('Mn²⁺','R',4),('H₂O','R',7)],
   target=[1,8,5,0, 1,0,0,4],
   steps=[('步驟1｜平衡 Mn（主要元素）',[1,0,0,0, None,0,0,0],'左邊有 1 個 Mn，右邊要幾個 Mn²⁺？'),
          ('步驟2｜用 H₂O 平衡 O',[1,0,0,0, 1,0,0,None],'左邊有 4 個 O、右邊沒有 ⇒ 右邊要加幾個 H₂O？'),
          ('步驟3｜用 H⁺ 平衡 H',[1,None,0,0, 1,0,0,4],'右邊 4×2 = 8 個 H ⇒ 左邊要加幾個 H⁺？'),
          ('步驟4｜用 e⁻ 平衡電荷',[1,8,None,0, 1,0,0,4],'左：−1+8 = +7；右：+2 ⇒ 左邊要加幾個 e⁻？')]),
 dict(id='h2', title='Cr₂O₇²⁻ → Cr³⁺（酸性）', env='acid',
   sp=[('Cr₂O₇²⁻','L',0),('H⁺','L',1),('e⁻','L',2),('Cr³⁺','R',4),('H₂O','R',7)],
   target=[1,14,6,0, 2,0,0,7],
   steps=[('步驟1｜平衡 Cr',[1,0,0,0, None,0,0,0],'左邊有 2 個 Cr ⇒ 右邊要幾個 Cr³⁺？'),
          ('步驟2｜用 H₂O 平衡 O',[1,0,0,0, 2,0,0,None],'左邊有 7 個 O ⇒ 右邊要加幾個 H₂O？'),
          ('步驟3｜用 H⁺ 平衡 H',[1,None,0,0, 2,0,0,7],'右邊 7×2 = 14 個 H ⇒ 左邊要加幾個 H⁺？'),
          ('步驟4｜用 e⁻ 平衡電荷',[1,14,None,0, 2,0,0,7],'左：−2+14 = +12；右：2×(+3) = +6 ⇒ 差幾個 e⁻？')]),
 dict(id='h3', title='NO₃⁻ → NO（酸性）', env='acid',
   sp=[('NO₃⁻','L',0),('H⁺','L',1),('e⁻','L',2),('NO','R',4),('H₂O','R',7)],
   target=[1,4,3,0, 1,0,0,2],
   steps=[('步驟1｜平衡 N 與 O',[1,0,0,0, None,0,0,2],'N 已平衡（各 1）；左 3 個 O、右 1 個 ⇒ 右邊補 2 個 H₂O。右邊要幾個 NO？'),
          ('步驟2｜用 H⁺ 平衡 H',[1,None,0,0, 1,0,0,2],'右邊 2×2 = 4 個 H ⇒ 左邊要加幾個 H⁺？'),
          ('步驟3｜用 e⁻ 平衡電荷',[1,4,None,0, 1,0,0,2],'左：−1+4 = +3；右：0 ⇒ 左邊要加幾個 e⁻？')]),
 dict(id='h4', title='H₂O₂ → H₂O（酸性，當氧化劑）', env='acid',
   sp=[('H₂O₂','L',0),('H⁺','L',1),('e⁻','L',2),('H₂O','R',4)],
   target=[1,2,2,0, 2,0,0,0],
   steps=[('步驟1｜平衡 O',[1,0,0,0, None,0,0,0],'左邊 2 個 O ⇒ 右邊要幾個 H₂O？'),
          ('步驟2｜用 H⁺ 平衡 H',[1,None,0,0, 2,0,0,0],'右邊 4 個 H、左邊 2 個 ⇒ 左邊要加幾個 H⁺？'),
          ('步驟3｜用 e⁻ 平衡電荷',[1,2,None,0, 2,0,0,0],'左：0+2 = +2；右：0 ⇒ 左邊要加幾個 e⁻？')]),
 dict(id='h5', title='C₂O₄²⁻ → CO₂（氧化半反應）', env='acid',
   sp=[('C₂O₄²⁻','L',0),('CO₂','R',4),('e⁻','R',7)],
   target=[1,0,0,0, 2,0,0,2],
   steps=[('步驟1｜平衡 C',[1,0,0,0, None,0,0,0],'左邊 2 個 C ⇒ 右邊要幾個 CO₂？（O 左右各 4 個，已平衡，不需 H₂O）'),
          ('步驟2｜用 e⁻ 平衡電荷',[1,0,0,0, 2,0,0,None],'左 −2、右 0 ⇒ 要在右邊加幾個 e⁻？')]),
 dict(id='h6', title='MnO₄⁻ → MnO₂（中性／弱鹼）', env='base',
   sp=[('MnO₄⁻','L',0),('H₂O','L',1),('e⁻','L',2),('MnO₂','R',4),('OH⁻','R',5)],
   target=[1,2,3,0, 1,4,0,0],
   steps=[('步驟1｜平衡 Mn 與 O、H',[1,None,0,0, 1,4,0,0],'右邊已有 1 MnO₂ + 4 OH⁻（共 6 個 O、4 個 H）⇒ 左邊要加幾個 H₂O？'),
          ('步驟2｜用 e⁻ 平衡電荷',[1,2,None,0, 1,4,0,0],'左：−1；右：−4 ⇒ 左邊要加幾個 e⁻？')]),
 dict(id='h7', title='ClO⁻ → Cl⁻（鹼性，漂白水）', env='base',
   sp=[('ClO⁻','L',0),('H₂O','L',1),('e⁻','L',2),('Cl⁻','R',4),('OH⁻','R',5)],
   target=[1,1,2,0, 1,2,0,0],
   steps=[('步驟1｜平衡 O、H',[1,None,0,0, 1,2,0,0],'右邊已有 1 Cl⁻ + 2 OH⁻（2 個 O、2 個 H）⇒ 左邊要加幾個 H₂O？'),
          ('步驟2｜用 e⁻ 平衡電荷',[1,1,None,0, 1,2,0,0],'左：−1；右：−1−2 = −3 ⇒ 左邊要加幾個 e⁻？')]),
 dict(id='h8', title='O₂ → OH⁻（鹼性，燃料電池陰極）', env='base',
   sp=[('O₂','L',0),('H₂O','L',1),('e⁻','L',2),('OH⁻','R',4)],
   target=[1,2,4,0, 4,0,0,0],
   steps=[('步驟1｜平衡 O 與 H',[1,None,0,0, 4,0,0,0],'右邊 4 個 OH⁻（4 個 O、4 個 H）；左邊 O₂ 只有 2 個 O ⇒ 左邊要加幾個 H₂O？'),
          ('步驟2｜用 e⁻ 平衡電荷',[1,2,None,0, 4,0,0,0],'左 0；右 −4 ⇒ 左邊要加幾個 e⁻？')]),
 dict(id='h9', title='NO₃⁻ → NH₂OH（鹼性，112 分科題型）', env='base',
   sp=[('NO₃⁻','L',0),('H₂O','L',1),('e⁻','L',2),('NH₂OH','R',4),('OH⁻','R',5)],
   target=[1,5,6,0, 1,7,0,0],
   steps=[('步驟1｜平衡 O、H',[1,None,0,0, 1,7,0,0],'右邊 1 NH₂OH + 7 OH⁻（共 8 個 O、10 個 H）；左邊 NO₃⁻ 已有 3 個 O ⇒ 還要加幾個 H₂O？'),
          ('步驟2｜用 e⁻ 平衡電荷',[1,5,None,0, 1,7,0,0],'左 −1；右 −7 ⇒ 左邊要加幾個 e⁻？（N 由 +5 → −1，共得 6 個電子）')]),
 dict(id='h10', title='Fe²⁺ → Fe³⁺（最簡單的氧化半反應）', env='acid',
   sp=[('Fe²⁺','L',0),('Fe³⁺','R',4),('e⁻','R',7)],
   target=[1,0,0,0, 1,0,0,1],
   steps=[('步驟1｜確認 Fe 已平衡',[1,0,0,0, None,0,0,0],'沒有 O 和 H，Fe 左右各 1 個 ⇒ 右邊要幾個 Fe³⁺？'),
          ('步驟2｜用 e⁻ 平衡電荷',[1,0,0,0, 1,0,0,None],'左 +2、右 +3 ⇒ 要在右邊加幾個 e⁻？')]),
]

def q(x):
    return 'null' if x is None else str(x)

out = io.StringIO()
out.write("export const HALF_RX = [\n")
for i, h in enumerate(SPEC):
    out.write("  {id:'%s',title:'%s',env:'%s',\n" % (h['id'], h['title'], h['env']))
    out.write("   /* sp = [{n:物種, sd:站位 L/R, ci:係數在 target/coefs 的索引}]；站位明確 */\n")
    out.write("   sp:[%s],\n" % ','.join("{n:'%s',sd:'%s',ci:%d}" % t for t in h['sp']))
    out.write("   target:[%s],\n" % ','.join(q(v) for v in h['target']))
    out.write("   steps:[\n")
    for k, (nm, co, hint) in enumerate(h['steps']):
        assert co.count(None) == 1, (h['id'], nm, co)
        comma = ',' if k < len(h['steps']) - 1 else ''
        out.write("     {name:'%s',coefs:[%s],hint:'%s'}%s\n" % (nm, ','.join(q(v) for v in co), hint, comma))
    out.write("   ]}%s\n" % (',' if i < len(SPEC) - 1 else ''))
out.write("];\n")
new_block = out.getvalue()

p = 'data.js'
s = open(p, encoding='utf-8').read()
i = s.find("export const HALF_RX = [")
assert i > 0
j = s.find("\n];\n", i)
assert j > i
open(p, 'w', encoding='utf-8').write(s[:i] + new_block + s[j + len("\n];\n"):])
print("HALF_RX rebuilt: %d reactions, every step has exactly 1 blank" % len(SPEC))

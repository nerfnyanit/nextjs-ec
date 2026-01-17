# Cart Sample Web (Next.js + Tailwind)

Next.js（App Router）と Tailwind CSS を使用して作成した、  
**カート機能のサンプルWebアプリ**です。

商品データを JSON で管理し、  
Context API でカートの状態を共有する構成になっています。

---

## 🔧 技術スタック
- Next.js（App Router）
- React
- TypeScript
- Tailwind CSS
- Context API
- JSON（商品データ）

---

## 📌 できること
- 商品一覧を表示
- 商品をカートに追加
- カート内の合計金額を計算
- カート状態をどのページからでも共有

---

## 🧾 商品データ（例）

```json
[
  { "id": 1, "name": "NIKE", "price": 12000 },
  { "id": 2, "name": "DVD", "price": 10000 },
  { "id": 3, "name": "apple", "price": 200000 }
]

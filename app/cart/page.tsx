"use client"

import { useItems } from "@/context/ItemContext"

export default function page() {
  const { items, removeItem} = useItems()

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return ( 
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-2xl text-center font-bold mb-8">カート</h2>

      {items.length === 0 ? (
        <p className="text-center text-gray-500">
          カートに商品がありません
        </p>
      ) : (
        <ul className="space-y-4">
          {items.map((item) => (
            <li
              key={item.id}
              className="
                flex justify-between items-center
                bg-white
                border rounded-lg
                px-4 py-3
                shadow-sm
              "
            >
              {/* 商品名 */}
              <div>
                <p className="font-semibold">
                  {item.name}
                </p>
                <p className="text-sm text-gray-500">
                  {item.price.toLocaleString()}円
                </p>
              </div>

              {/* 数量 */}
              <div className="text-sm">
                x {item.quantity}
              </div>

              {/* 小計 */}
              <div className="font-bold">
                {(item.price * item.quantity).toLocaleString()}円
              </div>

              {/* 削除ボタン */}
              <button
                onClick={() => removeItem(item.id)}
                className="
                text-sm text-red-600
                hover:underline
                "
              >
                削除
              </button>
            </li>
          ))}
        </ul>
      )}

      {/* 合計 */}
      <div className="mt-8 flex justify-between items-center border-t pt-4">
        <span className="text-lg font-semibold">
          合計
        </span>
        <span className="text-2xl font-bold text-red-600">
          {total.toLocaleString()}円
        </span>
      </div>
    </div>
  )
}

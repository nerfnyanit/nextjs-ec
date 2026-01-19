"use client"

import data from "@/data/iteminfo.json"
import { useItems } from "@/context/ItemContext";

export default function Home() {
  const { addItem } = useItems()

  return (
    <div className="w-full max-w-6xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6 text-center">商品一覧</h2>

      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((product) => (
        <li 
          key={product.id} 
          className="border rounded-2xl shadow-md p-5 flex flex-col items-center">
          <p className="text-lg font-semibold mb-2">{product.name}</p>
          <p className="text-gray-600 mb-4">{product.price}</p>

          <button 
            onClick={() => addItem(product)}
            className="bg-sky-500 text-white rounded-xl px-4 py-2 hover:bg-sky-600 transition"
          >
            カートに追加
          </button>
        </li> 
        ))}
      </ul>
    </div>
  );
}

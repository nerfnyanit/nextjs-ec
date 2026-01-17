"use client"

import data from "@/data/iteminfo.json"
import { useItems } from "@/context/ItemContext"

export default function page() {
  const { addItem } = useItems();
  
  return (
    <div>
      <h2>商品一覧</h2>


      <ul>
        {data.map((product) => (
        <li key={product.id}>
          <p>{product.name}</p>
          <p>{product.price}</p>
          <button onClick={() => addItem(product)}>
            カートに追加
          </button>
        </li> 
        ))}
      </ul>

      <p>

      </p>

    </div>
  )
}

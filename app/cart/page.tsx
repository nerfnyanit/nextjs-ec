"use client"

import { useItems } from "@/context/ItemContext"

export default function page() {
  const { items } = useItems()

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  )

  return (
    <div>
      <h2>カート</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} / {item.price}円 x {item.quantity} 
          </li>
        ))}
      </ul>

      <hr />

      <p className="font-bold">
        合計:{total.toLocaleString()}円
      </p>
    </div>
  )
}

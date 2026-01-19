"use client"

import { createContext, useContext, useState } from "react"

type Item = {
    id: number
    name: string
    price: number
    quantity: number
}

type ItemContextType = {
    items: Item[]
    addItem: (item: Omit<Item, "quantity">) => void
    removeItem: (id: number) => void 
}

const ItemContext = createContext<ItemContextType | undefined>(undefined)

export function ItemProvider({ children}: {children: React.ReactNode}) {
    const [items, setItems] = useState<Item[]>([])

    const addItem = (product: Omit<Item, "quantity">) => {
        setItems((prev) => {
            const existing = prev.find((item) => item.id === product.id)

            if(existing) {
                return prev.map((item) =>
                item.id === product.id
                ? {...item, quantity: item.quantity + 1}
                : item
            )
        }

        return [...prev, { ...product, quantity: 1}]
        })
    }

    const removeItem = (id:number) => {
        setItems((prev) => prev.filter((item) => item.id !== id))
    }

  return (
        <ItemContext.Provider value={{ items, addItem, removeItem}}>
            {children}
        </ItemContext.Provider>
  )
}

export function useItems() {
    const context = useContext(ItemContext)
    if(!context) {
        throw new Error("useItems must be used within ItemProvider")
    }
    return context
}


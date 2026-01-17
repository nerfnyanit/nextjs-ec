"use client"

import { useState } from "react"

export default function SerchForm() {

    const [input, setInput] = useState("");

    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
        }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input
             value={input}
             placeholder=""
             className="border"
             onChange={handleChange}
            />

            <button 
             type="submit"
             className="border"
             >
                検索
             </button>
        </form>


    </div>
    )
}

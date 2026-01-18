"use client"

import useSearchForm from "../hooks/useSearchForm"

export default function SearchForm() {
    const { input, handleSubmit, handleChange, reset } = useSearchForm( {
        onSubmit: (value) => {
            console.log("検索ワード", value)
            reset();
        }
    });


  return (
    <div>
        <form 
         onSubmit={handleSubmit} 
         className="flex">

            <input
             type="search"
             value={input} onChange={handleChange}
             placeholder="商品を検索"
             className="
              px-10 py-2 w-4/5
              border boder-gray-800
              rounded-r-none
              rounded-l-full
              focus:outline-none
              focus:ring-1
              focus:ring-blue-700
              "
             />
            <button 
             type="submit"
             className="
              px-4
              border border-gray-800
              rounded-r-full
              rounded-l-none
              cursor-pointer
            "
             >
            検索
            </button>
        </form>
        <p>{input}</p>
    </div>
    )
}

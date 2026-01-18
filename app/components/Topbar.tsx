import Link from "next/link";
import SearchForm from "./SearchForm";


export default function Topbar() {
  return (
    <div className="flex items-center justify-between h-20 px-20">
    
        {/* ホームページ */}
        <Link
            href="/"
            className="
                text-2xl
                font-extrabold
                tracking-wide
                hover:opacity-80
                transition
            "
        >
            NNEC
        </Link>

        {/* 検索フォーム */}
        <div className="w-2/5">
        <SearchForm />
        </div>


        {/* ショップページ */}
     <div className="flex gap-10">
        <Link
            href="/login"
            className="
                text-2xl
                font-bold
            "
        >
            ログイン    
        </Link>

        {/* カートページ */}
        <Link
            href="/cart"
            className="
                text-2xl
                font-bold
            "
        >
            カート
        </Link>
     </div>    

    </div>
    )
}

import Link from "next/link";
import SerchForm from "./SerchForm";

export default function Topbar() {
  return (
    <div className="flex items-center justify-between bg-gray-900 h-20 px-20">
    
        {/* ホームページ */}
        <Link
            href="/"
            className="
                text-3xl
                font-bold
            "
        >
            ECサイト
        </Link>

        {/* 検索フォーム */}
        <SerchForm />


        {/* ショップページ */}
        <Link
            href="/shop"
            className="
                text-3xl
                font-bold
            "
        >
            Shop    
        </Link>

        {/* カートページ */}
        <Link
            href="/cart"
            className="
                text-3xl
                font-bold
            "
        >
            Cart
        </Link>    

    </div>
    )
}

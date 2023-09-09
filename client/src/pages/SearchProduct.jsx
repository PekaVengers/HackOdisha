import { useState } from "react"
import searchImg from "../assets/searchProduct.webp"

const SearchProduct = () => {
    const [query, setQuery] = useState("")

    function handleChange(e) {
        setQuery(e.target.value)
    }

    function formatQuery() {
        let tempQuery = query;
        tempQuery = tempQuery.trim(); // Add more formatting as per requirement
        setQuery(tempQuery)
    }

    function getResult() {
        formatQuery()
        // TODO
    }

    return (
        <div
            className="bg-slate-300 flex justify-center items-center flex-col min-h-screen"
        >
            <div
                className=" flex justify-center items-center md:flex md:flex-col md:gap-4 md:items-start"
            >
                <input
                    type="text"
                    value={query}
                    onChange={handleChange}
                    placeholder="Enter Product Name"
                    className="rrr_input p-5 text-3xl w-[90vw] max-w-[600px] rounded-3xl mr-5 md:p-3 md:w-[85vw] md:text-xl md:mr-0"
                />
                <button
                    onClick={getResult}
                    className=" p-5 text-3xl cursor-pointer rounded-xl font-semibold bg-blue-500 text-white border-none transition-transform duration-200 hover:opacity-60 active:scale-125 md:text-xl md:p-3 md:px-6"
                >
                    Search
                </button>
            </div>

            <img
                src={searchImg}
                alt="search lens"
                className="rrr_bg_img mt-16 w-72 opacity-60"
            />
        </div>
    )
}

export default SearchProduct
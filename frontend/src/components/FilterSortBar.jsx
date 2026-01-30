function FilterSortBar() {
    return (
        <>
            <div className="border-y-1 border-gray-300 grid grid-cols-2 items-center text-center font-bold">

                <button className="px-4 py-2">
                    FILTER
                </button>
               
                <select
                    id="sortSelect"
                    className="px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-center"
                >
                    <option value="recommended">RECOMMENDED</option>
                    <option value="newest-first">NEWEST FIRST</option>
                    <option value="popular">POPULAR</option>
                    <option value="price-desc">PRICE: HIGH TO LOW</option>
                    <option value="price-asc">PRICE: LOW TO HIGH</option>
                </select>

            </div>

        </>
    )   
}

export default FilterSortBar
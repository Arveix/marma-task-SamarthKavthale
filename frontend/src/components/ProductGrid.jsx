import ProductCard from "./ProductCard"

function ProductGrid() {
    return(
        <>
            <section className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </section>
        </>
    )
}

export default ProductGrid
import ProductCard from "./ProductCard"

function ProductGrid() {
    return(
        <>
            <section className="mx-auto w-full py-8">
                <div className="flex flex-wrap justify-center gap-6">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
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
import handbag from '../assets/handbag.jpg'
import FavouriteOutline from '../assets/favourite_outline.svg'

function ProductCard() {
    return(
        <>
            <article className="flex flex-col max-w-xs bg-white overflow-hidden">
                <img 
                    src={handbag} 
                    alt='Hand bag'
                    className='w-full object-cover'
                />
                <div className='flex items-center justify-between text-left'>
                    <div className='flex flex-col'>
                        <h3 className='text-lg font-bold'>PRODUCT NAME</h3>
                        <p className='text-sm text-gray-400'>
                            <a href='#' className='underline'>Sign in</a> or <a href='#' className='underline'>Create an account</a> to see pricing
                        </p>
                    </div>
                    <button
                        aria-label='Add to wishlist'
                        className=''
                    >
                        <img src={FavouriteOutline} alt='Favourite button' />
                    </button>
                </div>
            </article>
        </>
    )
}

export default ProductCard
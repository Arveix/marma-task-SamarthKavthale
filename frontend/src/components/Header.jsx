import MenuIcon from '../assets/hamburger_menu.svg'
import Logo from '../assets/company_logo.svg'
import SearchIcon from '../assets/search_icon.svg'
import FavouriteOutline from '../assets/favourite_outline.svg'
import CartIcon from '../assets/cart_icon.svg'

function Header() {
    return (
        <header className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 h-16 grid grid-cols-3 items-center">

                <div className="flex items-center gap-3">
                    <button aria-label="Open menu">
                        <img
                            src={MenuIcon}
                            alt="Menu"
                            className="w-6 h-6"
                        />
                    </button>

                    <img
                        src={Logo}
                        alt="Company logo"
                        className="h-8 w-8"
                    />
                </div>

                <div className="text-center">
                    <span className="text-xl font-bold">
                        LOGO
                    </span>
                </div>

                <div className="flex items-center justify-end gap-4">
                    <button aria-label="Search">
                        <img
                            src={SearchIcon}
                            alt="Search"
                            className="w-6 h-6"
                        />
                    </button>

                    <button aria-label="Wishlist">
                        <img
                            src={FavouriteOutline}
                            alt="Wishlist"
                            className="w-6 h-6"
                        />
                    </button>

                    <button aria-label="Cart">
                        <img
                            src={CartIcon}
                            alt="Cart"
                            className="w-6 h-6"
                        />
                    </button>
                </div>

            </div>
        </header>

    )
}

export default Header
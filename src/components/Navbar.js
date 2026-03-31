import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Navbar() {
    const { bage } = useContext(CartContext);

    return (
        <nav className="border-b-2 border-black p-4 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 bg-[#fffaf4]">
            {/* Left side: Navigation links */}
            <ul className="flex gap-6 md:gap-10 items-center text-lg font-medium">
                <li>
                    <Link to="/" className="hover:text-[#351b00] transition-colors">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-[#351b00]  transition-colors">
                        About
                    </Link>
                </li>
                <li className="hover:text-[#351b00] cursor-pointer">News</li>
            </ul>


            <div className="flex items-center">
                <Link to="/">
                    <img
                        src="/images/logo.png"
                        alt="Mera Logo"
                        className=" w-[60px] object-contain"
                    />
                </Link>
            </div>
            {/* Right side: Cart and Search */}
            <div className="flex items-center gap-4 md:gap-6">
                {/* Cart */}
                <div className="relative">
                    <Link to="/cart">
                        <FaShoppingCart className="text-2xl cursor-pointer  hover:text-[#995002]  transition-colors" />
                        {bage.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-white  text-[#351b00]  text-xs px-1 rounded-full border-[2px] border-[#351b00] ">
                                {bage.length}
                            </span>
                        )}
                    </Link>
                </div>

                {/* Search */}
                <div className="relative w-56 md:w-64">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full rounded-xl border-2 border-gray-300 p-2 pl-10 outline-none focus:border-[#351b00] transition-colors"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
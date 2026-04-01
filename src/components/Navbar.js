import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";

function Navbar() {
    const { bage } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 border-b border-[#351b00] shadow-sm p-4 flex justify-between items-center bg-[#fffaf4] relative">
            <div className="md:hidden text-2xl cursor-pointer"
                onClick={() => setMenuOpen(!menuOpen)}
            >
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            <ul className="hidden md:flex gap-8 items-center text-lg font-medium">
                <li>
                    <Link to="/" className="hover:text-[#351b00]">Home</Link>
                </li>
                <li>
                    <Link to="/about" className="hover:text-[#351b00]">About</Link>
                </li>
                <li className="hover:text-[#351b00] cursor-pointer">News</li>
            </ul>

            <div className="flex items-center">
                <Link to="/">
                    <img
                        src="/images/logo.png"
                        alt="Mera Logo"
                        className="w-[55px] object-contain"
                    />
                </Link>
            </div>

            <div className="flex items-center gap-4">
                <div className="relative">
                    <Link to="/cart">
                        <FaShoppingCart className="text-2xl hover:text-[#995002]" />
                        {bage.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-white text-[#351b00] text-xs px-1 rounded-full border-2 border-[#351b00]">
                                {bage.length}
                            </span>
                        )}
                    </Link>
                </div>

                <div className=" md:block relative w-56">
                    <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full rounded-xl border-2 border-white p-2 pl-10 outline-none focus:border-[#351b00]"
                    />
                </div>
            </div>

            {menuOpen && (
                <div className="absolute z-50 top-full left-0 w-full bg-[#fffaf4] border-[#351b00] bg-opacity-90 border-t p-4 flex flex-col gap-4 md:hidden shadow-md">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <span className="cursor-pointer">News</span>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
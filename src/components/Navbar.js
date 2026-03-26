import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Navbar() {
    const { bage } = useContext(CartContext);

    return (
        <nav className="border-b-2 p-4 flex justify-between items-center border-black">
            <ul className="flex gap-20">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <li>News</li>
            </ul>

            <a>mera</a>

            <div className="flex items-center gap-3">
                <div className="relative">
                    <Link to="/cart"> <FaShoppingCart className="text-xl cursor-pointer hover:text-orange-700" />

                        <span className="absolute -top-2 -right-2 bg-orange-700 text-white text-xs px-1 rounded-full">
                            {bage.length}
                        </span></Link>


                </div>


                <div className="relative w-64">
                    <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                        type="search"
                        placeholder="Search"
                        className="w-full rounded-xl border-2 p-2 pl-7 outline-none"
                    />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
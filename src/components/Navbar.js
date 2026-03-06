import { FaCar, FaCartPlus, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <nav className="border-b-2 p-4 flex justify-between items-center border-black ">
                <ul className="flex gap-20">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <li>News</li>
                </ul>
                <a>mera</a>
                <div className="flex items-center gap-3 ">
                    <FaShoppingCart className="text-xl" />
                    <div className="relative w-64">
                        <FaSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                            type="search"
                            placeholder="Search"
                            className="w-full rounded-xl border-2 p-2 pl-7 cursor-pointer outline-none"
                        />

                    </div>



                </div>

            </nav>

        </>

    );


}
export default Navbar;
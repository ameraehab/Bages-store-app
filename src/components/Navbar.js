import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link, Links } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../Context/CartContext";
import Search from "./search";
import LoginAndSignup from "./loginAndSignup";

function Navbar() {
    const { bage, setUser, user } = useContext(CartContext);
    const [menuOpen, setMenuOpen] = useState(false);
    const [open, setOpen] = useState(false);
    // 👇 logout function
    const handleLogout = () => {
        setUser(null);
        localStorage.removeItem("user");
    };
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
                {user && (
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

                )
                }
                <Search />
                {!user ? (
                    <button
                        onClick={() => setOpen(true)}
                        className="text-[#2b1a0f]  ml-2"
                    >
                        Login / Sign up
                    </button>
                ) : (
                    <div className="relative group inline-block">

                        <span className="cursor-pointer">
                            Hello, {user.name}
                        </span>

                        <div className="absolute left-0 mt-2 w-24 opacity-0 invisible group-hover:opacity-100 group-hover:visible
                  transition-all duration-200 bg-white shadow-lg rounded-lg p-2 z-50">

                            <button
                                onClick={handleLogout}
                                className="w-28 text-left text-sm text-red-500  px-1 py-1 rounded"
                            >
                                Logout
                            </button>

                        </div>
                    </div>
                )}

                <LoginAndSignup
                    isOpen={open}
                    onClose={() => setOpen(false)}
                    setUser={setUser}
                />
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
import { FaFacebook, FaYoutube, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";


function Footer() {
    return (



        <footer className="bg-gradient-to-r bg-[#351b00]  text-[#fffaf4] mt-16 ">

            <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

                <div>
                    <h2 className="text-3xl font-bold mb-4 tracking-wide">Mera Shop 👜</h2>
                    <p className="text-orange-100 text-sm leading-relaxed">
                        Premium bags designed to match your lifestyle.
                        Style, quality, and elegance in every piece.
                    </p>
                </div>

                <div>
                    <h6 className="text-lg font-semibold mb-4">Company</h6>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:translate-x-1 hover:text-black transition duration-300 cursor-pointer">

                            <Link to="/about">About Us</Link>

                        </li>
                        <li className="hover:translate-x-1 hover:text-black transition duration-300 cursor-pointer">
                            Contact
                        </li>
                        <li className="hover:translate-x-1 hover:text-black transition duration-300 cursor-pointer">
                            Careers
                        </li>
                    </ul>
                </div>

                <div>
                    <h6 className="text-lg font-semibold mb-4">Legal</h6>
                    <ul className="space-y-3 text-sm">
                        <li className="hover:translate-x-1 hover:text-black transition duration-300 cursor-pointer">
                            Terms & Conditions
                        </li>
                        <li className="hover:translate-x-1 hover:text-black transition duration-300 cursor-pointer">
                            Privacy Policy
                        </li>
                    </ul>
                </div>

            </div>

            <div className="border-t border-[fffaf4]"></div>

            <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between">

                <p className="text-sm text-orange-100">
                    © 2026 Bag Store — All rights reserved
                </p>

                <div className="flex gap-5 mt-4 md:mt-0">
                    <FaFacebook className="text-xl hover:scale-110 hover:text-black transition duration-300 cursor-pointer" />
                    <FaYoutube className="text-xl hover:scale-110 hover:text-black transition duration-300 cursor-pointer" />
                    <FaTwitter className="text-xl hover:scale-110 hover:text-black transition duration-300 cursor-pointer" />
                </div>

            </div>

        </footer>


    )
}

export default Footer;
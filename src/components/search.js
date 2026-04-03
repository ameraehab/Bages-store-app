import { FaSearch } from "react-icons/fa";
import bages from "../bags.json";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Search() {
    const { collections } = useContext(CartContext);

    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        if (search.trim() === "") {
            setSearchResults([]);
            return;
        }

        const results = bages.filter((item) =>
            item.title.toLowerCase().startsWith(search.toLowerCase())

        );
        setSearchResults(results);
    }, [search]);
    return (
        <>

            <div className=" md:block relative w-56">

                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}

                    className="w-full rounded-xl border-2 border-white p-2 pl-10 outline-none focus:border-[#351b00]"
                />
                {searchResults.length > 0 && (
                    <div
                        className="absolute w-72 sm:w-56 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl max-h-64 overflow-y-auto z-50 scroll-smooth"
                        style={{ scrollbarWidth: "thin", scrollbarColor: "#cbd5e1 #f1f5f9" }}
                    >
                        {searchResults.map((item, index) => {
                            const collection = collections.find(e => e.id === item.collectionId);

                            return (
                                <div
                                    key={item.id}
                                    className={`p-3 cursor-pointer transition duration-200 ${index !== searchResults.length - 1 ? "border-b border-gray-100" : ""
                                        } hover:bg-blue-50`}
                                >
                                    {collection && (
                                        <Link to={`/collection/${collection.name}/${collection.id}`}>
                                            <p className="text-sm font-medium text-gray-900 truncate">
                                                {item.title}
                                            </p>
                                        </Link>
                                    )}
                                </div>
                            );
                        })}

                    </div>
                )}





            </div>

        </>
    )

}


export default Search;
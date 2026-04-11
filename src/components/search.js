import { FaSearch } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Search() {
    const { collections } = useContext(CartContext);
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [bages, setBages] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('/bags.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load bags.json');
                }
                return response.json();
            })
            .then(data => {
                setBages(data);
            })
            .catch(error => {
                console.error('Error loading bags:', error);
            });
    }, []);

    useEffect(() => {
        if (search.trim() === "" || bages.length === 0) {
            setSearchResults([]);
            setShowResults(false);
            return;
        }

        const results = bages.filter((item) =>
            item.title.toLowerCase().startsWith(search.toLowerCase())
        );
        setSearchResults(results);
        setShowResults(true);
    }, [search, bages]);

    useEffect(() => {
        function handleClickOutside(event) {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowResults(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleSelectProduct = (item, collection) => {
        setSearch(item.title);
        setShowResults(false);


        if (collection) {
            navigate(`/collection/${collection.name}/${collection.id}`);
            setSearch("");
        }
    };

    return (
        <>
            <div className="md:block relative w-56" ref={searchRef}>
                <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                <input
                    type="search"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => {
                        if (searchResults.length > 0) {
                            setShowResults(true);
                        }
                    }}
                    className="w-full rounded-xl border-2 border-white p-2 pl-10 outline-none focus:border-[#351b00]"
                />
                {showResults && searchResults.length > 0 && (
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
                                    onClick={() => handleSelectProduct(item, collection)}
                                >
                                    <p className="text-sm font-medium text-gray-900 truncate">
                                        {item.title}
                                    </p>
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
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { FaCartPlus } from "react-icons/fa6";

// نفس دالة ImageLoader من SelectedCollection
function ImageLoader() {
    return (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-50 rounded z-10">
            <div className="loadingio-spinner-spinner-977el9wwy2v">
                <div className="ldio-4j5ay0xf86g">
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
            </div>
        </div>
    );
}

// نفس دالة ProductImage من SelectedCollection
function ProductImage({ src, alt, className }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="relative">
            {!isLoaded && !hasError && <ImageLoader />}

            {hasError && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded z-10">
                    <span className="text-4xl">🖼️</span>
                </div>
            )}

            <img
                src={src}
                alt={alt}
                className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                loading="lazy"
                onLoad={() => setIsLoaded(true)}
                onError={() => {
                    setIsLoaded(true);
                    setHasError(true);
                }}
            />
        </div>
    );
}

function News() {
    const [bags, setBags] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { collections, addToCart, user } = useContext(CartContext);

    useEffect(() => {
        fetch('/bags.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to load bags.json');
                }
                return response.json();
            })
            .then(data => {
                setBags(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading bags:', error);
                setLoading(false);
            });
    }, []);



    const newsBages = bags.filter(b => b.id % 2 === 0);

    // اللودر الرئيسي
    if (loading) {
        return (
            <div className="p-5 min-h-[400px] flex items-center justify-center h-screen">
                <div className="loadingio-spinner-spinner-977el9wwy2v">
                    <div className="ldio-4j5ay0xf86g">
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                </div>
            </div>
        );
    }

    if (newsBages.length === 0) {
        return (
            <div className="p-5 text-center text-gray-500">
                <p className="text-lg">No new bags at the moment 😕</p>
            </div>
        );
    }

    return (
        <>
            <p className="p-1 mt-8 text-xl font-semibold text-[#351b00] text-center">{newsBages.length} New Bag</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8">
                {newsBages.map((item) => (
                    <div
                        key={item.id}
                        className="shadow rounded p-3 hover:shadow-lg hover:scale-105 transition-transform duration-300 relative cursor-pointer"
                    >
                        <ProductImage
                            src={item.image}
                            alt={item.title}
                            className="w-full h-52 object-center mb-2 rounded"
                        />

                        <h3 className="font-semibold mt-2">{item.title}</h3>
                        <p className="text-orange-700 font-bold">{item.price}$</p>
                        {user ? (
                            <button
                                className="absolute top-4 right-4 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors z-20"
                                title="Add to Cart"
                                onClick={(e) => {
                                    e.stopPropagation(); // عشان لما تضغطي على الزر موديكش للكوليكشن
                                    addToCart(item, item.Quantity, item.price);
                                }}
                            >
                                <FaCartPlus size={20} />
                            </button>
                        ) : (
                            <div className="absolute top-4 right-4 text-xs bg-orange-600 text-white p-2 rounded p-1">
                                Login to add
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default News;
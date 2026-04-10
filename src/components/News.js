import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function News() {
    const [bags, setBags] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const { collections } = useContext(CartContext);

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

    // دالة للتوجيه لصفحة الكوليكشن
    const handleBagClick = (item) => {
        const collection = collections.find(c => c.id === item.collectionId);
        if (collection) {
            navigate(`/collection/${collection.name}/${collection.id}`);
        }
    };

    // اللودر عقبال ما البيانات تجيب
    if (loading) {
        return (
            <div className="p-5 min-h-[400px] flex items-center justify-center">
                <div className="loadingio-spinner-spinner-977el9wwy2v">
                    <div className="ldio-4j5ay0xf86g">
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                        <div></div><div></div><div></div><div></div><div></div><div></div>
                    </div>
                </div>
            </div>
        );
    }

    const newsBages = bags.filter(b => b.id % 2 === 0);

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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-8">
                {
                    newsBages.map((item) => (
                        <div
                            key={item.id}
                            className="shadow p-2 hover:shadow-lg hover:scale-105 transition-transform duration-300 relative cursor-pointer"
                            onClick={() => handleBagClick(item)}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-[450px] object-center mb-2 rounded"
                            />

                            <h3 className="font-semibold mt-2">{item.title}</h3>
                            <p className="text-orange-700 font-bold">{item.price}$</p>
                        </div>
                    ))
                }
            </div>
        </>
    );
}

export default News;
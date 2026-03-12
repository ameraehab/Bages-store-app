import { useState } from "react";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi"; // استدعاء أيقونة الكارت
import bages from "../bags.json";

function SelectedCollection() {
    const { collectionName, collectionNumber } = useParams();
    console.log("collectionName:", collectionName, "collectionNumber:", collectionNumber);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    // جلب المنتجات الخاصة بالكوليكشن
    const collectionBags = bages.filter(
        (bag) => bag.collectionId == collectionNumber
    );

    // حساب المنتجات للصفحة الحالية
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBags = collectionBags.slice(
        startIndex,
        startIndex + itemsPerPage
    );

    const totalPages = Math.ceil(collectionBags.length / itemsPerPage);

    return (
        <div className="p-5">
            <h1 className="text-xl sm:text-2xl font-bold text-orange-950 mb-4">
                {collectionName}
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {currentBags.map((bag) => (
                    <div
                        key={bag.id}
                        className="shadow rounded p-3 hover:shadow-lg hover:scale-105 transition-transform duration-300 relative"
                    >
                        <img
                            src={bag.image}
                            alt={bag.title}
                            className="w-full h-48 object-cover mb-2 rounded"
                        />
                        <h3 className="font-semibold">{bag.title}</h3>
                        <p className="text-orange-700 font-bold">{bag.price}$</p>

                        {/* أيقونة Add to Cart */}
                        <button
                            className="absolute top-2 right-2 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors"
                            title="Add to Cart"
                            onClick={() => alert(`Added ${bag.title} to cart`)} // مؤقت
                        >
                            <FiShoppingCart size={20} />
                        </button>
                    </div>
                ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="flex justify-center mt-6 gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (page) => (
                            <button
                                key={page}
                                onClick={() => setCurrentPage(page)}
                                className={`px-3 py-1 rounded ${page === currentPage
                                    ? "bg-orange-600 text-white"
                                    : "bg-gray-200"
                                    }`}
                            >
                                {page}
                            </button>
                        )
                    )}
                </div>
            )}
        </div>
    );
}

export default SelectedCollection;
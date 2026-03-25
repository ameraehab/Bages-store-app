import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import bages from "../bags.json";

// ✅ مكون الـ Loading Spinner الأصلي (من Uiverse.io) - محول لـ JSX
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

// ✅ مكون الصورة مع Spinner مدمج (لكل منتج على حدة)
function ProductImage({ src, alt, className }) {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="relative">
            {/* ✅ Spinner يظهر لحد ما الصورة تخلص تحميل */}
            {!isLoaded && !hasError && <ImageLoader />}

            {/* ✅ أيقونة خطأ لو الصورة فشلت */}
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

function SelectedCollection() {
    const { collectionName, collectionNumber } = useParams();
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);

    const itemsPerPage = 10;

    // محاكاة تحميل البيانات الأولية
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 500);
        return () => clearTimeout(timer);
    }, [collectionNumber]);

    const collectionBags = bages.filter(
        (bag) => bag.collectionId == collectionNumber
    );

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentBags = collectionBags.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(collectionBags.length / itemsPerPage);

    // عرض لودر الصفحة الرئيسي
    if (loading) {
        return (
            <div className="p-5 min-h-[400px] flex items-center justify-center  h-screen">
                <div class="loadingio-spinner-spinner-977el9wwy2v"><div class="ldio-4j5ay0xf86g">
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                    <div></div><div></div><div></div><div></div><div></div><div></div>
                </div>
                </div>
            </div>
        );
    }

    if (collectionBags.length === 0) {
        return (
            <div className="p-5 text-center text-gray-500">
                <p className="text-lg">لا توجد شنط في هذا الكوليكشن 😕</p>
            </div>
        );
    }

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
                        {/* ✅ استخدام ProductImage مع الـ Spinner الأصلي */}
                        <ProductImage
                            src={bag.image}
                            alt={bag.title}
                            className="w-80 h-52 object-center  mb-2 rounded "
                        />

                        <h3 className="font-semibold mt-2">{bag.title}</h3>
                        <p className="text-orange-700 font-bold">{bag.price}$</p>

                        {/* زر Add to Cart */}
                        <button
                            className="absolute top-4 right-4 bg-orange-600 text-white p-2 rounded-full hover:bg-orange-700 transition-colors z-20"
                            title="Add to Cart"
                            onClick={() => alert(`Added ${bag.title} to cart`)}
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
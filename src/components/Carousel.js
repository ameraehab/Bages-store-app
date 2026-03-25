import { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [
    "/images/caoursel1.jpg",
    "/images/caoursel2.jpg",
    "/images/caoursel3.jpg",
    "/images/caoursel4.jpg",
];

function Carousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(prev => (prev === images.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    const goNext = () => setCurrent(current === images.length - 1 ? 0 : current + 1);
    const goPrev = () => setCurrent(current === 0 ? images.length - 1 : current - 1);
    const goTo = (index) => setCurrent(index);

    return (
        // ✅ حاوية رئيسية بدون فراغات
        <div className="relative w-full overflow-hidden">
            {/* صور الكاروسيل */}
            <div
                className="flex w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="w-full flex-shrink-0 "
                    >
                        <img
                            src={img}
                            alt={`slide ${index}`}
                            // ✅ object-contain لعرض الصورة كاملة بدون قص
                            // ✅ max-h لضمان عدم خروج الصورة عن الحدود
                            className="w-full max-h-[400px] md:max-h-[500px] lg:max-h-[600px] object-fill"
                        />
                    </div>
                ))}
            </div>

            {/* زر السابق */}
            <button
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-black hover:bg-opacity-30 transition z-10"
            >
                <FaAngleLeft className="h-8 w-8" />
            </button>

            {/* زر التالي */}
            <button
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-black hover:bg-opacity-30 transition z-10"
            >
                <FaAngleRight className="h-8 w-8" />
            </button>

            {/* نقاط التنقل */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goTo(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer transition ${index === current ? "bg-white" : "bg-gray-400 hover:bg-white"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
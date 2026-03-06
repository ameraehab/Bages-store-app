import { useEffect, useState } from "react";
import img1 from "../assets/images/caoursel1.jpg";
import img2 from "../assets/images/caoursel2.jpg";
import img3 from "../assets/images/caoursel3.jpg";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [img1, img2, img3];

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
        <div className="relative w-full overflow-hidden">
            {/* صور الكاروسيل */}
            <div
                className="flex w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`slide ${index}`}
                        className="w-full flex-shrink-0 object-cover 
                       h-[400px] md:h-[500px] lg:h-[600px]"
                    />
                ))}
            </div>

            <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-black hover:bg-opacity-30 transition"
            >
                <FaAngleLeft className="h-8" />
            </button>
            <button
                onClick={goNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white p-3 rounded-full hover:bg-black hover:bg-opacity-30 transition"
            >
                <FaAngleRight className="h-8" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                    <span
                        key={index}
                        onClick={() => goTo(index)}
                        className={`w-3 h-3 rounded-full cursor-pointer ${index === current ? "bg-white" : "bg-gray-400"
                            }`}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default Carousel;

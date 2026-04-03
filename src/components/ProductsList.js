import { useState } from "react";
import CollectionCard from "./CollectionCard";

function ProductsList() {
    const [showAll, setShowAll] = useState(false);
    const viewAll = () => setShowAll(true);
    console.log(showAll);
    return (
        <div className="w-full mx-auto px-4 md:px-8">
            <div className="flex flex-col sm:flex-row justify-between items-center bg-white p-4 rounded-sm shadow-sm mt-4 mb-6 w-full">
                <h1 className="text-xl sm:text-2xl font-bold text-orange-950 mb-2 sm:mb-0">Collections List</h1>
                <button onClick={viewAll} className="px-4 py-2 text-orange-950 rounded-lg hover:text-orange-900 transition flex items-center gap-1">
                    View All <span className="text-lg">→</span>
                </button>

            </div>

            <CollectionCard showAll={showAll} />

        </div>
    );
}

export default ProductsList;

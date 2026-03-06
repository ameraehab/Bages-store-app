import collection1 from "../assets/images/collection1.jpg";
import collection2 from "../assets/images/collection2.jpg";
import collection3 from "../assets/images/collection3.jpg";
import collection4 from "../assets/images/collection4.jpg";
import collection5 from "../assets/images/collection5.jpg";
import { Link } from "react-router-dom";

export const collections = [
    { id: 1, name: "Classic Elegance", image: collection1 },
    { id: 2, name: "Evening Glam", image: collection2 },
    { id: 3, name: "Urban Chic", image: collection3 },
    { id: 4, name: "Travel Buddy", image: collection4 },
    { id: 5, name: "Jeune Premier", image: collection5 },
];

function CollectionCard({ showAll }) {

    const visibleCollection = showAll ? collections : collections.slice(0, 4);

    return (

        <div className="container mx-auto p-5">
            <Link to="/selected">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">

                    {
                        visibleCollection.map((collection, index) => (
                            <img
                                src={collection.image}
                                key={collections.id}
                                alt={`collection ${index}`}
                                className="card w-full max-w-[255px] h-[328px] rounded-lg shadow-md cursor-pointer "
                            />

                        ))
                    }

                </div>
            </Link>


        </div>

    );
}

export default CollectionCard;


import { Link } from "react-router-dom";



function CollectionCard({ showAll }) {
    const collections = [
        { id: 1, name: "Classic Elegance", image: "/images/collection1.jpg" },
        { id: 2, name: "Evening Glam", image: "/images/collection2.jpg" },
        { id: 3, name: "Urban Chic", image: "/images/collection3.jpg" },
        { id: 4, name: "Travel Buddy", image: "/images/collection4.jpg" },
        { id: 5, name: "Jeune Premier", image: "/images/collection5.jpg" },
    ];
    const visibleCollection = showAll ? collections : collections.slice(0, 4);

    return (

        <div className="container mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">

                {
                    visibleCollection.map((collection, index) => (
                        <Link key={collection.id} to={`/collection/${collection.name}/${collection.id}`} >
                            <img
                                src={collection.image}
                                key={collection.id}
                                alt={`collection ${index}`}
                                className="card w-[280px] h-[328px] rounded-lg shadow-md cursor-pointer "
                            />
                        </Link>

                    ))
                }

            </div>


        </div >

    );
}

export default CollectionCard;

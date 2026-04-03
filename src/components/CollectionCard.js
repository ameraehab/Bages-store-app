
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";


function CollectionCard({ showAll }) {
    const { collections } = useContext(CartContext);

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

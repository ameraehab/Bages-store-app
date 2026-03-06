import collection1 from "../assets/images/collection1.jpg";
import collection2 from "../assets/images/collection2.jpg";
import collection3 from "../assets/images/collection3.jpg";
import collection4 from "../assets/images/collection4.jpg";
import collection5 from "../assets/images/collection5.jpg";

const collectionsImages = [collection1, collection2, collection3, collection4, collection5];
function CollectionCard({ showAll }) {

    const visibleCollection = showAll ? collectionsImages : collectionsImages.slice(0, 4);
    return (
        <div className="container mx-auto p-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 justify-items-center">

                {
                    visibleCollection.map((collection, index) => (

                        <img
                            src={collection}
                            key={index}
                            alt={`collection ${index}`}
                            className="w-full max-w-[255px] h-[330px] rounded-lg shadow-md"
                        />

                    ))

                }
            </div>
        </div>
    );
}

export default CollectionCard;

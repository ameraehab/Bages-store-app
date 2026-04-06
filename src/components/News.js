import bags from "../bags.json";

function News() {
    const newsBages = bags.filter(b => b.id % 2 == 0)
    return (
        <>
            <p className="p-1 mt-8 text-xl font-semibold text-[#351b00] text-center">{newsBages.length} New Bag</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 p-8">
                {
                    newsBages.map((index) => (
                        <div
                            key={index.id}
                            className="shadow p-2 hover:shadow-lg hover:scale-105 transition-transform duration-300 relative "
                        >
                            <img
                                src={index.image}
                                alt={index.title}
                                className="w-full h-[450px] object-center  mb-2 rounded "
                            />

                            <h3 className="font-semibold mt-2">{index.title}</h3>
                            <p className="text-orange-700 font-bold">{index.price}$</p>




                        </div>
                    )

                    )
                }
            </div>
        </>

    )

}

export default News;
function About(params) {
    return (
        <div className="about-page max-w-6xl mx-auto p-6 md:p-12 bg-white rounded-xl shadow-lg mt-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Content */}
                <div className="flex-1 space-y-6 text-gray-700 text-base md:text-lg leading-relaxed">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-orange-700 mb-4">
                        About Us
                    </h1>

                    <p>
                        Welcome to our <span className="font-semibold text-orange-600">Bag Store</span>!
                        We offer a wide variety of stylish and high-quality handbags for every occasion.
                        Whether you're looking for a casual tote, a luxury shoulder bag, or a trendy crossbody,
                        we have something perfect for you.
                    </p>

                    <p>
                        Our mission is to provide the best products with a seamless shopping experience.
                        We carefully select each item to ensure <span className="font-semibold">premium quality </span>
                        and unique design. Browse our collections and find the perfect bag that matches your style.
                    </p>
                </div>

                {/* Image */}
                <div className="flex-1">
                    <img
                        src="/images/about-page.jpeg"
                        alt="Stylish bags"
                        className="w-full rounded-lg shadow-md object-cover"
                    />
                </div>
            </div>
        </div>
    );
}
export default About;
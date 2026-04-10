import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { MdRemoveShoppingCart } from "react-icons/md";

function CartList() {
    const { bage, removeFromCart, addQty } = useContext(CartContext);

    const total = bage.reduce((acc, item) => {
        return acc + item.price * item.Quantity;
    }, 0);

    return (
        <div className="max-w-7xl mx-auto p-6">

            <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

            {bage.length === 0 ? (
                <p className="text-center text-gray-500 text-lg mt-20">
                    Your cart is empty 🛒
                </p>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    <div className="lg:col-span-2 space-y-6">

                        {bage.map((item) => (
                            <div
                                key={item.id}
                                className="flex gap-5 border-b pb-5 items-center"
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-28 h-28 object-cover rounded-lg"
                                />

                                <div className="flex-1">
                                    <h2 className="font-semibold text-lg">
                                        {item.title}
                                    </h2>

                                    <p className="text-gray-500 mt-1">
                                        ${item.price}
                                    </p>

                                    <div className="flex items-center gap-3 mt-3">
                                        <button
                                            onClick={() =>
                                                addQty(item.Quantity - 1, item.id)
                                            }
                                            className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            -
                                        </button>

                                        <span className="font-medium">
                                            {item.Quantity}
                                        </span>

                                        <button
                                            onClick={() =>
                                                addQty(item.Quantity + 1, item.id)
                                            }
                                            className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>

                                <div className="text-right">
                                    <p className="font-semibold text-lg">
                                        ${item.price * item.Quantity}
                                    </p>

                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-500 hover:text-red-700 mt-2 text-md"
                                    >
                                        ✕                                    </button>
                                </div>
                            </div>
                        ))}

                    </div>

                    <div className="bg-gray-50 p-6 rounded-2xl shadow-md h-fit sticky top-20">

                        <h2 className="text-xl font-semibold mb-6">
                            Order Summary
                        </h2>

                        <div className="flex justify-between text-lg mb-4">
                            <span>Subtotal</span>
                            <span>${total}</span>
                        </div>

                        <hr className="my-4" />

                        <div className="flex justify-between text-xl font-bold mb-6">
                            <span>Total</span>
                            <span className="text-orange-700">${total}</span>
                        </div>

                        <button className="w-full bg-orange-700 text-white py-3 rounded-xl hover:bg-orange-800 transition text-lg font-medium">
                            Checkout
                        </button>

                    </div>

                </div>
            )}
        </div>
    );
}

export default CartList;

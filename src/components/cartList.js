import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { MdRemoveShoppingCart } from "react-icons/md";

function CartList() {
    const { bage, removeFromCart, addQty } = useContext(CartContext);

    return (
        <div className="p-5">
            {bage.length === 0 ? (
                <p className="text-center text-gray-500 text-lg mt-10">Cart is Empty 🛒</p>
            ) : (
                <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200 text-left">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 border">Product</th>
                                <th className="px-4 py-2 border">Bag Model</th>
                                <th className="px-4 py-2 border">Price</th>
                                <th className="px-4 py-2 border">Quantity</th>
                                <th className="px-4 py-2 border">Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bage.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50">
                                    <td className="px-4 py-2 border">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                    </td>
                                    <td className="px-4 py-2 border">{item.title}</td>
                                    <td className="px-4 py-2 border">{item.price}$</td>
                                    <td className="px-4 py-2 border">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => addQty(item.Quantity - 1, item.id)}
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                -
                                            </button>
                                            <span>{item.Quantity}</span>
                                            <button
                                                onClick={() => addQty(item.Quantity + 1, item.id)}
                                                className="px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                                            >
                                                +
                                            </button>
                                        </div>
                                    </td>
                                    <td className="px-4 py-2 border">
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-500 hover:text-red-700 flex items-center gap-1"
                                        >
                                            <MdRemoveShoppingCart size={20} /> Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}

export default CartList;
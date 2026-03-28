import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { MdRemoveShoppingCart } from "react-icons/md";

function CartList() {
    const { bage, removeFromCart } = useContext(CartContext);

    return (
        <>

            <div className="p-5">
                {bage.length === 0 ? (
                    <p> Cart is Empty 🛒</p>
                ) : (
                    bage.map((item) => (
                        <div key={item.id}>
                            <div className="border p-2 mb-2">
                                <img src={item.img} />
                                <h3>{item.title}</h3>
                                <p>{item.price}$</p>
                            </div>
                            <button onClick={() => removeFromCart(item.id)}>
                                <MdRemoveShoppingCart />

                            </button>


                        </div>


                    ))
                )}
            </div>
        </>

    );
}

export default CartList;
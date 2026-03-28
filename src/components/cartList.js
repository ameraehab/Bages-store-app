import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import { MdRemoveShoppingCart } from "react-icons/md";

function CartList() {
    const { removeFromCart } = useContext(CartContext);

    const { bage } = useContext(CartContext);
    return (
        <>

            <div className="p-5">
                {bage.length === 0 ? (
                    <p> Cart is Empty 🛒</p>
                ) : (
                    bage.map((item) => (
                        <div>
                            <div key={item.id} className="border p-2 mb-2">
                                <img src={item.img} />
                                <h3>{item.title}</h3>
                                <p>{item.price}$</p>
                            </div>
                            <button onClick={() => removeFromCart()}>
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
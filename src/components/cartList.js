import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function CartList() {
    const { bage } = useContext(CartContext);
    return (
        <div className="p-5">
            {bage.length === 0 ? (
                <p> Cart is Empty 🛒</p>
            ) : (
                bage.map((item) => (
                    <div key={item.id} className="border p-2 mb-2">
                        <h3>{item.title}</h3>
                        <p>{item.price}$</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default CartList;
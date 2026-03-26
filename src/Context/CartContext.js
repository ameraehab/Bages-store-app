import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [bage, setBag] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(bage));
    }, [bage]);

    const addToCart = (item) => {
        const exists = bage.some((bag) => bag.id === item.id);

        if (exists) {
            console.log(`⚠️ ${item.title} موجود بالفعل في السلة!`, "warning");
            return;
        }

        setBag((prev) => [...prev, item]);
    };

    return (
        <CartContext.Provider value={{ bage, addToCart }}>
            {children}
        </CartContext.Provider>
    );
}

export default CartProvider;
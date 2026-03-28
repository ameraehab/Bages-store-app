import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [showAlert, setAlert] = useState(false);
    const [bage, setBag] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(bage));
    }, [bage]);

    const removeFromCart = (bage) => {
        bage.remove(bage.id);
    }
    const addToCart = (item) => {
        const exists = bage.some((bag) => bag.id === item.id);

        if (exists) {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);
            }, 2000);

            return;

        }

        setBag((prev) => [...prev, item]);
    };

    return (

        <CartContext.Provider value={{ bage, addToCart, removeFromCart }}>
            <>
                {showAlert && (
                    <div className="fixed top-20 right-5 z-50">
                        <div
                            role="alert"
                            className="bg-orange-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center animate-slideIn"
                        >
                            <p className="text-sm font-semibold">
                                The bag is already in the shopping cart 🛒
                            </p>
                        </div>
                    </div>
                )}
                {children}

            </>
        </CartContext.Provider>
    );
}

export default CartProvider;
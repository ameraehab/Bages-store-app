import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
    const [showAlert, setAlert] = useState(false);
    const [showAlertSucces, setAlertSucces] = useState(false);
    const [showAlertRemove, setAlertRemove] = useState(false);
    const [user, setUser] = useState(null);

    const [bage, setBag] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const collections = [
        { id: 1, name: "Classic Elegance", image: "/images/collection1.jpg" },
        { id: 2, name: "Evening Glam", image: "/images/collection2.jpg" },
        { id: 3, name: "Urban Chic", image: "/images/collection3.jpg" },
        { id: 4, name: "Travel Buddy", image: "/images/collection4.jpg" },
        { id: 5, name: "Jeune Premier", image: "/images/collection5.jpg" },
    ];

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(bage));
    }, [bage]);

    const addQty = (qty, qtyId) => {
        if (qty < 1) return;

        setBag(prev =>
            prev.map(item =>
                item.id == qtyId
                    ? { ...item, Quantity: qty }
                    : item
            )
        );
    };




    const removeFromCart = (id) => {
        setBag(prev => prev.filter(item => item.id !== id));
        let removed = true;
        if (removed) {
            setAlertRemove(true);
            setTimeout(() => {
                setAlertRemove(false);
            }, 2000);
            removed = false;
        }

    }
    const addToCart = (item, qty, price) => {
        const exists = bage.some((bag) => bag.id === item.id);

        if (exists) {
            setAlert(true);
            setTimeout(() => {
                setAlert(false);

            }, 2000);

            return;

        }

        setBag((prev) => [...prev, item]);
        if (!exists) {
            setAlertSucces(true);
            setTimeout(() => {
                setAlertSucces(false);

            }, 2000);

            return;
        }

    };
    const total = bage.reduce((sum, item) => {
        return sum + item.price * item.Quantity;
    }, 0);

    return (

        <CartContext.Provider value={{ bage, addToCart, removeFromCart, addQty, total, collections, setUser, user }}>
            <>
                {showAlert && (
                    <div className="fixed top-24 right-5 z-50">



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
                {showAlertRemove && (
                    <div className="fixed top-24 right-5 z-50">



                        <div
                            role="alert"
                            className="bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center animate-slideIn"
                        >
                            <p className="text-sm font-semibold">
                                The bag is removed from the shopping cart 🛒
                            </p>
                        </div>
                    </div>
                )}
                {showAlertSucces && (
                    <div className="fixed top-24 right-5 z-50">



                        <div
                            role="alert"
                            className="bg-green-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center animate-slideIn"
                        >
                            <p className="text-sm font-semibold">
                                The bag added to the shopping cart 🛒
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
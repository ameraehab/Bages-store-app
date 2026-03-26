import { createContext } from "react-router-dom";

export const BagesContext = createContext();

function CartProvider(props) {
    const [bage, setBag] = useState([]);

    return (
        <BagesContext.Provider value={bage}>
            {props.Children}
        </BagesContext.Provider>
    )

}

export default CartProvider;
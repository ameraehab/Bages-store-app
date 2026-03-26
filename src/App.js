import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductsList from "./components/ProductsList";
import SelectedCollection from "./components/SelectedCollection"
import "./App.css"
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import CartProvider from "./Context/CartContext";
function App() {
  return (
    <div className="App">


      <Routes>
        <Route
          path="/"
          element={
            <>
              <Carousel />
              <ProductsList />
            </>
          }
        />
        <Route path="/about" element={<About />} />
        <CartProvider>
          <Navbar />

          <Route path="/collection/:collectionName/:collectionNumber" element={<SelectedCollection />} />

        </CartProvider>

      </Routes>

    </div>
  );
}




export default App;

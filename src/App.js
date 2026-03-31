import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductsList from "./components/ProductsList";
import SelectedCollection from "./components/SelectedCollection"
import "./App.css"
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
import CartProvider from "./Context/CartContext";
import CartList from "./components/CartList";
import Footer from "./components/Footer";
function App() {

  return (
    <CartProvider>
      <div className="App flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
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

            <Route path="/collection/:collectionName/:collectionNumber" element={<SelectedCollection />} />

            <Route path="/cart" element={<CartList />} />

          </Routes>

        </main>
        <Footer />
      </div>
    </CartProvider>

  );
}




export default App;

import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import ProductsList from "./components/ProductsList";
import SelectedCollection from "./components/SelectedCollection"
import "./App.css"
import { Routes, Route } from "react-router-dom";
import About from "./components/About";
function App() {
  return (
    <div className="App">
      <Navbar />

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
        <Route path="/selected" element={<SelectedCollection />} />
      </Routes>

    </div>
  );
}




export default App;

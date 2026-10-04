import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage/Homepage";
import WhatsNew from "./components/WhatsNewpage/WhatsNew";
import Aboutpage from "./components/AboutUspage/Aboutuspage";
import Salepage from "./components/Salepage/Salepage";
import ProductDetails from "./components/ProductDetails/ProductDetails";

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route
          path="/"
          element={<Homepage />}
        />

        <Route
          path="/whatsnew"
          element={<WhatsNew />}
        />

        <Route
          path="/about"
          element={<Aboutpage />}
        />

        <Route
          path="/sale"
          element={<Salepage />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;
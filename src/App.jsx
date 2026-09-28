import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./Navbar/Navbar";
import Footer from "./Navbar/Footer";

const Home = lazy(() => import("./Home/Home"));
const StorePage = lazy(() => import("./Pages/StorePage"));
const MacPage = lazy(() => import("./Pages/MacPage"));
const IphonePage = lazy(() => import("./Pages/IphonePage"));
const IpadPage = lazy(() => import("./Pages/IpadPage"));
const AccessoryPage = lazy(() => import("./Pages/AccessoryPage"));
const SupportPage = lazy(() => import("./Pages/SupportPage"));
const CartPage = lazy(() => import("./Pages/CartPage"));
const LearnMore = lazy(() => import("./Pages/LeanMore"));

const App = () => {
  return (
    <>
      <Navbar />

      <Suspense
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <p className="text-xl">Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/mac" element={<MacPage />} />
          <Route path="/iphone" element={<IphonePage />} />
          <Route path="/ipad" element={<IpadPage />} />
          <Route path="/accessory" element={<AccessoryPage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/LearnMore" element={<LearnMore />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
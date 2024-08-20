// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home.jsx";
import Navbar from "../components/Navbar/Navbar";
import MenSection from "../pages/menSection";
import WomenSection from "../pages/WomenSection";
import KidsSection from "../pages/KidsSection";
import BeautySection from "../pages/BeautySection";
import Signup from "../pages/Signup";
import CreateAccount from "../pages/CreateAccount";
import Footer from "../components/Footer/Footer.jsx";
import CategoryCard from "../pages/Categorypages/CategoryCard";
import CategoryCardTwo from "../pages/Categorypages/CategoryCardTwo";
import CardPages from "../pages/CardPages/CardPages";
import Card from "../components/Card";
import MensCollectionStore from "../pages/MensCollPages/mensCollectionStore";
import WomenCollectionStore from "../pages/WomencollPages/WomenCollectionStore";
import BestSellStore from "../pages/BestSellPages/BestSellStore";
import BestSellers from "../components/BestSellers";
import ProductOverviews from "../pages/ProductOverviews.jsx";
import Order from "../pages/Order/Order.jsx";

const CustomerRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MEN" element={<MenSection />} />
        <Route path="/WOMEN" element={<WomenSection />} />
        <Route path="/KIDS" element={<KidsSection />} />
        <Route path="/BEAUTY" element={<BeautySection />} />
        <Route path="/Signin" element={<Signup />} />
        <Route path="/Create account" element={<CreateAccount />} />
        <Route path="/CategoryCard" element={<CategoryCard />} />
        <Route path="/CategoryCardTwo" element={<CategoryCardTwo />} />
        <Route path="/CardPages" element={<CardPages />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/mensCollectionStore" element={<MensCollectionStore />} />
        <Route  path="/WomenCollectionStore" element={<WomenCollectionStore />}/>
        <Route path="/BestSellStore" element={<BestSellStore />} />
        <Route path="/BestSellers" element={<BestSellers />} />
        <Route path="/ProductOverviews" element={<ProductOverviews/>} />
        <Route path="/Order" element={<Order/>} />
      </Routes>
      <Footer />
    </>
  );
};

export default CustomerRouter;

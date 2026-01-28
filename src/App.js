import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import Header from "./components/Header";
import FooterSection from "./components/FooterSection/FooterSection";
import SubscribePopup from "./components/SubscribePopup/SubscribePopup";

import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import BlogGridPage from "./Pages/BlogPage/BlogPageContent";
import ShopPage from "./Pages/ShopPage/ShopPage";
import CategoryProducts from "./Pages/ProductCategoryPage/ProductCategoryPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage/ProductDetailsPage";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/wp-react-theme/" element={<HomePage />} />
          <Route path="/wp-react-theme/contact/" element={<ContactPage />} />
          <Route path="/wp-react-theme/blog/" element={<BlogGridPage />} />
          <Route path="/wp-react-theme/shop/" element={<ShopPage />} />
          <Route
            path="/wp-react-theme/product-category/*"
            element={<CategoryProducts />}
          />
          <Route
            path="/wp-react-theme/product/:slug"
            element={<ProductDetailsPage />}
          />
        </Routes>

        <SubscribePopup />
        <FooterSection />
      </BrowserRouter>
    </CartProvider>
  );
}

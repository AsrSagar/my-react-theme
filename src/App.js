import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FooterSection from './components/FooterSection/FooterSection';
import SubscribePopup from './components/SubscribePopup/SubscribePopup';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactPage';
import BlogGridPage from './Pages/BlogPage/BlogPageContent';
import CategoryProducts from './Pages/ProductCategoryPage/ProductCategoryPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/wp-react-theme/" element={<HomePage />} />
          <Route path="/wp-react-theme/contact/" element={<ContactPage />} />
          <Route path="/wp-react-theme/blog/" element={<BlogGridPage />} />
          <Route path="/wp-react-theme/product-category/*" element={<CategoryProducts />} />
        </Routes>
        <SubscribePopup />
        <FooterSection />
      </BrowserRouter>
    </>
  );
}

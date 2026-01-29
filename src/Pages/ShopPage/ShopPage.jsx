import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../../context/CartContext";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [cart, setCart] = useState([]); // Local cart state
  const navigate = useNavigate();
  const { addToCart, isInCart } = useCart();
  const [loadingId, setLoadingId] = useState(null);

  // Extract slug safely from WooCommerce permalink
  const getSlugFromPermalink = (permalink) => {
    if (!permalink) return "";
    return permalink.split("/").filter(Boolean).pop();
  };

  // Navigate to product details page
  const goToProduct = (permalink) => {
    const slug = getSlugFromPermalink(permalink);
    if (!slug) return;
    navigate(`/wp-react-theme/product/${slug}`);
  };

  const handleAddToCart = (product) => {
    if (!isInCart(product.id)) {
      setLoadingId(product.id);
      // simulate async add
      setTimeout(() => {
        addToCart(product);
        setLoadingId(null);
      }, 600);
    }
  };

  // Fetch products from WooCommerce
  useEffect(() => {
    fetch(
      "http://localhost/wp-react-theme/wp-json/wc/store/v1/products?per_page=12"
    )
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setError("Failed to load products.");
        setLoading(false);
      });
  }, []);

  // Add product to cart

  return (
    <>
      {/* ===== HEADER ===== */}
      <div id="custom-header">
        <div className="custom-header-content">
          <div className="container">
            <h1 className="page-title">Shop</h1>

            <div id="breadcrumb">
              <div
                aria-label="Breadcrumbs"
                className="breadcrumbs breadcrumb-trail"
              >
                <ul className="trail-items">
                  <li className="trail-item trail-begin">
                    <span>Home</span>
                  </li>
                  <li className="trail-item trail-end">
                    <span>Shop</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="content" className="site-content default-full-width">
        <div className="container">
          <div className="inner-wrapper">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <div className="section-products">
                  <div className="pruduct-filter-row clear-fix">
                    <div className="filter-row-box product-view pull-left">
                      <a href="#l" className="cat-grid active" title="Category grid"><i className="fa fa-th"></i></a>
                      <a href="#" className="cat-list" title="Category List"><i className="fa fa-th-list"></i></a>
                    </div>
                    <div className="filter-row-box product-listing-filter">
                      <div className="sort-by">
                        <span className="sort-by-list">Sort by popularity</span>
                        <ul>
                          <li><a href="#">Sort by popularity</a></li>
                          <li><a href="#">Sort by average rating</a></li>
                          <li><a href="#">Sort by newness</a></li>
                          <li><a href="#">Sort by price: low to high</a></li>
                          <li><a href="#">Sort by price: high to low</a></li>
                        </ul>
                      </div>
                    </div>
                    <nav className="filter-row-box navigation pagination pull-right">
                      <div className="nav-links">
                        <span className="page-numbers current">1</span>
                        <a className="page-numbers" href="#">2</a>
                        <a className="page-numbers" href="#">3</a>
                        <a className="next page-numbers" href="#">Next »</a>
                      </div>
                    </nav>
                  </div>
                  <div className="inner-wrapper">
                    <div className="products-inner-wrapper clear-fix">
                      {products.map((product) => (
                        <div className="product-item col-grid-3 top-space">
                          <div className="product-item-wrapper zoom-effect-hover-container box-shadow-block">
                            <div className="product-thumb zoom-effect">
                              <a className="thumbnail" href={product.permalink} onClick={(e) => { e.preventDefault(); goToProduct(product.permalink); }}>
                                <img 
                                  alt={product.name}
                                  src={product.images[0]?.src} 
                                />
                              </a>
                              <div className="pruduct-buttons">
                                <button
                                  className="product-button tooltip"
                                  onClick={() => handleAddToCart(product)}
                                  disabled={loadingId === product.id || isInCart(product.id)} // <-- add isInCart
                                >
                                  <i
                                    className={
                                      loadingId === product.id
                                        ? "fas fa-spinner fa-spin"
                                        : isInCart(product.id)
                                        ? "fas fa-check"
                                        : "fas fa-cart-plus"
                                    }
                                  ></i>
                                  <span className="tooltiptext tooltip-right">
                                    {loadingId === product.id
                                      ? "Adding..."
                                      : isInCart(product.id)
                                      ? "Added"
                                      : "Add To Cart"}
                                  </span>
                                </button>
                                <button href="#" className="product-button tooltip"><i className="far fa-heart"></i><span className="tooltiptext tooltip-right">Wishlist</span></button>
                                <button href="#" className="product-button tooltip"><i className="fa fa-retweet"></i><span className="tooltiptext tooltip-right">Compair</span></button>
                              </div>
                              <div className="quick-view">
                                <a href="#quick-view-content-wrappr" className="custom-button button-small quick-view-link"><i className="far fa-eye"></i>Quick View</a>
                              </div>
                              <span className="ribbon-rotated onsale">-16%</span>
                            </div>
                            <div className="product-item-details">
                              <h3 className="product-title">
                                <a 
                                  href={product.permalink} 
                                  onClick={(e) => { e.preventDefault(); 
                                  goToProduct(product.permalink); }} 
                                  title="title">{product.name}
                                </a>
                              </h3>
                              <div className="product-ratings">
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="star active"></span>
                                <span className="star"></span>
                                <span className="star"></span>
                              </div>
                              <div
                                className="product-price-container"
                                dangerouslySetInnerHTML={{
                                  __html: product.price_html,
                                }}
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pruduct-filter-row clear-fix top-space">
                    <div className="filter-row-box pull-left">
                      <span>Showing: 1-12 of 16</span>
                    </div>
                    <nav className="filter-row-box navigation pagination pull-right">
                      <div className="nav-links">
                        <span className="page-numbers current">1</span>
                        <a className="page-numbers" href="#">2</a>
                        <a className="page-numbers" href="#">3</a>
                        <a className="next page-numbers" href="#">Next »</a>
                      </div>
                    </nav>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>

      
      
    </>
  );
};

export default ShopPage;

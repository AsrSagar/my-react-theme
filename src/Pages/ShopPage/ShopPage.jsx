import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Extract slug safely from WooCommerce permalink
  const getSlugFromPermalink = (permalink) => {
    if (!permalink) return "";
    return permalink.split("/").filter(Boolean).pop();
  };

  // Navigate to product details page
  const goToProduct = (permalink) => {
    const slug = getSlugFromPermalink(permalink);
    if (!slug) return;
    navigate(`/product/${slug}`);
  };

  useEffect(() => {
    fetch(
      "http://localhost/wp-react-theme/wp-json/wc/store/v1/products?per_page=12"
    )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
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

      {/* ===== CONTENT ===== */}
      <div id="content" className="site-content default-full-width">
        <div className="container">
          <div className="inner-wrapper">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <div className="section-products">
                  <div className="pruduct-filter-row clear-fix">
                    <div className="filter-row-box product-view pull-left">
                      <a href="#l" class="cat-grid active" title="Category grid"><i className="fa fa-th"></i></a>
                      <a href="#" class="cat-list" title="Category List"><i class="fa fa-th-list"></i></a>
                    </div>
                    <div class="filter-row-box product-listing-filter">
                      <div class="sort-by">
                        <span class="sort-by-list">Sort by popularity</span>
                        <ul>
                          <li><a href="#">Sort by popularity</a></li>
                          <li><a href="#">Sort by average rating</a></li>
                          <li><a href="#">Sort by newness</a></li>
                          <li><a href="#">Sort by price: low to high</a></li>
                          <li><a href="#">Sort by price: high to low</a></li>
                        </ul>
                      </div>
                    </div>
                    <nav class="filter-row-box navigation pagination  pull-right">
                      <div class="nav-links">
                        <span class="page-numbers current">1</span>
                        <a class="page-numbers" href="#" >2</a>
                        <a class="page-numbers" href="#" >3</a>
                        <a class="next page-numbers" href="#" >Next »</a>
                      </div> 
                    </nav> 
                  </div>
                  <div class="inner-wrapper">
       

                      {/* LOADING */}
                      {loading && (
                        <div className="grid-message">
                          <p>Loading products...</p>
                        </div>
                      )}

                      {/* ERROR */}
                      {!loading && error && (
                        <div className="grid-message">
                          <p>{error}</p>
                        </div>
                      )}

                      {/* PRODUCTS GRID */}
                      {!loading && !error && products.length > 0 && (
                        <div className="products-inner-wrapper clear-fix">
                          {products.map((product) => (
                            <div
                              key={product.id}
                              className="product-item col-grid-3 top-space"
                            >
                              <div className="product-item-wrapper zoom-effect-hover-container box-shadow-block">

                                {/* IMAGE */}
                                <div
                                  className="product-thumb zoom-effect"
                                  onClick={() => goToProduct(product.permalink)}
                                  style={{ cursor: "pointer" }}
                                >
                                  <div className="thumbnail">
                                    <img
                                      src={
                                        product.images &&
                                        product.images.length > 0
                                          ? product.images[0].src
                                          : "/placeholder.png"
                                      }
                                      alt={product.name}
                                    />
                                  </div>

                                  {/* ACTION BUTTONS */}
                                  <div
                                    className="pruduct-buttons"
                                    onClick={(e) => e.stopPropagation()}
                                  >
                                    <button className="product-button tooltip">
                                      <i className="fas fa-cart-plus"></i>
                                      <span className="tooltiptext tooltip-right">
                                        Add To Cart
                                      </span>
                                    </button>

                                    <button className="product-button tooltip">
                                      <i className="far fa-heart"></i>
                                      <span className="tooltiptext tooltip-right">
                                        Wishlist
                                      </span>
                                    </button>

                                    <button className="product-button tooltip">
                                      <i className="fa fa-retweet"></i>
                                      <span className="tooltiptext tooltip-right">
                                        Compare
                                      </span>
                                    </button>
                                  </div>
                                </div>

                                {/* DETAILS */}
                                <div className="product-item-details">
                                  <h3
                                    className="product-title"
                                    onClick={() => goToProduct(product.permalink)}
                                    style={{ cursor: "pointer" }}
                                  >
                                    {product.name}
                                  </h3>

                                  {product.price_html && (
                                    <div
                                      className="product-price-container"
                                      dangerouslySetInnerHTML={{
                                        __html: product.price_html,
                                      }}
                                    />
                                  )}
                                </div>

                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* NO PRODUCTS */}
                      {!loading && !error && products.length === 0 && (
                        <div className="grid-message">
                          <p>No products found.</p>
                        </div>
                      )}
 
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

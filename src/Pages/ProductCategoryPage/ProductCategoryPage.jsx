import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./ProductCategoryPage.scss";

const CategoryProducts = () => {
  const location = useLocation();

  // Extract full category path
  const categoryPath = location.pathname
    .replace("/wp-react-theme/product-category/", "")
    .replace(/\/$/, "");

  // WooCommerce uses the LAST slug
  const slug = categoryPath.split("/").pop();

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    setLoading(true);

    fetch(
      `http://localhost/wp-react-theme/wp-json/reactpress/v1/products?category=${slug}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("API Error:", err);
        setLoading(false);
      });
  }, [slug]);

  return (
    <>
      {/* HEADER */}
      <div id="custom-header">
        <div className="custom-header-content">
          <div className="container">
            <h1 className="page-title">{slug.replace(/-/g, " ")}</h1>

            <div id="breadcrumb">
              <div
                aria-label="Breadcrumbs"
                className="breadcrumbs breadcrumb-trail"
              >
                <ul className="trail-items">
                  <li className="trail-item trail-begin">
                    <a href="/wp-react-theme/" rel="home">
                      <span>Home</span>
                    </a>
                  </li>

                  {categoryPath.split("/").map((item, index) => (
                    <li key={index} className="trail-item">
                      <span>{item.replace(/-/g, " ")}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div id="content" className="site-content global-layout-right-sidebar">
        <div className="container">
          <div className="inner-wrapper">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <div className="section-products">
                  <div className="inner-wrapper">
                    <div className="products-inner-wrapper clear-fix">
                      {/* LOADING */}
                      {loading && (
                        <div className="grid-message">
                          <p>Loading products...</p>
                        </div>
                      )}

                      {/* EMPTY */}
                      {!loading && products.length === 0 && (
                        <div className="grid-message">
                          <p>No products found.</p>
                        </div>
                      )}

                      {/* PRODUCTS GRID */}
                      {!loading && products.length > 0 && (
                        <div className="products-grid-row clear-fix">
                          {products.map((product) => (
                            <div
                              key={product.id}
                              className="product-item col-grid-4 top-space"
                            >
                              <div className="product-item-wrapper zoom-effect-hover-container box-shadow-block">
                                <div className="product-thumb zoom-effect">
                                  <a
                                    className="thumbnail"
                                    href={product.link}
                                  >
                                    <img
                                      src={product.image}
                                      alt={product.name}
                                    />
                                  </a>

                                    <div className="pruduct-buttons">
                                        <a href="#" className="product-button tooltip">
                                            <i className="fas fa-cart-plus"></i>
                                            <span className="tooltiptext tooltip-right">Add To Cart</span>
                                        </a>
                                        <a href="#" className="product-button tooltip">
                                            <i className="far fa-heart"></i>
                                            <span className="tooltiptext tooltip-right">Wishlist</span>
                                        </a>
                                        <a href="#" className="product-button tooltip">
                                            <i className="fa fa-retweet"></i>
                                            <span className="tooltiptext tooltip-right">Compair</span>
                                        </a>
                                    </div>
                                    <div className="quick-view">
                                        <a href="#quick-view-content-wrappr" className="custom-button button-small quick-view-link">
                                            <i className="far fa-eye"></i>Quick View
                                        </a>
                                    </div>
                                    <span className="ribbon-rotated onsale">-16%</span>
                                </div>

                                <div className="product-item-details">
                                  <h3 className="product-title">
                                    <a href={product.link}>
                                      {product.name}
                                    </a>
                                  </h3>

                                  <div
                                    className="product-price-container"
                                    dangerouslySetInnerHTML={{
                                      __html: product.price,
                                    }}
                                  />
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </main>
            </div>

            {/* SIDEBAR */}
            <div id="sidebar-primary" className="sidebar widget-area">
              <div className="sidebar-widget-wrapper">
                <aside className="widget widget-category">
                  <h3 className="widget-title">Categories</h3>
                  <ul>
                    <li>
                      <a href="/wp-react-theme/product-category/winter">
                        Winter
                      </a>
                    </li>
                    <li>
                      <a href="/wp-react-theme/product-category/winter/jackets">
                        Jackets
                      </a>
                    </li>
                    <li>
                      <a href="/wp-react-theme/product-category/winter/jackets/leather">
                        Leather Jackets
                      </a>
                    </li>
                  </ul>
                </aside>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;

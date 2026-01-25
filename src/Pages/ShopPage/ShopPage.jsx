import React, { useEffect, useState } from "react";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("http://localhost/wp-react-theme/wp-json/wc/store/v1/products?per_page=12")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch products");
        return res.json();
      })
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setError("Failed to load products. Please check the API or CORS settings.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p style={{ textAlign: "center", marginTop: "50px" }}>Loading products...</p>;
  if (error) return <p style={{ textAlign: "center", marginTop: "50px", color: "red" }}>{error}</p>;

  return (
    <>
      {/* Header */}
      <div id="custom-header">
        <div className="custom-header-content">
          <div className="container">
            <h1 className="page-title">Shop</h1>
            <div id="breadcrumb">
              <div aria-label="Breadcrumbs" className="breadcrumbs breadcrumb-trail">
                <ul className="trail-items">
                  <li className="trail-item trail-begin">
                    <a href="#" rel="home"><span>Home</span></a>
                  </li>
                  <li className="trail-item trail-end"><span>Shop</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div id="content" className="site-content default-full-width">
        <div className="container">
          <div className="inner-wrapper">
            <div id="primary" className="content-area">
              <main id="main" className="site-main">
                <div className="section-products">

                  {/* Filter / Pagination Row */}
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

                  {/* Products Grid */}
                  <div className="inner-wrapper">
                    <div className="products-inner-wrapper clear-fix">
                      {products.length > 0 ? (
                        products.map((product, index) => (
                          <div key={product.id} className="product-item col-grid-3 top-space">
                            <div className="product-item-wrapper zoom-effect-hover-container box-shadow-block">
                              <div className="product-thumb zoom-effect">
                                <a className="thumbnail" href="#">
                                  <img
                                    alt={product.name}
                                    src={
                                      product.images?.[0]?.src ||
                                      product.image?.src ||
                                      "https://via.placeholder.com/300"
                                    }
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
                                    <span className="tooltiptext tooltip-right">Compare</span>
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
                                  <a href="product.html" title={product.name}>{product.name}</a>
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
                                  dangerouslySetInnerHTML={{ __html: product.price_html }}
                                />
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p>No products found.</p>
                      )}
                    </div>
                  </div>

                  {/* Pagination Bottom */}
                  <div className="pruduct-filter-row clear-fix top-space">
                    <div className="filter-row-box pull-left">
                      <span>Showing: 1-{products.length} of {products.length}</span>
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

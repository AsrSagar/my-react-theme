import React from 'react';
import config from '../../config';

const ProductSidebar = () => {
  const SITE_URL = config.SITE_URL

  return (
    <aside className="section">
      <div className="container">
        <div className="inner-wrapper">
          {/* Featured Products */}
          <div className="col-grid-4">
            <div className="recent-product-list">
              <div className="section-title-wrap text-alignleft">
                <h2 className="section-title">Featured</h2>
              </div>

              <div className="products-list">
                <a href="#" className="product-thumb" title="Product Name">
                  <img
                    src={`${SITE_URL}/wp-content/uploads/2026/01/product-1.jpg`}
                    alt="product"
                    className="product-image"
                  />
                </a>
                <h5 className="product-title">
                  <a href="#" title="Product">
                    Cold Shoulder Wrap Top
                  </a>
                </h5>
                <div className="product-ratings">
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <div className="product-price-container">
                  <span className="fix-price">$45.99</span>
                </div>
                <div className="pruduct-buttons">
                  <a href="#" className="product-button tooltip">
                    <i className="fas fa-cart-plus"></i>
                    <span className="tooltiptext tooltip-bottom">Add To Cart</span>
                  </a>
                  <a href="#" className="product-button tooltip">
                    <i className="far fa-heart"></i>
                    <span className="tooltiptext tooltip-bottom">Wishlist</span>
                  </a>
                  <a
                    href="#quick-view-content-wrappr"
                    className="product-button quick-view-link tooltip"
                  >
                    <i className="far fa-eye"></i>
                    <span className="tooltiptext tooltip-bottom">Quick View</span>
                  </a>
                </div>
              </div>

              <div className="products-list">
                <a href="#" className="product-thumb" title="Product Name">
                  <img
                    src={`${SITE_URL}/wp-content/uploads/2026/01/product-2.jpg`}
                    alt="product"
                    className="product-image"
                  />
                </a>
                <h5 className="product-title">
                  <a href="#" title="Product">
                    Plaid Flounce Skirt
                  </a>
                </h5>
                <div className="product-ratings">
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <div className="product-price-container">
                  <span className="fix-price">$45.99</span>
                </div>
                <div className="pruduct-buttons">
                  <a href="#" className="product-button tooltip">
                    <i className="fas fa-cart-plus"></i>
                    <span className="tooltiptext tooltip-bottom">Add To Cart</span>
                  </a>
                  <a href="#" className="product-button tooltip">
                    <i className="far fa-heart"></i>
                    <span className="tooltiptext tooltip-bottom">Wishlist</span>
                  </a>
                  <a
                    href="#quick-view-content-wrappr"
                    className="product-button quick-view-link tooltip"
                  >
                    <i className="far fa-eye"></i>
                    <span className="tooltiptext tooltip-bottom">Quick View</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Products */}
          <div className="col-grid-4">
            <div className="recent-product-list">
              <div className="section-title-wrap text-alignleft">
                <h2 className="section-title">Popular</h2>
              </div>

              <div className="products-list">
                <a href="#" className="product-thumb" title="Product Name">
                  <img
                    src={`${SITE_URL}/wp-content/uploads/2026/01/product-3.jpg`}
                    alt="product"
                    className="product-image"
                  />
                </a>
                <h5 className="product-title">
                  <a href="#" title="Product">
                    Pocket Flare Dress
                  </a>
                </h5>
                <div className="product-ratings">
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <div className="product-price-container">
                  <span className="fix-price">$45.99</span>
                </div>
                <div className="pruduct-buttons">
                  <a href="#" className="product-button tooltip">
                    <i className="fas fa-cart-plus"></i>
                    <span className="tooltiptext tooltip-bottom">Add To Cart</span>
                  </a>
                  <a href="#" className="product-button tooltip">
                    <i className="far fa-heart"></i>
                    <span className="tooltiptext tooltip-bottom">Wishlist</span>
                  </a>
                  <a
                    href="#quick-view-content-wrappr"
                    className="product-button quick-view-link tooltip"
                  >
                    <i className="far fa-eye"></i>
                    <span className="tooltiptext tooltip-bottom">Quick View</span>
                  </a>
                </div>
              </div>

              <div className="products-list">
                <a href="#" className="product-thumb" title="Product Name">
                  <img
                    src={`${SITE_URL}/wp-content/uploads/2026/01/product-4.jpg`}
                    alt="product"
                    className="product-image"
                  />
                </a>
                <h5 className="product-title">
                  <a href="#" title="Product">
                    Asymmetric Ruffle Skirt
                  </a>
                </h5>
                <div className="product-ratings">
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <div className="product-price-container">
                  <span className="fix-price">$45.99</span>
                </div>
                <div className="pruduct-buttons">
                  <a href="#" className="product-button tooltip">
                    <i className="fas fa-cart-plus"></i>
                    <span className="tooltiptext tooltip-bottom">Add To Cart</span>
                  </a>
                  <a href="#" className="product-button tooltip">
                    <i className="far fa-heart"></i>
                    <span className="tooltiptext tooltip-bottom">Wishlist</span>
                  </a>
                  <a
                    href="#quick-view-content-wrappr"
                    className="product-button quick-view-link tooltip"
                  >
                    <i className="far fa-eye"></i>
                    <span className="tooltiptext tooltip-bottom">Quick View</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* On Sale Products */}
          <div className="col-grid-4">
            <div className="recent-product-list">
              <div className="section-title-wrap text-alignleft">
                <h2 className="section-title">On Sale</h2>
              </div>

              <div className="products-list">
                <a href="#" className="product-thumb" title="Product Name">
                  <img
                    src={`${SITE_URL}/wp-content/uploads/2026/01/product-5.jpg`}
                    alt="product"
                    className="product-image"
                  />
                  <span className="ribbon-rotated onsale">-16%</span>
                </a>
                <h5 className="product-title">
                  <a href="#" title="Product">
                    Cold Shoulder Faux
                  </a>
                </h5>
                <div className="product-ratings">
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <div className="product-price-container">
                  <del className="dis-price">$65.99</del>
                  <span className="fix-price">$45.99</span>
                </div>
                <div className="pruduct-buttons">
                  <a href="#" className="product-button tooltip">
                    <i className="fas fa-cart-plus"></i>
                    <span className="tooltiptext tooltip-bottom">Add To Cart</span>
                  </a>
                  <a href="#" className="product-button tooltip">
                    <i className="far fa-heart"></i>
                    <span className="tooltiptext tooltip-bottom">Wishlist</span>
                  </a>
                  <a
                    href="#quick-view-content-wrappr"
                    className="product-button quick-view-link tooltip"
                  >
                    <i className="far fa-eye"></i>
                    <span className="tooltiptext tooltip-bottom">Quick View</span>
                  </a>
                </div>
              </div>

              <div className="products-list">
                <a href="#" className="product-thumb" title="Product Name">
                  <img
                    src={`${SITE_URL}/wp-content/uploads/2026/01/product-6.jpg`}
                    alt="product"
                    className="product-image"
                  />
                  <span className="ribbon-rotated onsale">-16%</span>
                </a>
                <h5 className="product-title">
                  <a href="#" title="Product">
                    Mixed Stripe Skirt
                  </a>
                </h5>
                <div className="product-ratings">
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star active"></span>
                  <span className="star"></span>
                  <span className="star"></span>
                </div>
                <div className="product-price-container">
                  <del className="dis-price">$65.99</del>
                  <span className="fix-price">$45.99</span>
                </div>
                <div className="pruduct-buttons">
                  <a href="#" className="product-button tooltip">
                    <i className="fas fa-cart-plus"></i>
                    <span className="tooltiptext tooltip-bottom">Add To Cart</span>
                  </a>
                  <a href="#" className="product-button tooltip">
                    <i className="far fa-heart"></i>
                    <span className="tooltiptext tooltip-bottom">Wishlist</span>
                  </a>
                  <a
                    href="#quick-view-content-wrappr"
                    className="product-button quick-view-link tooltip"
                  >
                    <i className="far fa-eye"></i>
                    <span className="tooltiptext tooltip-bottom">Quick View</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default ProductSidebar;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const NewProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 
  const { addToCart, isInCart } = useCart();
  const [loadingId, setLoadingId] = useState(null);

  const getSlugFromPermalink = (permalink) => {
    if (!permalink) return "";
    const parts = permalink.split("/").filter(Boolean);
    return parts[parts.length - 1];
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

  useEffect(() => {
    fetch("http://localhost/wp-react-theme/wp-json/wc/store/v1/products?per_page=4")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (!products.length) return <p>No products found</p>;

  return (
    <aside className="section">
      <div className="section-products">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">New Product</h2>
          </div>
          <div className="inner-wrapper">
            <div className="products-inner-wrapper">
            {products.map((product) => {
              const slug = product.slug || getSlugFromPermalink(product.permalink);
              // Click handler for navigation
              const goToProduct = (e) => {
                e.preventDefault(); // prevent default link behavior
                navigate(`/wp-react-theme/product/${slug}`); // client-side navigation
              };

              return (
                <div className="product-item col-grid-3">
                  <div className="product-item-wrapper zoom-effect-hover-container box-shadow-block">
                    <div className="product-thumb zoom-effect">

                      <div
                        className="product-thumb"
                        onClick={goToProduct}
                        style={{ cursor: "pointer" }}
                      >
                        <img src={product.images[0]?.src || "/placeholder.png"} alt={product.name} />
                      </div>
                      <div className="pruduct-buttons">
                        <button
                          className="product-button tooltip"
                          onClick={() => handleAddToCart(product)}
                          disabled={loadingId === product.id || isInCart(product.id)} 
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
                        <button href="#" className="product-button tooltip">
                          <i className="far fa-heart"></i>
                          <span className="tooltiptext tooltip-right">Wishlist</span>
                        </button>
                        <button href="#" className="product-button tooltip">
                          <i className="fa fa-retweet"></i>
                          <span className="tooltiptext tooltip-right">Compair</span>
                        </button>
                      </div>
                      <div className="quick-view">
                        <a href="#quick-view-content-wrappr" className="custom-button button-small quick-view-link">
                          <i className="far fa-eye"></i>Quick View
                        </a>
                      </div>
                      <span className="ribbon-rotated onsale">-16%</span>
                    </div>
                    <div className="product-item-details">
                      <h3
                        className="product-title"
                        onClick={goToProduct}
                        style={{ cursor: "pointer" }}
                      >
                        {product.name}
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
              );
            })}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NewProducts;

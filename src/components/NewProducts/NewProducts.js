import React, { useEffect, useState } from "react";


const NewProducts = () => {

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

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

  // if (loading) return <p>Loading products...</p>;

  return (
    <aside className="section">
      <div className="section-products">
        <div className="container">
          <div className="section-title-wrap">
            <h2 className="section-title">New Products</h2>
          </div>
          <div className="inner-wrapper">
            <div
              className="products-inner-wrapper iteam-col-4 section-carousel-enabled byapr-carousel"
              data-slick='{"slidesToShow":4,"dots":false,"prevArrow":"<span data-role=\"none\" class=\"slick-prev\" tabindex=\"0\"><i class=\"fa fa-angle-left\" aria-hidden=\"true\"></i></span>","nextArrow":"<span data-role=\"none\" class=\"slick-next\" tabindex=\"0\"><i class=\"fa fa-angle-right\" aria-hidden=\"true\"></i></span>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":4}},{"breakpoint":800,"settings":{"slidesToShow":3}},{"breakpoint":659,"settings":{"slidesToShow":2}},{"breakpoint":479,"settings":{"slidesToShow":1}}]}'
            >
              { products.map((product) => (
                  <div className="product-item col-grid-3">
                    <div className="product-item-wrapper zoom-effect-hover-container box-shadow-block">
                      <div className="product-thumb zoom-effect">
                        <a className="thumbnail" href={product.permalink}>
                          <img src={product.images[0]?.src || ""} alt={product.name} />
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
                          <a href={product.permalink} title="title">{product.name}</a>
                        </h3>
                        <div className="product-ratings">
                          <span className="star active"></span>
                          <span className="star active"></span>
                          <span className="star active"></span>
                          <span className="star"></span>
                          <span className="star"></span>
                        </div>
                        <div className="product-price-container"
                          dangerouslySetInnerHTML={{ __html: product.price_html }}
                        />
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default NewProducts;

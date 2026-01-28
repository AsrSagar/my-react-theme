import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost/wp-react-theme/wp-json/reactpress/v1/product/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <>
    <div id="custom-header">
      <div className="custom-header-content">
          <div className="container">
              <h1 className="page-title">{product.name}</h1>
              <div id="breadcrumb">
                  <div  aria-label="Breadcrumbs" className="breadcrumbs breadcrumb-trail">
                      <ul className="trail-items">
                      <li className="trail-item trail-begin"><a href="" rel="home"><span>Home</span></a></li>
                      <li className="trail-item"><span>Shop</span></li>
                          <li className="trail-item trail-end"><span>{product.name}</span></li>
                      </ul>
                  </div> 
              </div> 
          </div>
      </div>
    </div>
    <div id="content" class="site-content global-layout-right-sidebar">
      <div class="container">
        <div class="inner-wrapper">
          <div id="primary" class="content-area">
            <main id="main" class="site-main">
              <div class="product-single">
                <div class="inner-wrapper">
                  <div class="col-grid-6">
                    <div class="single-thumb-detail">
                      <div class="single-main-thumb">
                        <div class="single-thumb">
                          <span class="ribbon-rotated onsale">-16%</span>
                          <a href="#"><img alt="product" src={product.featured_image}/></a>
                        </div>
                        {/* <div class="single-thumb">
                          <span class="ribbon-rotated onsale">-16%</span>
                          <a href="#"><img alt="product" src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/product-2-2.jpg"/></a>
                        </div>
                        <div class="single-thumb">
                          <span class="ribbon-rotated onsale">-16%</span>
                          <a href="#"><img alt="product" src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/product-3-2.jpg"/></a>
                        </div> */}
                      </div>
                      <div class="pager-thumbnail">
                        <div class="pager-thumb active"><img src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/product-1-2.jpg"/></div>
                        <div class="pager-thumb"><img src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/product-2-2.jpg"/></div>
                        <div class="pager-thumb"><img src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/product-3-2.jpg"/></div>
                      </div>
                    </div>
                  </div>

                  <div class="col-grid-6">
                    <div class="summary entry-summary">
                      <div class="product-item-details">
                        <h2 class="product-title">
                          <a href="#" title="title">{product.name}</a>
                        </h2>

                        <div class="rating-wrapper clear-fix">
                          <div class="product-ratings">
                            <span class="star active"></span>
                            <span class="star active"></span>
                            <span class="star active"></span>
                            <span class="star"></span>
                            <span class="star"></span>
                          </div>

                          <ul class="info-links">
                            <li><a href="#">(3.5) 54 Ratings</a></li>
                            <li><a href="#">4 Reviews</a></li>
                          </ul>
                        </div>

                        <div
                          className="product-price-container"
                          dangerouslySetInnerHTML={{
                            __html: product.price,
                          }}
                        />
                      </div>

                      <div class="item-content">
                        <p>
                          Nam libero tempore, cum soluta nobis est eligendi optio
                          cumque nihil impedit quo minus id quod maxime placeat facere
                          possimus, omnis voluptas assumenda est, omnis dolor
                          repellendus.
                        </p>
                      </div>

                      <div class="availability">
                        <i class="fas fa-check-circle"></i>
                        <span>200 in stock</span>
                      </div>

                      <form class="single-cart" method="post">
                        <input type="number" class="input-text" step="1" min="1" value="1"/>
                        <button type="submit" class="custom-button button-small">Add To Cart</button>
                        <button type="submit" class="custom-button custom-secondary-button button-small">Wishlist</button>
                      </form>

                      <div class="share-on">
                        <h4>SHARE PRODUCT:</h4>
                        <div class="social-links text-alignleft">
                          <ul>
                            <li><a target="_blank" href="http://facebook.com">Facebook</a></li>
                            <li><a target="_blank" href="http://twitter.com">Twitter</a></li>
                            <li><a target="_blank" href="http://linkedin.com">LinkedIn</a></li>
                            <li><a target="_blank" href="http://youtube.com">YouTube</a></li>
                          </ul>
                        </div>
                      </div>

                      <div class="entry-meta product-meta">
                        <h4>CATEGORY :</h4>
                        <span class="cat-links">
                          <a href="#" rel="tag">Clothes,</a>
                          <a href="#" rel="tag">Winter</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>

          <div id="sidebar-primary" class="sidebar widget-area">
            <div class="sidebar-widget-wrapper">
              <aside class="widget widget-category">
                <h3 class="widget-title">Categories</h3>
                <ul>
                  <li class="active"><a href="#">Outerwear</a></li>
                  <li><a href="#">Shorts</a></li>
                  <li><a href="#">Winter</a></li>
                  <li><a href="#">Jackets</a></li>
                  <li><a href="#">Sweaters</a></li>
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

export default ProductDetailsPage;

// pages/CategoryProducts.jsx
import React, { useEffect, useState } from "react";


const CategoryProducts = () => {

  return (
    <>
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

    <div id="content" className="site-content global-layout-right-sidebar">
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
                                
                                {/* Product Items */}
                                {[
                                {img:"product-1.jpg", title:"Cold Shoulder Wrap Top", oldPrice:"$65.99", price:"$45.99", ribbon:"-16%", rating:3},
                                {img:"product-2.jpg", title:"Plaid Flounce Skirt", price:"$600", rating:3},
                                {img:"product-3.jpg", title:"Pocket Flare Dress", oldPrice:"$500", price:"$450", rating:3},
                                {img:"product-4.jpg", title:"Asymmetric Ruffle Skirt", price:"$500", ribbon:"NEW", rating:3},
                                {img:"product-5.jpg", title:"Cold Shoulder Faux", oldPrice:"$65.99", price:"$45.99", ribbon:"-16%", rating:3},
                                {img:"product-6.jpg", title:"Mixed Stripe Skirt", price:"$600", rating:3},
                                {img:"product-7.jpg", title:"Cocktail Dress", oldPrice:"$500", price:"$450", rating:3},
                                {img:"product-8.jpg", title:"Stripe Tie", price:"$500", ribbon:"NEW", rating:3},
                                {img:"product-9.jpg", title:"Floral Midi Skirt", price:"$500", ribbon:"NEW", rating:3},
                                {img:"product-10.jpg", title:"Straight-fit cotton jeans", oldPrice:"$65.99", price:"$45.99", ribbon:"-16%", rating:3},
                                {img:"product-11.jpg", title:"Racquet City Shorts", price:"$600", rating:3},
                                {img:"product-12.jpg", title:"Palm Leaf Drapey Shorts", oldPrice:"$500", price:"$450", rating:3}
                                ].map((product, index) => (
                                <div key={index} className="product-item col-grid-4 top-space">
                                    <div className="product-item-wrapper zoom-effect-hover-container box-shadow-block">
                                    <div className="product-thumb zoom-effect">
                                        <a className="thumbnail" href="#"><img alt={product.title} src={`http://localhost/wp-react-theme/wp-content/uploads/2026/01/${product.img}`} /></a>
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
                                        {product.ribbon && <span className={`ribbon-rotated ${product.ribbon.includes('%') ? 'onsale' : 'hot-item'}`}>{product.ribbon}</span>}
                                    </div>
                                    <div className="product-item-details">
                                        <h3 className="product-title"><a href="product.html" title={product.title}>{product.title}</a></h3>
                                        <div className="product-ratings">
                                        {[...Array(5)].map((_, i) => (
                                            <span key={i} className={`star ${i < product.rating ? 'active' : ''}`}></span>
                                        ))}
                                        </div>
                                        <div className="product-price-container">
                                        {product.oldPrice && <del className="dis-price">{product.oldPrice}</del>}
                                        <span className="fix-price">{product.price}</span>
                                        </div>
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
                <div id="sidebar-primary" className="sidebar widget-area">
                    <div className="sidebar-widget-wrapper">
                        <aside id="product-price-filter" className="widget widget-price-filter">
                            <h3 className="widget-title">Filter By Price</h3>
                            <form>
                            <div id="slider-range"></div>
                            <input type="text" id="amount" />
                            <input type="submit" className="custom-button button-small" value="Filter" />
                            </form>
                        </aside>

                        <aside className="widget widget-category">
                            <h3 className="widget-title">Categories</h3>
                            <ul>
                            <li className="active"><a href="#">Outerwear</a></li>
                            <li><a href="#">Shorts</a></li>
                            <li className="has-child left-enabled"><a href="#">Winter</a>
                                <ul className="sub-menu">
                                <li><a href="#">Jackets</a></li>
                                <li><a href="#">Sweaters</a></li>
                                <li className="has-child left-enabled"><a href="#">Accessories</a>
                                    <ul className="sub-menu">
                                    <li><a href="#">Jackets</a></li>
                                    <li><a href="#">Sweaters</a></li>
                                    <li><a href="#">Dresses</a></li>
                                    <li><a href="#">Denim</a></li>
                                    </ul>
                                </li>
                                <li><a href="#">Denim</a></li>
                                <li><a href="#">Skirts</a></li>
                                <li><a href="#">Sweaters</a></li>
                                <li><a href="#">Accessories</a></li>
                                </ul>
                            </li>
                            <li><a href="#">Jackets</a></li>
                            <li><a href="#">Sweaters</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Denim</a></li>
                            </ul>
                        </aside>

                        <aside className="widget filter-brands">
                            <h3 className="widget-title">Sort by brands</h3>
                            <ul>
                            <li><a href="#">Bershka Co<span className="count">14</span></a></li>
                            <li><a href="#">Nelly.com<span className="count">14</span></a></li>
                            <li><a href="#">Zigzag Inc<span className="count">14</span></a></li>
                            <li><a href="#">Armani<span className="count">14</span></a></li>
                            </ul>
                        </aside>

                        <aside className="widget filter-by-size">
                            <h3 className="widget-title">Sort by sizes</h3>
                            <div className="filter-size-container">
                            <a href="#" className="filter-size-box active">xs</a>
                            <a href="#" className="filter-size-box">s</a>
                            <a href="#" className="filter-size-box">m</a>
                            <a href="#" className="filter-size-box">l</a>
                            <a href="#" className="filter-size-box">xl</a>
                            </div>
                        </aside>

                        <aside className="widget filter-by-color">
                            <h3 className="widget-title">Sort by colors</h3>
                            <div className="filter-color-container">
                            <a href="#" className="filter-color-box color-1 active"></a>
                            <a href="#" className="filter-color-box color-2"></a>
                            <a href="#" className="filter-color-box color-3"></a>
                            <a href="#" className="filter-color-box color-4"></a>
                            <a href="#" className="filter-color-box color-5"></a>
                            <a href="#" className="filter-color-box color-6"></a>
                            <a href="#" className="filter-color-box color-7"></a>
                            <a href="#" className="filter-color-box color-8"></a>
                            <a href="#" className="filter-color-box color-9"></a>
                            </div>
                        </aside>

                        <aside className="widget recent-porduct-list">
                            <h3 className="widget-title">TOP RATED PRODUCTS</h3>
                            {[1,2,3].map(i => (
                            <div key={i} className="products-list">
                                <a href="#" className="product-thumb" title="Product Name">
                                <img src={`http://localhost/wp-react-theme/wp-content/uploads/2026/01/product-${i}.jpg`} alt="Product image" className="product-image" />
                                </a>
                                <h5 className="product-title"><a href="#" title="Product">Product Title</a></h5>
                                <div className="product-ratings">
                                {[...Array(5)].map((_, j) => (
                                    <span key={j} className={`star ${j < 4 ? 'active' : ''}`}></span>
                                ))}
                                </div>
                                <div className="product-price-container">
                                {i === 2 ? <><del className="dis-price">$65.99</del><span className="fix-price">$45.99</span></> : <span className="fix-price">$45.99</span>}
                                </div>
                            </div>
                            ))}
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

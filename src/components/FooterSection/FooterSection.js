import React from 'react';
import ProductQuickView from '../QuickView/ProductQuickView';

const FooterSection = () => {
  return (
    <>
      <div className="footer-container">
        <div id="footer-widgets">
          <div className="container">
            <div className="inner-wrapper">
              <aside className="col-grid-3 footer-widget-area">
                <h3 className="widget-title">ABOUT US</h3>
                <div className="widget-quick-contact">
                  <p><i className="fas fa-phone" /> (800) 123 45 67</p>
                  <p><i className="fas fa-envelope" /> info@anilbasnet.net</p>
                  <p><i className="far fa-map" /> 121 King Street, Australia</p>
                </div>
                <div className="social-links brand-color circle">
                  <ul>
                    <li><a href="http://facebook.com/" target="_blank" rel="noreferrer" /></li>
                    <li><a href="http://youtube.com/" target="_blank" rel="noreferrer" /></li>
                    <li><a href="http://twitter.com/" target="_blank" rel="noreferrer" /></li>
                    <li><a href="http://linkedin.com/" target="_blank" rel="noreferrer" /></li>
                  </ul>
                </div>
              </aside>

              <aside className="col-grid-3 footer-widget-area">
                <h3 className="widget-title">MY ACCOUNT</h3>
                <ul>
                  <li><a href="#">My Account</a></li>
                  <li><a href="#">Shopping Cart</a></li>
                  <li><a href="#">Wishlist</a></li>
                  <li><a href="#">Checkout</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </aside>

              <aside className="col-grid-3 footer-widget-area">
                <h3 className="widget-title">INFORMATION</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Order History</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">Customer Service</a></li>
                  <li><a href="#">Terms &amp; Condition</a></li>
                </ul>
              </aside>

              <aside className="col-grid-3 footer-widget-area">
                <h3 className="widget-title">QUICK LINKS</h3>
                <ul>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Delivery Information</a></li>
                  <li><a href="#">Terms &amp; Conditions</a></li>
                  <li><a href="#">FAQ'S</a></li>
                  <li><a href="#">Services</a></li>
                </ul>
              </aside>
            </div>
          </div>
        </div>

        <footer id="colophon" className="site-footer">
          <div className="colophon-bottom">
            <div className="container">
              <div className="inner-wrapper">
                <div className="col-grid-4 text-alignleft">
                  <p>© 2018 <a href="#">Byapar</a>. All rights reserved.</p>
                </div>
                <div className="col-grid-4">
                  <p>
                    <span>We Accept:</span>
                    <img src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/payment-getway.png" alt="payment" />
                  </p>
                </div>
                <div className="col-grid-4 text-alignright">
                  <p>Byapar by <a href="#" target="_blank" rel="noreferrer">Anil Basnet</a></p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>

      {/* Scroll To Top */}
      <div id="btn-scrollup">
        <a href="#" className="scrollup button-circle">
          <i className="fas fa-angle-up" />
        </a>
      </div>
      <ProductQuickView />
    </>
  );
};

export default FooterSection;

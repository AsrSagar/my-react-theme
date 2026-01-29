import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const HeaderMiniCart = () => {
  const { cartItems, cartCount, cartTotal, removeFromCart } = useCart();
  const miniCartRef = useRef(null);
  const [showMiniCart, setShowMiniCart] = useState(false);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (miniCartRef.current && !miniCartRef.current.contains(e.target)) {
        setShowMiniCart(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMiniCart = (e) => {
    e.preventDefault(); // prevent link jump
    setShowMiniCart((prev) => !prev);
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(Number(price) / 100);
  };

  return (
    <div id="header-right" className="pull-right">
      <div className="hearder-min-cart">
        <ul>
          <li className="cart-button mini-cart-wrap">
            <a href="#" onClick={toggleMiniCart}>
              <i className="icon-basket"></i>
              <span>{cartCount}</span>
            </a>
            {showMiniCart && (
              <ul className="cart-list">
                {cartItems.length === 0 && <li style={{ padding: "10px" }}>Cart is empty</li>}
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div className="cart-img">
                      <a href="#"><img src={item.images[0]?.src} alt={item.name} /></a>
                    </div>
                    <div className="cart-info">
                      <h4><a href="">{item.name}</a></h4>
                      <span className="cart-qty">Qty: {item.qty}</span>
                      <span>{formatPrice(item.prices.price)}{item.prices.currency_suffix}</span>
                    </div>
                    <div className="del-icon">
                      <i className="fa fa-times" onClick={() => removeFromCart(item.id)}></i>
                    </div>
                  </li>
                ))}
                {cartItems.length > 0 && (
                  <>
                    <li className="mini-cart-price">
                      <span className="subtotal">Subtotal: </span>
                      <span className="subtotal-price ml-auto"> ৳{cartTotal}</span>
                    </li>
                    <li>
                      <div className="mini-cart-button">
                        <Link className="custom-button button-small pull-left" to="/wp-react-theme/shop/">
                          View Cart
                        </Link>
                        <Link
                          className="custom-button custom-secondary-button button-small pull-right"
                          to="/wp-react-theme/checkout/"
                        >
                          Checkout
                        </Link>
                      </div>
                    </li>
                  </>
                )}
              </ul>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default HeaderMiniCart;

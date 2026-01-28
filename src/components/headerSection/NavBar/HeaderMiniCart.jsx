import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext";

const HeaderMiniCart = () => {
  const { cartItems, cartCount, cartTotal, removeFromCart } = useCart();

  return (
    <div id="header-right" className="pull-right">
      <div className="hearder-min-cart">
        <ul>
          <li className="cart-button mini-cart-wrap">
            <Link to="#">
              <i className="icon-basket"></i>
              <span>{cartCount}</span>
            </Link>

            <ul className="cart-list">
              {cartItems.length === 0 && (
                <li style={{ padding: "10px" }}>Cart is empty</li>
              )}

              {cartItems.map((item) => (
                <li key={item.id}>
                  <div className="cart-img">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-info">
                    <h4>{item.name}</h4>
                    <span>Qty: {item.qty}</span>
                    <span>${item.price * item.qty}</span>
                  </div>

                  <div className="del-icon">
                    <i
                      className="fa fa-times"
                      onClick={() => removeFromCart(item.id)}
                    ></i>
                  </div>
                </li>
              ))}

              {cartItems.length > 0 && (
                <>
                  <li className="mini-cart-price">
                    <span className="subtotal">Subtotal:</span>
                    <span className="subtotal-price ml-auto">
                      ${cartTotal}
                    </span>
                  </li>

                  <li>
                    <div className="mini-cart-button">
                      <Link className="custom-button button-small" to="#">
                        View Cart
                      </Link>
                      <Link
                        className="custom-button custom-secondary-button button-small"
                        to="#"
                      >
                        Checkout
                      </Link>
                    </div>
                  </li>
                </>
              )}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderMiniCart;

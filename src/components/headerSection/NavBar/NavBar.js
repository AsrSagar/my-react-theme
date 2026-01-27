import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu from your custom WP REST API
    axios
      .get("http://localhost/wp-react-theme/wp-json/reactpress/v1/menu/main-menu") // replace 'main' with your menu location
      .then((res) => setMenuItems(res.data))
      .catch((err) => console.error(err));
  }, []);

  // Render normal submenu recursively
  const renderSubMenu = (items) => {
    if (!items || items.length === 0) return null;

    return (
      <ul className="sub-menu">
        {items.map((item) => (
          <li
            key={item.id}
            className={`menu-item ${item.classes?.join(" ")} ${
              item.children?.length ? "menu-item-has-children" : ""
            }`}
          >
            <Link to={item.url}>{item.title}</Link>
            {renderSubMenu(item.children)}
          </li>
        ))}
      </ul>
    );
  };

  // Render mega menu columns
  const renderMegaMenu = (items) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="flat-mega-memu">
        {items.map((item) => (
          <div key={item.id} className="mega-menu-box col-grid-3">
            <div className="menu-container">
              {item.title && <h3 className="megamenu-title">{item.title}</h3>}

              {item.children?.length > 0 && (
                <ul className="mega-menu-sub">
                  {item.children.map((sub) => (
                    <li key={sub.id}>
                      <Link to={sub.url}>{sub.title}</Link>
                    </li>
                  ))}
                </ul>
              )}

              {item.image && (
                <Link href={item.url}>
                  <img src={item.image} alt={item.title} />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <header id="masthead" className="site-header sticky-enabled">
        <div className="container">
            <div class="site-branding pull-left">
                <div id="site-identity">
                    <h1 class="site-title">
                        <Link to="/wp-react-theme/"  rel="home">
                            <img
                                src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/logo.png"
                                alt="logo"
                                className="site-logo"
                            />
                            Byapar
                        </Link>
                    </h1>
                </div>
            </div>
            <Link
            to="/contact"
            className="custom-button custom-secondary-button pull-right quick-link-button button-small"
            >
            Quick Contact
            </Link>

            <div id="header-right" class="pull-right">
                <div class="hearder-min-cart">
                    <ul>
                        <li class="cart-button mini-cart-wrap">
                            <Link to="#"><i class=" icon-basket"></i><span>2</span>	</Link>
                            <ul class="cart-list">
                            <li>
                                <div class="cart-img">
                                    <Link to="#l"><img alt="product" src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/product-1.jpg"/></Link>
                                </div>
                                <div class="cart-info">
                                    <h4><Link to="product-details.html">simple product</Link></h4>
                                    <span class="cart-qty">Qty: 1</span>
                                    <span>$60.00</span>
                                </div>
                                <div class="del-icon">
                                    <i class="fa fa-times"></i>
                                </div>
                            </li>
                            <li>
                                <div class="cart-img">
                                    <Link to="product-details.html"><img src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/product-2.jpg" alt="Product"/></Link>
                                </div>
                                <div class="cart-info">
                                    <h4><Link to="product-details.html">virtual product</Link></h4>
                                    <span class="cart-qty">Qty: 2</span>
                                    <span>$100.00</span>
                                </div>
                                <div class="del-icon">
                                    <i class="fa fa-times"></i>
                                </div>
                            </li>
                            <li class="mini-cart-price">
                                <span class="subtotal">subtotal : </span>
                                <span class="subtotal-price ml-auto">$110.00</span>
                            </li>
                            <li>
                                <div class="mini-cart-button">
                                    <Link class="custom-button button-small pull-left" to="#">View Cart</Link>
                                    <Link class="custom-button custom-secondary-button button-small pull-right" to="#">checkout</Link>
                                </div>
                            </li>
                        </ul>
                        </li>
                        <li class="cart-button">
                            <Link to="wishlist.html" title="wishlist"><i class=" icon-heart"></i><span>0</span>	</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <nav className="main-navigation pull-right">
            <ul>
                {menuItems.map((item) => (
                <li
                    key={item.id}
                    className={`menu-item menu-item-${item.id} ${item.classes?.join(" ")} ${
                    item.children?.length ? "menu-item-has-children" : ""
                    }`}
                >
                    <Link to={item.url}>{item.title}</Link>
                    {item.mega && item.children
                    ? renderMegaMenu(item.children)
                    : renderSubMenu(item.children)}
                </li>
                ))}
            </ul>
            </nav>
        </div>
    </header>
  );
};

export default NavBar;

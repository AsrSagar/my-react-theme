import React from "react";

export default function MobileMenu() {
    return (
        <>
        <a href="#" id="mobile-trigger"><i class="fa fa-list" aria-hidden="true"></i></a>
        <div id ="mob-menu">
            <ul>
                <li class="current-menu-item menu-item-has-children"><a href="#">Home</a>
                    <ul class="sub-menu">
                        <li><a href="home-v1.html">Home v1</a></li>
                        <li><a href="home-v2.html">Home v2</a></li>
                        <li><a href="home-v3.html">Home v3</a></li>
                        <li><a href="home-v4.html">Home v4</a></li>
                        <li><a href="home-v5.html">Home v5</a></li>
                        <li><a href="home-v6.html">Home v6</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#">Categorys</a>
                    <ul class="sub-menu">
                        <li class="current-menu-item menu-item-has-children"><a href="#">Dresses</a>
                            <ul class="sub-menu">
                                <li class=""> <a href="#">Casual dresses</a> </li>
                                <li> <a href="#">Evening</a> </li>
                                <li> <a href="#">Party</a> </li>
                                <li> <a href="#">Printed</a> </li>
                                <li> <a href="#">Winter </a> </li>
                            </ul>
                        </li>
                        <li class="current-menu-item menu-item-has-children"><a href="#">Tops category</a>
                            <ul class="sub-menu">
                                    <li class=""> <a href="#">Blouses</a> </li>
                                    <li> <a href="#">Evening tops</a> </li>
                                    <li> <a href="#">Work</a> </li>
                                    <li> <a href="#">Winter</a> </li>
                                    <li> <a href="#">Summer</a> </li>
                                </ul>
                            </li>
                        <li class="current-menu-item menu-item-has-children"><a href="#">Lingerie</a>
                            <ul class="sub-menu">
                                    <li> <a href="#">Bras</a> </li>
                                    <li> <a href="#">Knickers</a> </li>
                                    <li> <a href="#">Nightwear</a> </li>
                                    <li> <a href="#">Summerwear</a> </li>
                                    <li> <a href="#">Men Fashion </a> </li>
                                </ul>
                            </li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#">Shop Pages</a>
                    <ul class="sub-menu">
                        <li><a href="shop-grid.html">product Grid</a></li>
                        <li><a href="shop-full.html">product Full</a></li>
                        <li><a href="shop-left-sidebar.html"> Sidebar left</a></li>
                        <li><a href="shop-right-sidebar.html"> Sidebar Right</a></li>
                        <li><a href="shop-three-column.html"> Three Column</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#" >Pages</a>
                    <ul class="sub-menu">
                        <li><a href="single-product.html">Single Product</a></li>
                        <li><a href="login.html">Login</a></li>
                        <li><a href="register.html">Register</a></li>
                        <li><a href="wishlist.html">wishlist Page</a></li>
                        <li><a href="checkout.html">Checkout Page</a></li>
                        <li><a href="cart.html">Cart Page</a></li>
                        <li><a href="faq.html">FAQ</a></li>
                        <li><a href="404-error.html">404 Error</a></li>
                        <li><a href="typography.html">Typographys</a></li>
                    </ul>
                </li>
                <li class="menu-item-has-children"><a href="#" >Blog</a>
                    <ul class="sub-menu">
                        <li><a href="blog-grid.html">Blog Grid</a></li>
                        <li><a href="left-sidebar.html">left Sidebar</a></li>
                        <li><a href="right-sidebar.html">Right Sidebar</a></li>
                        <li><a href="single-blog.html">Single Blog</a></li>
                    </ul>
                </li>
            </ul>
        </div>
        </>
    );
}
  <!DOCTYPE html>
	<html <?php language_attributes(); ?>>
      <head>
			<meta charset="<?php bloginfo('charset'); ?>">
			<meta name="description" content="Multi-Purpose E-commerce Template">
			<!--[if IE]>
			<meta http-equiv="X-UA-Compatible" content="IE=edge">
			<![endif]-->
			<meta name="viewport" content="width=device-width, initial-scale=1">
			<meta name="author" content="">
			<link rel="shortcut icon" href="<?php echo get_template_directory_uri(); ?>/assets/images/favicon.png" type="image/x-icon" />
			<link rel="apple-touch-icon" href="<?php echo get_template_directory_uri(); ?>assets/images/apple-touch-icon.png" />
			<link rel="apple-touch-icon" sizes="72x72" href="<?php echo get_template_directory_uri(); ?>/assets/images/apple-touch-icon-72x72.png" />
			<link rel="apple-touch-icon" sizes="114x114" href="<?php echo get_template_directory_uri(); ?>/assets/images/apple-touch-icon-114x114.png" />
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/third-party/sidr/css/jquery.sidr.dark.css">
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/third-party/slick/css/slick.css">
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/third-party/slick/css/slick-theme.css">
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/third-party/wow/css/animate.min.css">
	    <link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/css/jquery-ui.min.css">
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/third-party/magnific-popup-master/css/magnific-popup.css">
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/third-party/accordionjs/css/accordion.min.css">
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/css/style.css">
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/icons/icons.css">
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/css/custom.css">
			<link rel="stylesheet" type="text/css" href="<?php echo get_template_directory_uri(); ?>/assets/css/responsive.css">
			<link rel="stylesheet" id="color" href="<?php echo get_template_directory_uri(); ?>/assets/css/default.css">
			<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.2.0/css/all.min.css" integrity="sha384-hWVjflwFxL6sNzntih27bfxkr27PmbbK/iSvJ+a4+0owXq79v+lsFkW54bOGbiDQ" crossorigin="anonymous">
			<link href="https://fonts.googleapis.com/css?family=Roboto:400,500,600,700" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,800" rel="stylesheet">
      <?php wp_head(); ?>
		</head>
		<body class="home header-v1">

			<div id="page" class="site">
			<!-- Mobile main menu -->
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
								<li><a href="typography.html">Typographys</a>
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
				</div> <!-- #mob-menu -->
				<div id="tophead">
					<div class="container">
						<div class="top-head-left">
							<div class="top-head-col multi-language pull-left">
								<a class="multi-language-current" href="#"><img alt="language" src="<?php echo get_template_directory_uri(); ?>/assets/images/language/en.png">English</a>
								<ul class="multi-language-sub">
									<li><a href="#"><img alt="language" src="<?php echo get_template_directory_uri(); ?>/assets/images/language/nl.png">Nederlands</a></li>
									<li><a href="#"><img alt="language" src="<?php echo get_template_directory_uri(); ?>/assets/images/language/la.png">Latin</a></li>
									<li><a href="#"><img alt="language" src="<?php echo get_template_directory_uri(); ?>/assets/images/language/nl.png">Nederlands</a></li>
									<li><a href="#"><img alt="language" src="<?php echo get_template_directory_uri(); ?>/assets/images/language/la.png">Latin</a></li>
									<li><a href="#"><img alt="language" src="<?php echo get_template_directory_uri(); ?>/assets/images/language/nl.png">Nederlands</a></li>
									<li><a href="#"><img alt="language" src="<?php echo get_template_directory_uri(); ?>/assets/images/language/la.png">Latin</a></li>
								</ul>
							</div> <!-- .multi-language -->
							<div class="top-head-col multi-currency pull-left">
								<ul>
								<li> <a class="multi-language-current" href="#"> $USD</a>
									<ul class="multi-currency-sub">
										<li><a href="#">URO</a></li>
										<li><a href="#">YEN</a></li>
										<li><a href="#">POUND</a></li>
									</ul>
								</li>
								</ul>
							</div> <!-- .multi-currency -->
							<div class="top-head-col quick-contact quick-contact-2 pull-left">
								<ul>
									<li class="quick-call"><i class="fas fa-phone-volume"></i> <a href="#"> + 541-754-3010</a> </li>
								</ul> <!-- top-head-col -->
							</div>
						</div><!-- .top-head-left -->
						<div class="top-head-right pull-right">
					       <a href="#" class="header-link" title="Help"><i class="fas fa-phone"></i><span class="header-text">Help</span></a>
					       <a href="#" class="header-link" title="More"><i class="fas fa-th-large"></i><span class="header-text">More</span></a>
					       <div class="header-link my-account my-login-popup">
						       <a href="#login-popup"   title="My Account" class="login-popup-btn">
						       	<i class="fa fa-user"></i><span class="header-text">Account</span>
						       </a>
						    </div><!-- .header-link -->
						</div><!-- .top-head-right -->
					</div> <!-- .container -->
				</div> <!-- #tophead -->
				<header id="masthead" class="site-header sticky-enabled">
					<div class="container">
						<div class="site-branding pull-left">
							<div id="site-identity">
								<h1 class="site-title"><a href="home-v1.html"  rel="home"><img alt="logo" class="site-logo" src="<?php echo get_template_directory_uri(); ?>/assets/images/logo.png">Byapar</a></h1>
							</div><!-- #site-identity -->
						</div><!-- .site-branding -->
						<a href="contact.html" Class="custom-button custom-secondary-button pull-right quick-link-button button-small"> Quick Contact </a>
						<div id="header-right" class="pull-right">
							<div class="hearder-min-cart">
								<ul>
									<li class="cart-button mini-cart-wrap">
										<a href="#"><i class=" icon-basket"></i><span>2</span>	</a>
										<ul class="cart-list">
	                                    <li>
	                                        <div class="cart-img">
	                                            <a href="#l"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-1.jpg"></a>
	                                        </div>
	                                        <div class="cart-info">
	                                            <h4><a href="product-details.html">simple product</a></h4>
	                                            <span class="cart-qty">Qty: 1</span>
	                                            <span>$60.00</span>
	                                        </div>
	                                        <div class="del-icon">
	                                            <i class="fa fa-times"></i>
	                                        </div>
	                                    </li>
	                                    <li>
	                                        <div class="cart-img">
	                                            <a href="product-details.html"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-2.jpg" alt="Product"></a>
	                                        </div>
	                                        <div class="cart-info">
	                                            <h4><a href="product-details.html">virtual product</a></h4>
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
	                                            <a class="custom-button button-small pull-left" href="#">View Cart</a>
	                                            <a class="custom-button custom-secondary-button button-small pull-right" href="#">checkout</a>
	                                        </div>
	                                    </li>
	                                </ul>
									</li>
				       				<li class="cart-button">
					       				<a href="wishlist.html"  title="wishlist"><i class=" icon-heart"></i><span>0</span>	</a>
				       				</li>
								</ul>
							</div><!-- #quick-link-buttons -->
						</div>
						<nav class="main-navigation pull-right">
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
								<li class="menu-item-has-children has-mega-menu"><a href="#">Categorys</a>
									<div class="flat-mega-memu">
										<div class="mega-menu-box col-grid-3">
										      <div class="menu-container">
												<h3 class="megamenu-title">Dresses</h3>
												<ul class="mega-menu-sub">
		                                          <li class=""> <a href="#">Casual dresses</a> </li>
		                                          <li> <a href="#">Evening</a> </li>
		                                          <li> <a href="#">Party</a> </li>
		                                          <li> <a href="#">Printed</a> </li>
											      <li> <a href="#">Winter </a> </li>
										      </ul>
									      </div><!-- .menu-container -->
										</div>
										<div class="mega-menu-box col-grid-3">
											<div class="menu-container">
												<h3 class="megamenu-title">Tops category</h3>
												<ul class="mega-menu-sub">
											      <li class=""> <a href="#">Blouses</a> </li>
											      <li> <a href="#">Evening tops</a> </li>
											      <li> <a href="#">Work</a> </li>
											      <li> <a href="#">Winter</a> </li>
											      <li> <a href="#">Summer</a> </li>
											      </ul>
										      </div><!-- .menu-container -->
										</div>
										<div class="mega-menu-box col-grid-3">
											<div class="menu-container">
											<span class="ribbon-rotated right-align onsale">Sale</span>
												<h3 class="megamenu-title">Lingerie</h3>
												<ul class="mega-menu-sub">
		                                          <li> <a href="#">Bras</a> </li>
		                                          <li> <a href="#">Knickers</a> </li>
		                                          <li> <a href="#">Nightwear</a> </li>
		                                          <li> <a href="#">Summerwear</a> </li>
		                                          <li> <a href="#">Men Fashion </a> </li>
											      </ul>
										      </div><!-- .menu-container -->
										</div>
										<div class="mega-menu-box col-grid-3">
											<a href="#"><img alt="product-banner" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/megamenu-product.jpg"></a>
										</div>
									</div>
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
										<li><a href="typography.html">Typographys</a>
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
						</nav> <!-- .site-navigation -->
					</div> <!-- .container -->
				</header> <!-- .site-header -->

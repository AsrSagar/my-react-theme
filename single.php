<?php get_header(); ?>
<div id="custom-header">
	<div class="custom-header-content">
	<div class="container">
		<h1 class="page-title">Product Details</h1>
		<div id="breadcrumb">
		<div  aria-label="Breadcrumbs" class="breadcrumbs breadcrumb-trail">
			<ul class="trail-items">
			<li class="trail-item trail-begin"><a href="#" rel="home"><span>Home</span></a></li>
			<li class="trail-item"><span>Shop</span></li>
				<li class="trail-item trail-end"><span>Product Details</span></li>
			</ul>
		</div> <!-- .breadcrumbs -->
		</div> <!-- #breadcrumb -->
	</div> <!-- .container -->
	</div>  <!-- .custom-header-content -->
</div> <!-- .custom-header -->
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
							<div class="single-thumb"><span class="ribbon-rotated onsale">-16%</span><a href="#"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-1.jpg"></a></div>
							<div class="single-thumb"><span class="ribbon-rotated onsale">-16%</span><a href="#"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-2.jpg"></a></div>
							<div class="single-thumb"><span class="ribbon-rotated onsale">-16%</span><a href="#"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-3.jpg"></a></div>
						</div>
						<div class="pager-thumbnail">
								<div class="pager-thumb active"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-1.jpg"></div>
								<div class="pager-thumb"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-2.jpg"></div>
								<div class="pager-thumb"><img src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-3.jpg"></div>
						</div> <!-- .pager-thumbnail---->
					</div><!-- .single-thumb-detail -->
				</div><!-- col-grid-6 -->
				<div class="col-grid-6">
					<div class="summary entry-summary">
						<div class="product-item-details">
							<h2 class="product-title"><a href="#" title="title">Simple Product Title</a></h2>
							<div class="rating-wrapper clear-fix">
								<div class="product-ratings">
										<span class="star active"></span>
										<span class="star active"></span>
										<span class="star active"></span>
										<span class="star"></span>
										<span class="star"></span>
								</div>
								<ul class="info-links">
									<li><a href="#">(3.5) 54 Ratings </a> </li>
									<li><a href="#">  4 Reviews  </a></li>
								</ul>
								</div><!-- .rating-wrapper -->
							<div class="product-price-container">
								<del class="dis-price">$65.99</del>
								<span class="fix-price">$45.99</span>
							</div><!-- .product-price-container -->
						</div><!-- .product-item-details -->
						<div class="item-content">
								<p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et.</p>
						</div><!-- .item-content -->
						<div class="availability">
							<i class="fas fa-check-circle"></i>
							<span>200 in stock</span>
						</div><!-- .availability -->
						<form class="single-cart" method="post">
							<input type="number" class="input-text" step="1" min="1" value="1">
							<button type="submit" name="add-ro-cart" class="custom-button button-small"> Add To Cart </button>
							<button type="submit" name="add-ro-cart" class="custom-button custom-secondary-button button-small"> Wishlist </button>
						</form><!-- .single-cart -->
						<div class="share-on">
							<h4>SHARE PRODUCT:</h4>
							<div class="social-links text-alignleft">
								<ul>
									<li><a target="_blank" href="http://facebook.com/">Facebook</a></li>
									<li><a target="_blank" href="http://twitter.com/">Twitter</a></li>
									<li><a target="_blank" href="http://linkedin.com/">Linkedln</a></li>
									<li><a target="_blank" href="http://youtube.com/">Linkedln</a></li>
								</ul>
							</div>
						</div> <!-- .share-on -->
						<div class="entry-meta product-meta">
								<h4>CATEGORY :</h4>
							<span class="cat-links">
								<a href="#" rel="tag">Clothes,</a>
								<a href="#" rel="tag">Winter</a>
							</span>
						</div><!-- .entry-meta -->
					</div>
				</div><!-- .col-grid-6 -->
				</div><!-- .inner-wrapper -->
				</div> <!-- .product-single -->
				<div id="tabs" class="product-tabs wc-tabs-wrapper">
				<ul class="tabs wc-tabs nav-tabs" role="tablist">
					<li class="nav-item"><a href="#description">Description</a></li>
					<li class="nav-item"> <a href="#add-description"> Additional Description </a></li>
					<li class="nav-item"><a href="#reviews">Reviews</a></li>
				</ul>
				<div class="tab-content">
					<div class="tab-pane active" id="description">
						<h2>Description</h2>
						<p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
					</div>
					<div class="tab-pane" id="add-description">
						<h2>Additional Description</h2>
						<p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
					</div>
					<div class="tab-pane" id="reviews">
						<h2>Reviews</h2>
						<div id="woo-reviews" class="product-reviews">
							<div id="comments"><p class="product-noreviews">There are no reviews yet.</p>
							</div> <!-- #comments -->
							<div id="review_form_wrapper">
								<div class="review_form">
									<div id="respond" class="comment-respond">
										<h3 id="reply-title" class="comment-reply-title">Be the first to review “Ladies Winter Wears” </h3>
										<form  id="commentform" class="comment-form" >
											<p class="comment-notes">
												<span id="email-notes">Your email address will not be published.</span> Required fields are marked
												<span class="required">*</span>
											</p>
											<div class="comment-form-rating">
												<label>Your Rating</label>
												<div class="product-ratings">
														<span class="star"></span>
														<span class="star"></span>
														<span class="star"></span>
														<span class="star"></span>
														<span class="star"></span>
												</div>
											</div>
											<p class="comment-form-comment">
												<label for="comment">Comment</label>
												<textarea id="comment" name="comment" cols="45" rows="8" maxlength="65525" required="required"></textarea>
											</p>
											<p class="comment-form-author">
												<label for="author">Name <span class="required">*</span></label>
												<input id="author" name="author" type="text" value="" size="30" maxlength="245" aria-required="true" required="required">
											</p>
											<p class="comment-form-email">
												<label for="email">Email <span class="required">*</span></label>
												<input id="email" name="email" type="email" value="" size="30" maxlength="100" aria-describedby="email-notes" aria-required="true" required="required">
											</p>
											<p class="comment-form-url">
												<label for="url">Website</label>
												<input id="url" name="url" type="url" value="" size="30" maxlength="200">
											</p>
											<p class="form-submit"><input name="submit" type="submit" id="submit" class="submit" value="Post Comment">
												<input type="hidden" name="comment_post_ID" value="4819" id="comment_post_ID">
												<input type="hidden" name="comment_parent" id="comment_parent" value="0">
											</p>
										</form>

									</div>
									<!-- #respond -->
								</div>
							</div> <!-- #review_form_wrapper -->
						</div> <!-- #reviews -->
					</div>
				</div>
				</div> <!-- .product-tabs -->
				<div class="section-products related-product clear-fix top-space">
						<div class="section-title-wrap text-alignleft">
							<h2 class="section-title">Related Product</h2>
							<span class="divider"></span>
						</div>
						<div class="inner-wrapper">
							<div class="products-inner-wrapper clear-fix section-carousel-enabled byapr-carousel" data-slick="{&quot;slidesToShow&quot;:3,&quot;dots&quot;:false,&quot;prevArrow&quot;:&quot;<span data-role=\&quot;none\&quot; class=\&quot;slick-prev\&quot; tabindex=\&quot;0\&quot;><i class=\&quot;fa fa-angle-left\&quot; aria-hidden=\&quot;true\&quot;><\/i><\/span>&quot;,&quot;nextArrow&quot;:&quot;<span data-role=\&quot;none\&quot; class=\&quot;slick-next\&quot; tabindex=\&quot;0\&quot;><i class=\&quot;fa fa-angle-right\&quot; aria-hidden=\&quot;true\&quot;><\/i><\/span>&quot;,&quot;responsive&quot;:[{&quot;breakpoint&quot;:1024,&quot;settings&quot;:{&quot;slidesToShow&quot;:3}},{&quot;breakpoint&quot;:800,&quot;settings&quot;:{&quot;slidesToShow&quot;:3}},{&quot;breakpoint&quot;:659,&quot;settings&quot;:{&quot;slidesToShow&quot;:2}},{&quot;breakpoint&quot;:479,&quot;settings&quot;:{&quot;slidesToShow&quot;:1}}]}">
								<div class="product-item col-grid-4">
									<div class="product-item-wrapper zoom-effect-hover-container box-shadow-block">
										<div class="product-thumb zoom-effect">
											<a class="thumbnail" href="#"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-1.jpg"></a>
											<div class="pruduct-buttons">
												<a href="#" class="product-button tooltip"><i class="fas fa-cart-plus"></i>
												<span class="tooltiptext tooltip-right">Add To Cart</span></a>
												<a href="#" class="product-button tooltip"><i class="far fa-heart"></i><span class="tooltiptext tooltip-right">Wishlist</span></a>
												<a href="#" class="product-button tooltip"><i class="fa fa-retweet"></i><span class="tooltiptext tooltip-right">Compair</span></a>
											</div><!-- .product-buttons -->
									<div class="quick-view">
									<a href="#quick-view-content-wrappr" class="custom-button button-small quick-view-link"><i class="far fa-eye"></i>Quick View</a>
									</div><!-- .quick-view -->
											<span class="ribbon-rotated onsale">-16%</span>
											<!-- .product-ratings -->
										</div><!-- .product-thumb -->
										<div class="product-item-details">
											<h3 class="product-title"><a href="product.html" title="title">Simple Product Title</a></h3>
											<div class="product-ratings">
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star"></span>
												<span class="star"></span>
										</div>
											<div class="product-price-container">
												<del class="dis-price">$65.99</del>
												<span class="fix-price">$45.99</span>
											</div><!-- .product-price-container -->
										</div>
									</div><!-- .product-item-wrapper -->
								</div><!-- .product-item -->
								<div class="product-item col-grid-4">
									<div class="product-item-wrapper zoom-effect-hover-container box-shadow-block">
										<div class="product-thumb zoom-effect">
											<a class="thumbnail" href="#"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-2.jpg"></a>
											<div class="pruduct-buttons">
												<a href="#" class="product-button tooltip"><i class="fas fa-cart-plus"></i>
												<span class="tooltiptext tooltip-right">Add To Cart</span></a>
												<a href="#" class="product-button tooltip"><i class="far fa-heart"></i><span class="tooltiptext tooltip-right">Wishlist</span></a>
												<a href="#" class="product-button tooltip"><i class="fa fa-retweet"></i><span class="tooltiptext tooltip-right">Compair</span></a>
											</div><!-- .product-buttons -->
									<div class="quick-view">
									<a href="#quick-view-content-wrappr" class="custom-button button-small quick-view-link"><i class="far fa-eye"></i>Quick View</a>
									</div><!-- .quick-view -->
										</div><!-- .product-thumb -->
										<div class="product-item-details">
											<h3 class="product-title"><a href="product.html" title="title">Simple Product Title</a></h3>
											<div class="product-ratings">
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star"></span>
												<span class="star"></span>
										</div>
											<div class="product-price-container">
												<span class="fix-price">$600</span>
											</div><!-- .product-action-container -->
										</div>
									</div><!-- .product-item-wrapper -->
								</div><!-- .product-item -->
								<div class="product-item col-grid-4">
									<div class="product-item-wrapper zoom-effect-hover-container box-shadow-block">
										<div class="product-thumb zoom-effect">
											<a class="thumbnail" href="#"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-3.jpg"></a>
											<div class="pruduct-buttons">
												<a href="#" class="product-button tooltip"><i class="fas fa-cart-plus"></i>
												<span class="tooltiptext tooltip-right">Add To Cart</span></a>
												<a href="#" class="product-button tooltip"><i class="far fa-heart"></i><span class="tooltiptext tooltip-right">Wishlist</span></a>
												<a href="#" class="product-button tooltip"><i class="fa fa-retweet"></i><span class="tooltiptext tooltip-right">Compair</span></a>
											</div><!-- .product-buttons -->
									<div class="quick-view">
									<a href="#quick-view-content-wrappr" class="custom-button button-small quick-view-link"><i class="far fa-eye"></i>Quick View</a>
									</div><!-- .quick-view -->
										</div><!-- .product-thumb -->
										<div class="product-item-details">
											<h3 class="product-title"><a href="product.html" title="title">Simple Product Title</a></h3>
											<div class="product-ratings">
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star"></span>
												<span class="star"></span>
										</div>
											<div class="product-price-container">
												<del class="dis-price">$500</del>
												<span class="fix-price">$450</span>
											</div><!-- .product-price-container -->
										</div>
									</div><!-- .product-item-wrapper -->
								</div><!-- .product-item -->
								<div class="product-item col-grid-4">
									<div class="product-item-wrapper zoom-effect-hover-container box-shadow-block">
										<div class="product-thumb zoom-effect">
											<a class="thumbnail" href="#"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-4.jpg"></a>
											<div class="pruduct-buttons">
												<a href="#" class="product-button tooltip"><i class="fas fa-cart-plus"></i>
												<span class="tooltiptext tooltip-right">Add To Cart</span></a>
												<a href="#" class="product-button tooltip"><i class="far fa-heart"></i><span class="tooltiptext tooltip-right">Wishlist</span></a>
												<a href="#" class="product-button tooltip"><i class="fa fa-retweet"></i><span class="tooltiptext tooltip-right">Compair</span></a>
											</div><!-- .product-buttons -->
									<div class="quick-view">
									<a href="#quick-view-content-wrappr" class="custom-button button-small quick-view-link"><i class="far fa-eye"></i>Quick View</a>
									</div><!-- .quick-view -->
											<span class="ribbon-rotated hot-item ">NEW</span>
										</div><!-- .product-thumb -->
										<div class="product-item-details">
											<h3 class="product-title"><a href="product.html" title="title">Simple Product Title</a></h3>
											<div class="product-ratings">
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star"></span>
												<span class="star"></span>
										</div>
											<div class="product-price-container">
												<span class="fix-price">$500</span>
											</div><!-- .product-price-container -->

										</div>
									</div><!-- .product-item-wrapper -->
								</div><!-- .product-item -->
								<div class="product-item col-grid-4">
									<div class="product-item-wrapper zoom-effect-hover-container box-shadow-block">
										<div class="product-thumb zoom-effect">
											<a class="thumbnail" href="#"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-5.jpg"></a>
											<div class="pruduct-buttons">
												<a href="#" class="product-button tooltip"><i class="fas fa-cart-plus"></i>
												<span class="tooltiptext tooltip-right">Add To Cart</span></a>
												<a href="#" class="product-button tooltip"><i class="far fa-heart"></i><span class="tooltiptext tooltip-right">Wishlist</span></a>
												<a href="#" class="product-button tooltip"><i class="fa fa-retweet"></i><span class="tooltiptext tooltip-right">Compair</span></a>
											</div><!-- .product-buttons -->
									<div class="quick-view">
									<a href="#quick-view-content-wrappr" class="custom-button button-small quick-view-link"><i class="far fa-eye"></i>Quick View</a>
									</div><!-- .quick-view -->
											<span class="ribbon-rotated onsale">-16%</span>
											<!-- .product-ratings -->
										</div><!-- .product-thumb -->
										<div class="product-item-details">
											<h3 class="product-title"><a href="product.html" title="title">Simple Product Title</a></h3>
											<div class="product-ratings">
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star"></span>
												<span class="star"></span>
										</div>
											<div class="product-price-container">
												<del class="dis-price">$65.99</del>
												<span class="fix-price">$45.99</span>
											</div><!-- .product-price-container -->
										</div>
									</div><!-- .product-item-wrapper -->
								</div><!-- .product-item -->
								<div class="product-item col-grid-4">
									<div class="product-item-wrapper zoom-effect-hover-container box-shadow-block">
										<div class="product-thumb zoom-effect">
											<a class="thumbnail" href="#"><img alt="product" src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-6.jpg"></a>
											<div class="pruduct-buttons">
												<a href="#" class="product-button tooltip"><i class="fas fa-cart-plus"></i>
												<span class="tooltiptext tooltip-right">Add To Cart</span></a>
												<a href="#" class="product-button tooltip"><i class="far fa-heart"></i><span class="tooltiptext tooltip-right">Wishlist</span></a>
												<a href="#" class="product-button tooltip"><i class="fa fa-retweet"></i><span class="tooltiptext tooltip-right">Compair</span></a>
											</div><!-- .product-buttons -->
									<div class="quick-view">
									<a href="#quick-view-content-wrappr" class="custom-button button-small quick-view-link"><i class="far fa-eye"></i>Quick View</a>
									</div><!-- .quick-view -->
										</div><!-- .product-thumb -->
										<div class="product-item-details">
											<h3 class="product-title"><a href="product.html" title="title">Simple Product Title</a></h3>
											<div class="product-ratings">
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star active"></span>
												<span class="star"></span>
												<span class="star"></span>
										</div>
											<div class="product-price-container">
												<span class="fix-price">$600</span>
											</div><!-- .product-action-container -->
										</div>
									</div><!-- .product-item-wrapper -->
								</div><!-- .product-item -->
							</div><!-- .products-inner-wrapper -->
						</div><!-- .inner-wrapper -->
				</div><!-- .section-products -->
			</main> <!-- #main -->
		</div> <!-- #primary -->
		<div id="sidebar-primary" class="sidebar widget-area" >
		<div class="sidebar-widget-wrapper">
			<aside id="product-price-filter" class="widget widget-price-filter">
				<h3 class="widget-title">Filter By Price</h3>
				<form>
					<div id="slider-range"></div>
					<input type="text" id="amount">
					<input type="submit" class="custom-button button-small" value="Filter">
				</form>
			</aside>
			<aside class="widget widget-category">
				<h3 class="widget-title ">Categories</h3>
				<ul>
					<li class="active"><a href="#">Outerwear</a></li>
					<li><a href="#">Shorts</a></li>
					<li class="has-child left-enabled"><a href="#">Winter</a>
						<ul class="sub-menu">
							<li><a href="#">Jackets</a></li>
							<li><a href="#">Sweaters</a></li>
							<li class="has-child left-enabled"><a href="#">Accessories</a>
								<ul class="sub-menu">
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
			<aside class="widget filter-brands">
				<h3 class="widget-title">Sort by brands</h3>
					<ul>
						<li> <a href="#">Bershka Co<span class="count">14</span></a></li>
						<li> <a href="#">Nelly.com<span class="count">14</span></a></li>
						<li> <a href="#">Zigzag Inc<span class="count">14</span></a></li>
						<li> <a href="#">Armani<span class="count">14</span></a></li>
					</ul>
			</aside>
			<aside class="widget filter-by-size">
				<h3 class="widget-title">Sort by sizes</h3>
				<div class="filter-size-container">
						<a href="#" class="filter-size-box active">xs</a>
						<a href="#" class="filter-size-box">s</a>
						<a href="#" class="filter-size-box">m</a>
						<a href="#" class="filter-size-box">l</a>
						<a href="#" class="filter-size-box">xl</a>
				</div>
				<!-- End .filter-size-container -->
			</aside>
			<aside class="widget filter-by-price">
				<h3 class="widget-title">Sort by Price</h3>
				<ul>
				<li><a href="#" target="_self">PRICE: $120 — $150</a></li>
				<li><a href="#" target="_self">PRICE: $150 — $200</a></li>
				<li><a href="#" target="_self">PRICE: $200 — $350</a></li>
				</ul>
			</aside>
			<aside class="widget filter-by-color">
				<h3 class="widget-title">Sort by colors</h3>
					<div class="filter-color-container">
						<a href="#"  class="filter-color-box color-1 active"></a>
						<a href="#"  class="filter-color-box color-2"></a>
						<a href="#"  class="filter-color-box color-3"></a>
						<a href="#"  class="filter-color-box color-4"></a>
						<a href="#"  class="filter-color-box color-5"></a>
						<a href="#"  class="filter-color-box color-6"></a>
						<a href="#"  class="filter-color-box color-7"></a>
						<a href="#"  class="filter-color-box color-8"></a>
						<a href="#"  class="filter-color-box color-9"></a>
					</div>
			</aside>
			<aside class="widget recent-porduct-list">
				<h3 class="widget-title">TOP RATED PRODUCTS</h3>
				<div class="products-list">
					<a href="#" class="product-thumb" title="Product Name"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-1.jpg" alt="Product image" class="product-image"> </a>
					<h5 class="product-title"><a href="#" title="Product">Product Title </a></h5>
					<div class="product-ratings">
							<span class="star active"></span>
							<span class="star active"></span>
							<span class="star active"></span>
							<span class="star active"></span>
							<span class="star active"></span>
					</div>
					<div class="product-price-container">
						<span class="fix-price">$45.99</span>
					</div>
				</div><!-- .products-list -->
				<div class="products-list">
					<a href="#" class="product-thumb" title="Product Name"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-2.jpg" alt="Product image" class="product-image"> </a>
					<h5 class="product-title"><a href="#" title="Product">Product Title </a></h5>
					<div class="product-ratings">
							<span class="star active"></span>
							<span class="star active"></span>
							<span class="star active"></span>
							<span class="star active"></span>
							<span class="star"></span>
					</div>
					<div class="product-price-container">
						<del class="dis-price">$65.99</del>
						<span class="fix-price">$45.99</span>
					</div>
				</div><!-- .products-list -->
				<div class="products-list">
					<a href="#" class="product-thumb" title="Product Name"> <img src="<?php echo get_template_directory_uri(); ?>/assets/images/shop/product-3.jpg" alt="Product image" class="product-image"> </a>
					<h5 class="product-title"><a href="#" title="Product">Product Title</a></h5>
					<div class="product-ratings">
							<span class="star active"></span>
							<span class="star active"></span>
							<span class="star active"></span>
							<span class="star active"></span>
							<span class="star"></span>
					</div>
					<div class="product-price-container">
						<span class="fix-price">$45.99</span>
					</div>
				</div><!-- .products-list -->
			</aside><!-- .widget -->
		</div> <!-- .sidebar-widget-wrapper -->
		</div> <!-- .sidebar -->
	</div> <!-- #inner-wrapper -->
	</div><!-- .container -->
</div> <!-- #content-->
<?php get_footer(); ?>


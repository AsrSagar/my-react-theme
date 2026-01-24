<?php
defined( 'ABSPATH' ) || exit;

get_header( 'shop' );
?>

<section class="product-category-archive">
  <div class="container">

    <?php do_action( 'woocommerce_before_main_content' ); ?>

    <header class="woocommerce-products-header">
      <h1 class="woocommerce-products-header__title">
        <?php single_term_title(); ?>
      </h1>

      <?php
      $term = get_queried_object();
      if ( $term && $term->description ) :
      ?>
        <div class="term-description">
          <?php echo term_description(); ?>
        </div>
      <?php endif; ?>
    </header>

    <?php
    if ( woocommerce_product_loop() ) {

      woocommerce_product_loop_start();

      if ( wc_get_loop_prop( 'total' ) ) {
        while ( have_posts() ) {
          the_post();
          wc_get_template_part( 'content', 'product' );
        }
      }

      woocommerce_product_loop_end();

      do_action( 'woocommerce_after_shop_loop' );

    } else {
      do_action( 'woocommerce_no_products_found' );
    }
    ?>

    <?php do_action( 'woocommerce_after_main_content' ); ?>

  </div>
</section>

<?php get_footer( 'shop' ); ?>

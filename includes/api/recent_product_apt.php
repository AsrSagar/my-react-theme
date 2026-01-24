<?php 

add_action('rest_api_init', function () {
  register_rest_route('reactpress/v1', '/products', [
    'methods'  => 'GET',
    'callback' => 'reactpress_get_products',
    'permission_callback' => '__return_true',
  ]);
});

function reactpress_get_products() {
  $args = [
    'post_type'      => 'product',
    'posts_per_page' => 8,
    'post_status'    => 'publish',
  ];

  $query = new WP_Query($args);
  $products = [];

  while ($query->have_posts()) {
    $query->the_post();
    global $product;

    $products[] = [
      'id'    => get_the_ID(),
      'name'  => get_the_title(),
      'price' => $product->get_price_html(),
      'image' => wp_get_attachment_image_url(
        $product->get_image_id(),
        'medium'
      ),
      'link'  => get_permalink(),
    ];
  }

  wp_reset_postdata();
  return $products;
}

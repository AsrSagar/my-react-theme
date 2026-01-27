<?php
add_action('rest_api_init', function () {
    register_rest_route('reactpress/v1', '/product/(?P<slug>[a-zA-Z0-9-]+)', [
        'methods' => 'GET',
        'callback' => 'reactpress_get_product',
        'permission_callback' => '__return_true',
    ]);
});

function reactpress_get_product($data) {
    $slug = $data['slug'];
    $products = get_posts([
        'name' => $slug,
        'post_type' => 'product',
        'post_status' => 'publish',
        'numberposts' => 1,
    ]);

    if (empty($products)) return null;

    $product = wc_get_product($products[0]->ID);

    return [
        'id' => $product->get_id(),
        'name' => $product->get_name(),
        'slug' => $product->get_slug(),
        'price' => $product->get_price(),
        'price_html' => $product->get_price_html(),
        'description' => $product->get_description(),
        'short_description' => $product->get_short_description(),
        'images' => array_map(fn($id) => wp_get_attachment_url($id), $product->get_gallery_image_ids()),
        'featured_image' => wp_get_attachment_url($product->get_image_id()),
        'categories' => wp_get_post_terms($product->get_id(), 'product_cat', ['fields' => 'names']),
        'on_sale' => $product->is_on_sale(),
    ];
}

<?php 

add_action('rest_api_init', function () {
    register_rest_route('reactpress/v1', '/products', [
        'methods'  => 'GET',
        'callback' => 'reactpress_get_products_by_category',
        'permission_callback' => '__return_true',
        'args' => [
            'category' => [
                'required' => false,
                'type' => 'string',
                'description' => 'Category slug to filter products',
            ],
        ],
    ]);
});

function reactpress_get_products_by_category($request) {
    $category_slug = sanitize_text_field($request->get_param('category'));

    $tax_query = [];

    if ($category_slug) {
        $tax_query[] = [
            'taxonomy' => 'product_cat',
            'field'    => 'slug',
            'terms'    => $category_slug,
        ];
    }

    $args = [
        'post_type'      => 'product',
        'posts_per_page' => 8,
        'post_status'    => 'publish',
        'tax_query'      => $tax_query,
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
            'image' => wp_get_attachment_image_url($product->get_image_id(), 'medium'),
            'link'  => get_permalink(),
        ];
    }

    wp_reset_postdata();
    return $products;
}

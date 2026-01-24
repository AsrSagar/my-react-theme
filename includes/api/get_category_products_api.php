<?php

$slug = sanitize_text_field($_GET['slug'] ?? '');
if (!$slug) {
    wp_send_json_error("Category slug missing");
}

// Get category by slug (use dynamic $slug!)
$category = get_terms([
    'taxonomy' => 'product_cat',
    'slug' => $slug,
    'hide_empty' => true,
]);

if (empty($category)) {
    wp_send_json_error("Category not found");
}

$cat_id = $category[0]->term_id;

// Fetch products in this category
$args = [
    'post_type' => 'product',
    'posts_per_page' => 12,
    'tax_query' => [
        [
            'taxonomy' => 'product_cat',
            'field'    => 'term_id',
            'terms'    => $cat_id,
        ],
    ],
];

$products = get_posts($args);

$data = array_map(function($p) {
    $img = get_the_post_thumbnail_url($p->ID, 'full');
    $price = get_post_meta($p->ID, '_price', true);
    $regular_price = get_post_meta($p->ID, '_regular_price', true);
    $sale_price = get_post_meta($p->ID, '_sale_price', true);

    return [
        'id' => $p->ID,
        'name' => $p->post_title,
        'link' => get_permalink($p->ID),
        'image' => $img,
        'price' => $price,
        'regular_price' => $regular_price,
        'sale_price' => $sale_price,
    ];
}, $products);

wp_send_json($data);

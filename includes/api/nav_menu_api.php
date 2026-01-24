<?php

add_action('rest_api_init', function () {
    register_rest_route('reactpress/v1', '/menu/(?P<location>[a-zA-Z0-9_-]+)', [
        'methods'  => 'GET',
        'callback' => 'reactpress_get_mega_menu',
        'permission_callback' => '__return_true', // Public endpoint
    ]);
});

/**
 * Get WP menu for React with mega menu support
 */
function reactpress_get_mega_menu($data) {
    $location = $data['location'];

    // Get menu object by theme location
    $locations = get_nav_menu_locations();
    if (!isset($locations[$location])) {
        return [];
    }

    $menu_id = $locations[$location];
    $menu_items = wp_get_nav_menu_items($menu_id);
    if (!$menu_items) return [];

    $items_by_id = [];
    $tree = [];

    // Build basic items array
    foreach ($menu_items as $item) {
        // Get featured image for mega menu if set (using ACF)

        $image_url = get_post_meta($item->ID, '_menu_image', true);

        $items_by_id[$item->ID] = [
            'id'       => $item->ID,
            'title'    => $item->title,
            'url'      => $item->url,
            'parent'   => (int) $item->menu_item_parent,
            'classes'  => $item->classes,
            'children' => [],
            'image'    => $image_url ?: null, // optional banner for mega menu
            'mega'     => in_array('has-mega-menu', $item->classes), // mark as mega menu
        ];
    }

    // Assign children to parents
    foreach ($items_by_id as $id => $item) {
        if ($item['parent'] && isset($items_by_id[$item['parent']])) {
            $items_by_id[$item['parent']]['children'][] = &$items_by_id[$id];
        } else {
            $tree[] = &$items_by_id[$id];
        }
    }

    return $tree;
}

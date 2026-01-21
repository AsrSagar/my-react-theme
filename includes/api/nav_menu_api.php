<?php

add_action('rest_api_init', function () {
  register_rest_route('reactpress/v1', '/menu/(?P<location>[a-zA-Z0-9_-]+)', [
    'methods'  => 'GET',
    'callback' => function ($data) {

      $locations = get_nav_menu_locations();
      $location  = $data['location'];

      if (!isset($locations[$location])) {
        return [];
      }

      $menu  = wp_get_nav_menu_object($locations[$location]);
      $items = wp_get_nav_menu_items($menu->term_id);

      return array_map(function ($item) {
        return [
          'id'    => $item->ID,
          'title' => $item->title,
          'url'   => $item->url,
        ];
      }, $items);
    },
  ]);
});

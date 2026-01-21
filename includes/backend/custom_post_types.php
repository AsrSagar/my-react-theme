<?php 

function innotech_custom_post_type(){

    //   Services Custom Post Type

    $labels = array(
        'name'          => __('Services','startpath'),
        'singular_name'          => __('Services','startpath'),
        'menu_name'          => __('Services','startpath'),
        'name_admin_bar'          => __('Services','startpath'),
    );

    $args = array(
        'labels' => $labels,
        'show_ui' => true,
        'show_in_menu' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'menu_position' => 26,
        'public'    => true,
        'supports' => array('title','thumbnail','editor','excerpt'),
    );

    register_post_type('services',$args); 

    //   Services Custom Post Type

    $labels = array(
        'name'          => __('Main Slider','startpath'),
        'singular_name'          => __('Main Slider','startpath'),
        'menu_name'          => __('Main Slider','startpath'),
        'name_admin_bar'          => __('Main Slider','startpath'),
    );

    $args = array(
        'labels' => $labels,
        'show_ui' => true,
        'show_in_menu' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'menu_position' => 26,
        'public'    => true,
        'supports' => array('title','thumbnail','editor','excerpt'),
    );

    register_post_type('main_slider',$args); 

}
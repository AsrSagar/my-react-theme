<?php
/*
*	Constant 
*/
define('THEME_PATH', get_template_directory() );
define('THEME_URI', get_template_directory_uri() );

/*
*	includes 
*/

include(THEME_PATH.'/includes/front/enqueue.php');
include(THEME_PATH.'/includes/backend/admin_functions.php');
include(THEME_PATH.'/includes/api/nav_menu_api.php');
// include(THEME_PATH.'/includes/backend/custom_post_types.php');
// include(THEME_PATH.'/includes/backend/navwalker.php');

/*
*	Hooks 
*/
add_action('wp_enqueue_scripts', 'custon_css_and_js_file');
// add_action( 'init', 'innotech_custom_post_type' );



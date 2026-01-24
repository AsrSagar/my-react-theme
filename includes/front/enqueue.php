<?php 

function custon_css_and_js_file(){

	// Style

	// wp_register_style('animate', THEME_URI.'/assets/vendors/animate/animate.min.css', array(), '1.0', 'all' );



	// wp_enqueue_style('animate');


	// scripts

	wp_enqueue_script(
		'reactpress-app',
		get_template_directory_uri() . '/build/app.js',
		['wp-element'], // Use WP's React
		null,
		true
	);

	wp_localize_script(
		'reactpress-app',
		'WP_DATA',
		[
		'apiUrl' => rest_url(),
		'nonce'  => wp_create_nonce('wp_rest'),
		'site'   => get_bloginfo('name'),
		]
	);

    

	// wp_register_script('jquery-3', THEME_URI.'/assets/vendors/jquery/jquery-3.5.1.min.js', array('jquery'), '1.0', true );
  
	// wp_enqueue_script('jquery-3');

}


add_action('admin_enqueue_scripts', function() {

    wp_register_script('custom-admin-js', get_template_directory_uri() . '/assets/admin/js/custom_admin_scripts.js', array('jquery'), '1.0', true );

	wp_enqueue_script('custom-admin-js');

    wp_enqueue_media();

});



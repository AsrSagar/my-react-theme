<?php 

function custon_css_and_js_file(){

	// Style

	wp_register_style('sidr-dark', THEME_URI.'/assets/third-party/sidr/css/jquery.sidr.dark.css', array(), '1.0', 'all' );
	wp_register_style('slick', THEME_URI.'/assets/third-party/slick/css/slick.css', array(), '1.0', 'all' );
	wp_register_style('slick-theme', THEME_URI.'/assets/third-party/slick/css/slick-theme.css', array(), '1.0', 'all' );
	wp_register_style('animate', THEME_URI.'/assets/third-party/wow/css/animate.min.css', array(), '1.0', 'all' );
	wp_register_style('jquery-ui', THEME_URI.'/assets/css/jquery-ui.min.css', array(), '1.0', 'all' );
	wp_register_style('magnific-popup', THEME_URI.'/assets/third-party/magnific-popup-master/css/magnific-popup.css', array(), '1.0', 'all' );
	wp_register_style('accordionjs', THEME_URI.'/assets/third-party/accordionjs/css/accordion.min.css', array(), '1.0', 'all' );
	wp_register_style('style', THEME_URI.'/assets/css/style.css', array(), '1.0', 'all' );
	wp_register_style('icons', THEME_URI.'/assets/icons/icons.css', array(), '1.0', 'all' );
	wp_register_style('custom', THEME_URI.'/assets/css/custom.css', array(), '1.0', 'all' );
	wp_register_style('responsive', THEME_URI.'/assets/css/responsive.css', array(), '1.0', 'all' );
	wp_register_style('default-color', THEME_URI.'/assets/css/default.css', array(), '1.0', 'all' );
	wp_register_style('fontawesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.2.0/css/all.min.css', array(), '1.0', 'all' );
	// React app CSS
	// wp_register_style('react-style', THEME_URI.'/build/app.css', array(), '1.0', 'all' );



	wp_enqueue_style('sidr-dark');
	wp_enqueue_style('slick');
	wp_enqueue_style('slick-theme');
	wp_enqueue_style('animate');
	wp_enqueue_style('jquery-ui');
	wp_enqueue_style('magnific-popup');
	wp_enqueue_style('accordionjs');
	wp_enqueue_style('style');
	wp_enqueue_style('icons');
	wp_enqueue_style('custom');
	wp_enqueue_style('responsive');
	wp_enqueue_style('default-color');
	wp_enqueue_style('fontawesome');
	// React app CSS
	// wp_enqueue_style('react-style');


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

	wp_register_script('jquery-3', THEME_URI.'/assets/third-party/jquery/jquery-3.2.1.min.js', array('jquery'), '1.0', true );
	wp_register_script('jquery-migrate-3', THEME_URI.'/assets/third-party/jquery/jquery-migrate-3.0.0.min.js', array('jquery'), '1.0', true );
	wp_register_script('sidr', THEME_URI.'/assets/third-party/sidr/js/jquery.sidr.js', array('jquery'), '1.0', true );
	wp_register_script('cycle2', THEME_URI.'/assets/third-party/cycle2/jquery.cycle2.js', array('jquery'), '1.0', true );
	wp_register_script('slick', THEME_URI.'/assets/third-party/slick/js/slick.min.js', array('jquery'), '1.0', true );
	wp_register_script('wow', THEME_URI.'/assets/third-party/wow/js/wow.min.js', array('jquery'), '1.0', true );
	wp_register_script('jquery-ui', THEME_URI.'/assets/js/jquery-ui.min.js', array('jquery'), '1.0', true );
	wp_register_script('magnific-popup', THEME_URI.'/assets/third-party/magnific-popup-master/js/jquery.magnific-popup.js', array('jquery'), '1.0', true );
	wp_register_script('accordionjs', THEME_URI.'/assets/third-party/accordionjs/js/accordion.min.js', array('jquery'), '1.0', true );
	wp_register_script('easytabs', THEME_URI.'/assets/third-party/easytabs/js/jquery.easytabs.min.js', array('jquery'), '1.0', true );
	wp_register_script('contact', THEME_URI.'/assets/js/contact.js', array('jquery'), '1.0', true );
	wp_register_script('tabber', THEME_URI.'/assets/js/tabber.js', array('jquery'), '1.0', true );
	wp_register_script('custom', THEME_URI.'/assets/js/custom.js', array('jquery'), '1.0', true );
  
	wp_enqueue_script('jquery-3');
	wp_enqueue_script('jquery-migrate-3');
	wp_enqueue_script('sidr');
	wp_enqueue_script('cycle2');
	wp_enqueue_script('slick');
	wp_enqueue_script('wow');
	wp_enqueue_script('jquery-ui');
	wp_enqueue_script('magnific-popup');
	wp_enqueue_script('accordionjs');
	wp_enqueue_script('easytabs');
	wp_enqueue_script('contact');
	wp_enqueue_script('tabber');
	wp_enqueue_script('custom');

}


add_action('admin_enqueue_scripts', function() {

    wp_register_script('custom-admin-js', get_template_directory_uri() . '/assets/admin/js/custom_admin_scripts.js', array('jquery'), '1.0', true );

	wp_enqueue_script('custom-admin-js');

    wp_enqueue_media();

});



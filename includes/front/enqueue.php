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
	// wp_register_script('bootstrap', THEME_URI.'/assets/vendors/bootstrap/js/bootstrap.bundle.min.js', array('jquery'), '1.0', true );
	// wp_register_script('jarallax', THEME_URI.'/assets/vendors/jarallax/jarallax.min.js', array('jquery'), '1.0', true );
	// wp_register_script('ajaxchimp', THEME_URI.'/assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js', array('jquery'), '1.0', true );
	// wp_register_script('appear', THEME_URI.'/assets/vendors/jquery-appear/jquery.appear.min.js', array('jquery'), '1.0', true );
	// wp_register_script('circle-progress', THEME_URI.'/assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js', array('jquery'), '1.0', true );
	// wp_register_script('magnific-popup', THEME_URI.'/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js', array('jquery'), '1.0', true );
	// wp_register_script('validate', THEME_URI.'/assets/vendors/jquery-validate/jquery.validate.min.js', array('jquery'), '1.0', true );
	// wp_register_script('nouislider', THEME_URI.'/assets/vendors/nouislider/nouislider.min.js', array('jquery'), '1.0', true );
	// wp_register_script('odometer', THEME_URI.'/assets/vendors/odometer/odometer.min.js', array('jquery'), '1.0', true );
	// wp_register_script('swiper', THEME_URI.'/assets/vendors/swiper/swiper.min.js', array('jquery'), '1.0', true );
	// wp_register_script('tiny-slider', THEME_URI.'/assets/vendors/tiny-slider/tiny-slider.min.js', array('jquery'), '1.0', true );
	// wp_register_script('wnumb', THEME_URI.'/assets/vendors/wnumb/wNumb.min.js', array('jquery'), '1.0', true );
	// wp_register_script('wow', THEME_URI.'/assets/vendors/wow/wow.js', array('jquery'), '1.0', true );
	// wp_register_script('isotope', THEME_URI.'/assets/vendors/isotope/isotope.js', array('jquery'), '1.0', true );
	// wp_register_script('countdown', THEME_URI.'/assets/vendors/countdown/countdown.min.js', array('jquery'), '1.0', true );
	// wp_register_script('owl-carousel', THEME_URI.'/assets/vendors/owl-carousel/owl.carousel.min.js', array('jquery'), '1.0', true );

  
	// wp_enqueue_script('jquery-3');
	// wp_enqueue_script('bootstrap');
	// wp_enqueue_script('jarallax');
	// wp_enqueue_script('ajaxchimp');
	// wp_enqueue_script('appear');
	// wp_enqueue_script('circle-progress');
	// wp_enqueue_script('magnific-popup');
	// wp_enqueue_script('validate');
	// wp_enqueue_script('nouislider');
	// wp_enqueue_script('odometer');
	// wp_enqueue_script('swiper');
	// wp_enqueue_script('tiny-slider');
	// wp_enqueue_script('wnumb');
	// wp_enqueue_script('wow');
	// wp_enqueue_script('isotope');
	// wp_enqueue_script('countdown');
	// wp_enqueue_script('owl-carousel');


}



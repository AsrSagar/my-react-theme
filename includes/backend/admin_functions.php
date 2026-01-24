<?php 

/*
@packages Admin Functions
=========================
   ADMIN FUNCTIONS 
=========================
*/
function custom_default_function() {
    if ( ! isset( $content_width ) ) { 
        $content_width = 900;
    }
    /*
     * Make theme available for translation.
     * Translations can be filed in the /languages/ directory.
     * If you're building a theme based on cubic, use a find and replace
     * to change 'cubic' to the name of your theme in all the template files
     */
    load_theme_textdomain( 'reactpress-theme', get_template_directory() . '/languages' );

    /*
     * This theme uses a custom image size for featured images, displayed on
     * "standard" posts and pages.
     */
    add_theme_support( 'custom-header' ); 
    add_theme_support( 'custom-background' );
    add_theme_support( 'title-tag' );
    add_theme_support( 'post-thumbnails' );


    // Adds RSS feed links to <head> for posts and comments.

    add_theme_support( 'automatic-feed-links' );


    // ADD IMAGE POST THUMBNAIL SIZE

    add_image_size('productImage', 394, 295, true); 


    // Switches default core markup for search form, comment form, and comments
    // to output valid HTML5.
    add_theme_support( 'html5', array( 'search-form', 'comment-form', 'comment-list' ) );
    //Post formats
    add_theme_support( 'post-formats', array(
        'audio',  'gallery', 'image', 'quote', 'video','link'
    ) );

    
    // This theme uses wp_nav_menu() in one location.

    if(function_exists('register_nav_menus')){
        register_nav_menus( array(
            'main-menu'   => __('Main Menu', 'reactpress-theme'),  
            'footer-menu'   => __('Footer Menu', 'reactpress-theme'),  
        ) );
    }

}
add_action( 'after_setup_theme', 'custom_default_function' );



// Add custom image upload field to menu items in admin
add_action('wp_nav_menu_item_custom_fields', function ($item_id, $item, $depth, $args) {
    $menu_image = get_post_meta($item_id, '_menu_image', true);
    ?>
    <p class="description description-wide">
        <label for="edit-menu-item-image-<?php echo $item_id; ?>">
            Mega Menu Image URL<br>
            <input type="text" id="edit-menu-item-image-<?php echo $item_id; ?>" 
                   class="widefat code edit-menu-item-image" 
                   name="menu-item-image[<?php echo $item_id; ?>]" 
                   value="<?php echo esc_attr($menu_image); ?>" />
        </label>
        <button class="button upload-menu-image-button" data-target="#edit-menu-item-image-<?php echo $item_id; ?>" type="button">Upload Image</button>
    </p>
    <?php
}, 10, 4);


add_action('wp_update_nav_menu_item', function ($menu_id, $menu_item_db_id, $args) {
    if (isset($_POST['menu-item-image'][$menu_item_db_id])) {
        $sanitized = sanitize_text_field($_POST['menu-item-image'][$menu_item_db_id]);
        update_post_meta($menu_item_db_id, '_menu_image', $sanitized);
    }
}, 10, 3);


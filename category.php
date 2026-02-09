<?php get_header(); ?>
<div id="primary" class="content-area">
    <main id="main" class="site-main">
        <?php
        while ( have_posts() ) :
            the_post();
            the_title( '<h1 class="entry-title">', '</h1>' );
            the_content();
        endwhile; 
        ?>
    </main>
</div>
<?php get_footer(); ?>
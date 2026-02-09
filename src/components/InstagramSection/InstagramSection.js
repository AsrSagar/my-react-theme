import React from "react";
import config from "../../config";

const InstagramSection = () => {
    const SITE_URL = config.SITE_URL
    return (
        <article className="section">
        <div className="instagram-section">
            <div className="container">
            <div className="section-title-wrap">
                <h2 className="section-title">Follow Us</h2>
            </div>
            <div class="instagram-inner-wrapper">
                    <div class="iteam-col-6 section-carousel-enabled byapr-carousel" data-slick="{&quot;slidesToShow&quot;:5,&quot;dots&quot;:false,&quot;prevArrow&quot;:&quot;<span data-role=\&quot;none\&quot; class=\&quot;slick-prev\&quot; tabindex=\&quot;0\&quot;><i class=\&quot;fa fa-angle-left\&quot; aria-hidden=\&quot;true\&quot;><\/i><\/span>&quot;,&quot;nextArrow&quot;:&quot;<span data-role=\&quot;none\&quot; class=\&quot;slick-next\&quot; tabindex=\&quot;0\&quot;><i class=\&quot;fa fa-angle-right\&quot; aria-hidden=\&quot;true\&quot;><\/i><\/span>&quot;,&quot;responsive&quot;:[{&quot;breakpoint&quot;:1024,&quot;settings&quot;:{&quot;slidesToShow&quot;:5}},{&quot;breakpoint&quot;:800,&quot;settings&quot;:{&quot;slidesToShow&quot;:3}},{&quot;breakpoint&quot;:659,&quot;settings&quot;:{&quot;slidesToShow&quot;:2}},{&quot;breakpoint&quot;:479,&quot;settings&quot;:{&quot;slidesToShow&quot;:1}}]}">
                        <div class="insta-item">
                            <a href="#"><img alt="post" src={`${SITE_URL}/wp-content/uploads/2026/01/post-1.jpg`}/></a>
                            <div class="instagram-hvr-content"><span class="tottallikes"><i class="fa fa-heart"></i>0</span><span class="totalcomments"><i class="fa fa-comments"></i>0</span></div>
                        </div>
                        <div class="insta-item">
                            <a href="#"><img alt="post" src={`${SITE_URL}/wp-content/uploads/2026/01/post-2.jpg`}/></a>
                            <div class="instagram-hvr-content"><span class="tottallikes"><i class="fa fa-heart"></i>0</span><span class="totalcomments"><i class="fa fa-comments"></i>0</span></div>
                        </div>
                        <div class="insta-item">
                            <a href="#"><img alt="post" src={`${SITE_URL}/wp-content/uploads/2026/01/post-3.jpg`}/></a>
                            <div class="instagram-hvr-content"><span class="tottallikes"><i class="fa fa-heart"></i>0</span><span class="totalcomments"><i class="fa fa-comments"></i>0</span></div>
                        </div>
                        <div class="insta-item">
                            <a href="#"><img alt="post" src={`${SITE_URL}/wp-content/uploads/2026/01/post-4.jpg`}/></a>
                            <div class="instagram-hvr-content"><span class="tottallikes"><i class="fa fa-heart"></i>0</span><span class="totalcomments"><i class="fa fa-comments"></i>0</span></div>
                        </div>
                        <div class="insta-item">
                            <a href="#"><img alt="post" src={`${SITE_URL}/wp-content/uploads/2026/01/post-5.jpg`}/></a>
                            <div class="instagram-hvr-content"><span class="tottallikes"><i class="fa fa-heart"></i>0</span><span class="totalcomments"><i class="fa fa-comments"></i>0</span></div>
                        </div>
                        <div class="insta-item">
                            <a href="#"><img alt="post" src={`${SITE_URL}/wp-content/uploads/2026/01/post-6.jpg`}/></a>
                            <div class="instagram-hvr-content"><span class="tottallikes"><i class="fa fa-heart"></i>0</span><span class="totalcomments"><i class="fa fa-comments"></i>0</span></div>
                        </div>
                        <div class="insta-item">
                            <a href="#"><img alt="post" src={`${SITE_URL}/wp-content/uploads/2026/01/post-7.jpg`}/></a>
                            <div class="instagram-hvr-content"><span class="tottallikes"><i class="fa fa-heart"></i>0</span><span class="totalcomments"><i class="fa fa-comments"></i>0</span></div>
                        </div>
                    </div>
                    <div class="instagram-caption">
                        <div class="instagram-cap-wrapper">
                            <a href="#" class="custom-button custom-white">Follow Us</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </article>
    );
};

export default InstagramSection;

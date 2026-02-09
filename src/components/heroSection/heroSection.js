import React from "react";
import config from "../../config";

export default function HeroSection() {
    
    const SITE_URL = config.SITE_URL

    return (
        <>
        <aside class="section no-padding">
            <div class="section-featured-slider">
                <div id="main-slider"  class="cycle-slideshow  featrued-slider" data-cycle-fx="fadeout"  data-cycle-speed="1000"  data-cycle-pause-on-hover="true"  data-cycle-loader="true"  data-cycle-log="false"  data-cycle-swipe="true" data-cycle-auto-height="container"  data-cycle-timeout="3000"  data-cycle-slides="article" data-pager-template='<span class="pager-box"></span>'>
                    <div class="cycle-prev"><i class="fas fa-angle-left" aria-hidden="true"></i></div>
                    <div class="cycle-next"><i class="fas fa-angle-right" aria-hidden="true"></i></div>
                    <div class="cycle-pager"> </div>
                    <article class="first">
                        <div class="caption">
                            <div class="cycle-caption text-alignleft">
                                <p>For Women</p>
                                <h3><a href="#" >UP TO 50% OFF</a></h3>
                                <h4>End of Season Sale</h4>
                                <div class="slider-buttons">
                                    <a class="custom-button" href="#">Shop Now</a>
                                </div> 
                            </div> 
                        </div> 
                        <a href= "#">
                            <img src={`${SITE_URL}/wp-content/uploads/2026/01/slide-1.jpg`} alt="Slider" />
                        </a>
                    </article>
                    <article>
                        <div class="caption">
                            <div class="cycle-caption text-alignleft">
                                <p> Summer Collections </p>
                                <h3><a href="#" >Newarives</a></h3>
                                <h4>Now Starting at $99.00 </h4>
                                <div class="slider-buttons">
                                    <a class="custom-button" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <img src={`${SITE_URL}/wp-content/uploads/2026/01/slide-2.jpg`} alt="Slider" />
                        </a>
                    </article>
                    <article>
                        <div class="caption">
                            <div class="cycle-caption text-alignleft">
                                <p>For Women</p>
                                <h3><a href="#">Get 50% off</a></h3>
                                <h4>Winter Collections</h4>
                                <div class="slider-buttons">
                                    <a class="custom-button" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <img src={`${SITE_URL}/wp-content/uploads/2026/01/slide-3.jpg`} alt="Slider" />
                        </a>
                    </article>
                    <article>
                        <div class="caption">
                            <div class="cycle-caption text-alignright">
                                <p>For Men</p>
                                <h3><a href="#" >AMAZING STYLE</a></h3>
                                <h4>30% Off For All Items</h4>

                                <div class="slider-buttons">
                                    <a class="custom-button" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <a href="#">
                            <img src={`${SITE_URL}/wp-content/uploads/2026/01/slide-4.jpg`} alt="Slider" />
                        </a>
                    </article>
                    <article>
                        <div class="caption">
                            <div class="cycle-caption text-alignleft">
                                <p>Summer Collections</p>
                                <h3><a href="#" >NEWARRIALS </a></h3>
                                <h4> Up To 50% Off </h4>
                                <div class="slider-buttons">
                                    <a class="custom-button" href="#">Shop Now</a>
                                </div>
                            </div>
                        </div>
                        <a href= "#">
                            <img src={`${SITE_URL}/wp-content/uploads/2026/01/slide-5.jpg`} alt="Slider" />
                        </a>
                    </article>
                </div>
            </div>
        </aside> 
        </>
    );
}
import React from 'react';

const SubscribePopup = () => {
  return (
    <div className="main-popup-wrapper white-popup-block mfp-hide" id="subscribe-popup">
        <div className="banner banner-newsletter main-popup">
            <div className="inner-wrapper">
                <div className="main-popup-thumb col-grid-6">
                    <img src="http://localhost/wp-react-theme/wp-content/uploads/2026/01/product-1.jpg" alt="product" />
                </div>
            
                <div class="banner-info-wrapper col-grid-6">
                    <h3> Signup to Newsletter</h3>
                    <p>Hey Linten! Join us today and get access to our latest discounts and offers as well as daily tips and tricks.</p>
                    <div class="subscribe-form-wrapper">
                        <div class="news-letter-wrapper">
                            <form className="news-letter-form">
                                <input
                                    type="email"
                                    className="news-letter-email"
                                    placeholder="Enter your email address"
                                />
                                <input
                                    type="submit"
                                    className="news-letter-submit"
                                    value="Subscribe"
                                />
                            </form>
                        </div>
                        <div className="custom-checkbox-wrapper">
                            <input type="checkbox" name="jeans" value="jeans"/>
                            <span>Don’t show this popup again</span>
                        </div>
                        <div class="share-on-us text-alignleft clear-fix social-links circle brand-color">
                            <ul>
                                <li><a target="_blank" href="http://facebook.com/">Facebook</a></li>
                                <li><a target="_blank" href="http://twitter.com/">Twitter</a></li>
                                <li><a target="_blank" href="http://linkedin.com/">Linkedln</a></li>
                                <li><a target="_blank" href="http://youtube.com/">Linkedln</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
};

export default SubscribePopup;

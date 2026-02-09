import React from "react";
import './TopBar.css';
import config from "../../../config";

export default function TopBar() {
    const SITE_URL = config.SITE_URL;
    return (
        <>
        <div id="tophead">
            <div class="container">
                <div class="top-head-left">
                    <div class="top-head-col multi-language pull-left">
                        <a class="multi-language-current" href="#"><img alt="language" src={`${SITE_URL}/wp-content/uploads/2026/01/en.png`} />English</a>
                        <ul class="multi-language-sub">
                            <li><a href="#"><img alt="language" src={`${SITE_URL}/wp-content/uploads/2026/01/nl.png`} />Nederlands</a></li>
                            <li><a href="#"><img alt="language" src={`${SITE_URL}/wp-content/uploads/2026/01/la.png`}/>Latin</a></li>
                        </ul>
                    </div>
                    <div class="top-head-col multi-currency pull-left">
                        <ul>
                        <li> <a class="multi-language-current" href="#"> $USD</a>
                            <ul class="multi-currency-sub">
                                <li><a href="#">URO</a></li>
                                <li><a href="#">YEN</a></li>
                                <li><a href="#">POUND</a></li>
                            </ul>
                        </li>
                        </ul>
                    </div>
                    <div class="top-head-col quick-contact quick-contact-2 pull-left">
                        <ul>
                            <li class="quick-call"><i class="fas fa-phone-volume"></i> <a href="#"> + 541-754-3010</a> </li>
                        </ul> 
                    </div>
                </div>
                <div class="top-head-right pull-right">
                    <a href="#" class="header-link" title="Help"><i class="fas fa-phone"></i><span class="header-text">Help</span></a>
                    <a href="#" class="header-link" title="More"><i class="fas fa-th-large"></i><span class="header-text">More</span></a>
                    <div class="header-link my-account my-login-popup">
                        <a href="#login-popup"   title="My Account" class="login-popup-btn">
                        <i class="fa fa-user"></i><span class="header-text">Account</span>
                        </a>
                    </div>
                </div>
            </div> 
        </div> 
        </>
    );
}
   
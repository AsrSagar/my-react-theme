import React from "react";
import config from "../../config";

export default function PormoSection() {
    const SITE_URL = config.SITE_URL

    return (
        <>
        <aside className="section section-pormo">
            <div className="container">
                <div className="inner-wrapper">
                    <div className="col-grid-4">
                        <div className="pormo-item">
                            <div className="pormo-inner-wrapper zoom-effect-hover-container">
                                <div className="pormo-thumb zoom-effect">
                                    <a href="#"><img alt="Promo" src={`${SITE_URL}/wp-content/uploads/2026/01/pormo-5.jpg`} /></a>
                                    <div className="pormo-info text-aligncenter">
                                        <div className="pormo-buttons">
                                            <a className="custom-button custom-white button-small" href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-grid-4">
                        <div className="pormo-item">
                            <div className="pormo-inner-wrapper zoom-effect-hover-container">
                                <div className="pormo-thumb zoom-effect">
                                    <a href="#"><img alt="Promo" src={`${SITE_URL}/wp-content/uploads/2026/01/pormo-6.jpg`} /></a>
                                    <div className="pormo-info text-aligncenter">
                                        <div className="pormo-buttons">
                                            <a className="custom-button custom-white button-small" href="#">Shop Now</a>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pormo-item top-space">
                            <div className="pormo-inner-wrapper zoom-effect-hover-container">
                                <div className="pormo-thumb zoom-effect">
                                    <a href="#"><img alt="Promo" src={`${SITE_URL}/wp-content/uploads/2026/01/pormo-7.jpg`} /></a>
                                    <div className="pormo-info text-aligncenter">
                                        <div className="pormo-buttons">
                                            <a className="custom-button custom-white button-small" href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-grid-4">
                        <div className="pormo-item">
                            <div className="pormo-inner-wrapper zoom-effect-hover-container">
                                <div className="pormo-thumb zoom-effect">
                                    <a href="#"><img alt="Promo" src={`${SITE_URL}/wp-content/uploads/2026/01/pormo-8.jpg`} /></a>
                                    <div className="pormo-info text-aligncenter">
                                        <div className="pormo-buttons">
                                            <a className="custom-button custom-white button-small" href="#">Shop Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ aside >
        </>
    );
}
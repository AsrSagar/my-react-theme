import React from 'react';
import config from '../../config';

const AdsBanner = () => {
  const SITE_URL = config.SITE_URL;
  return (
    <aside className="section no-padding">
      <div className="ads-banner">
        <div className="container">
          <div className="inner-wrapper">
            <div className="col-grid-8 zoom-effect-hover-container">
              <div className="zoom-effect">
                <a href="#">
                  <img src={`${SITE_URL}/wp-content/uploads/2026/01/ad-banner3.jpg`} alt="banner" />
                </a>
              </div>
            </div>
            <div className="col-grid-4 zoom-effect-hover-container">
              <div className="zoom-effect">
                <a href="#">
                  <img src={`${SITE_URL}/wp-content/uploads/2026/01/ad-banner4.jpg`} alt="banner" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default AdsBanner;

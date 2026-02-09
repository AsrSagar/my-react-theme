import React from 'react';
import config from '../../config';

const RecentNews = () => {
  const SITE_URL = config.SITE_URL
  return (
    <aside className="section no-padding-top">
      <div className="section-latest-posts">
        <div className="container">
          <div className="latest-posts-section">
            <div className="section-title-wrap">
              <h2 className="section-title">Recent News</h2>
            </div>
            <div className="inner-wrapper">
              {/* Post 1 */}
              <div className="col-grid-4 latest-posts-item">
                <div className="latest-posts-wrapper box-shadow-block">
                  <div className="latest-posts-thumb thumb-overlay">
                    <a href="#">
                      <img
                        src={`${SITE_URL}/wp-content/uploads/2026/01/latest-post-1.jpg`}
                        alt="Recent Post"
                      />
                    </a>
                    <div className="overlay-box">
                      <a href="#">
                        <i className="icon-attachment"></i>
                      </a>
                    </div>
                    <div className="latest-news-meta">
                      <div className="latest-news-date">
                        <span className="news-meta-date">08</span>
                        <span className="news-meta-months">Aug</span>
                      </div>
                    </div>
                  </div>
                  <div className="latest-posts-text-content-wrapper">
                    <div className="latest-posts-text-content">
                      <h3 className="latest-posts-title">
                        <a href="#">Kids To Barefoot</a>
                      </h3>
                      <p>
                        Praesent volutpat ut nisl in hendrerit primis. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                      </p>
                      <div className="entry-meta latest-posts-meta">
                        <span className="byline">
                          <span className="author vcard">
                            <a href="#">Admin</a>
                          </span>
                        </span>
                        <span className="comments-link">
                          <a href="#">30</a>
                        </span>
                        <span className="cat-links">
                          <a href="#" rel="category tag">Fashion</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post 2 */}
              <div className="col-grid-4 latest-posts-item">
                <div className="latest-posts-wrapper box-shadow-block">
                  <div className="latest-posts-thumb thumb-overlay">
                    <a href="#">
                      <img
                        src={`${SITE_URL}/wp-content/uploads/2026/01/latest-post-2.jpg`}
                        alt="Recent Post"
                      />
                    </a>
                    <div className="overlay-box">
                      <a href="#">
                        <i className="icon-attachment"></i>
                      </a>
                    </div>
                    <div className="latest-news-meta">
                      <div className="latest-news-date">
                        <span className="news-meta-date">08</span>
                        <span className="news-meta-months">Aug</span>
                      </div>
                    </div>
                  </div>
                  <div className="latest-posts-text-content-wrapper">
                    <div className="latest-posts-text-content">
                      <h3 className="latest-posts-title">
                        <a href="#">To Feel By Caleb</a>
                      </h3>
                      <p>
                        Praesent volutpat ut nisl in hendrerit primis. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                      </p>
                      <div className="entry-meta latest-posts-meta">
                        <span className="byline">
                          <span className="author vcard">
                            <a href="#">Admin</a>
                          </span>
                        </span>
                        <span className="comments-link">
                          <a href="#">30</a>
                        </span>
                        <span className="cat-links">
                          <a href="#" rel="category tag">Fashion</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post 3 */}
              <div className="col-grid-4 latest-posts-item">
                <div className="latest-posts-wrapper box-shadow-block">
                  <div className="latest-posts-thumb thumb-overlay">
                    <a href="#">
                      <img
                        src={`${SITE_URL}/wp-content/uploads/2026/01/latest-post-3.jpg`}
                        alt="Recent Post"
                      />
                    </a>
                    <div className="overlay-box">
                      <a href="#">
                        <i className="icon-attachment"></i>
                      </a>
                    </div>
                    <div className="latest-news-meta">
                      <div className="latest-news-date">
                        <span className="news-meta-date">08</span>
                        <span className="news-meta-months">Aug</span>
                      </div>
                    </div>
                  </div>
                  <div className="latest-posts-text-content-wrapper">
                    <div className="latest-posts-text-content">
                      <h3 className="latest-posts-title">
                        <a href="#">Reconnect With Nature</a>
                      </h3>
                      <p>
                        Praesent volutpat ut nisl in hendrerit primis. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                      </p>
                      <div className="entry-meta latest-posts-meta">
                        <span className="byline">
                          <span className="author vcard">
                            <a href="#">Admin</a>
                          </span>
                        </span>
                        <span className="comments-link">
                          <a href="#">30</a>
                        </span>
                        <span className="cat-links">
                          <a href="#" rel="category tag">Fashion</a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> {/* .inner-wrapper */}
          </div> {/* .latest-posts-section */}
        </div> {/* .container */}
      </div> {/* .section-latest-posts */}
    </aside>
  );
};

export default RecentNews;

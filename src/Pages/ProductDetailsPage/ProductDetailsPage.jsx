const ProductDetailsPage = () => {
  return (
    <>
    <div id="custom-header">
      <div className="custom-header-content">
          <div className="container">
              <h1 className="page-title">Product Title</h1>
              <div id="breadcrumb">
                  <div  aria-label="Breadcrumbs" className="breadcrumbs breadcrumb-trail">
                      <ul className="trail-items">
                      <li className="trail-item trail-begin"><a href="" rel="home"><span>Home</span></a></li>
                      <li className="trail-item"><span>Shop</span></li>
                          <li className="trail-item trail-end"><span>Product Title</span></li>
                      </ul>
                  </div> 
              </div> 
          </div>
      </div>
    </div>
    </>
  );
};

export default ProductDetailsPage;

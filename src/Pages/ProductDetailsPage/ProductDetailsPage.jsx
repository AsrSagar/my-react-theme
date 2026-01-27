import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetailsPage = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost/wp-react-theme/wp-json/reactpress/v1/product/${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Product fetch error:", err);
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <p>Loading product...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <>
    <div id="custom-header">
        <div className="custom-header-content">
            <div className="container">
                <h1 className="page-title">{product.name}</h1>
                <div id="breadcrumb">
                    <div  aria-label="Breadcrumbs" className="breadcrumbs breadcrumb-trail">
                        <ul className="trail-items">
                        <li className="trail-item trail-begin"><a href="" rel="home"><span>Home</span></a></li>
                        <li className="trail-item"><span>Shop</span></li>
                            <li className="trail-item trail-end"><span>{product.name}</span></li>
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

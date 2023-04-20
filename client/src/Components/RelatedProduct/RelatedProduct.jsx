import React from 'react';
import "./RelatedProduct.scss";
import { Link } from 'react-router-dom';

const RelatedProduct = () => {
  return (
    <>
        <div className="related-product">
            <h3>Related Product</h3>
            <div className="related-product-item d-flex ">
                <div className="img-area">
                    <Link to="/"><img src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-s22-ultra/galaxy-s22-ultra-001-500x500.webp" alt="" /></Link>
                </div>
                <div className="s-details">
                    <Link to="/"><p>Samsung Galaxy S22 Ultra Smartphone (12/256GB)</p></Link>
                    <span>187,999৳</span>
                </div>
            </div>
            <div className="related-product-item d-flex ">
                <div className="img-area">
                    <Link to="/"><img src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-s22-ultra/galaxy-s22-ultra-001-500x500.webp" alt="" /></Link>
                </div>
                <div className="s-details">
                    <Link to="/"><p>Samsung Galaxy S22 Ultra Smartphone (12/256GB)</p></Link>
                    <span>187,999৳</span>
                </div>
            </div>
            <div className="related-product-item d-flex ">
                <div className="img-area">
                    <Link to="/"><img src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-s22-ultra/galaxy-s22-ultra-001-500x500.webp" alt="" /></Link>
                </div>
                <div className="s-details">
                    <Link to="/"><p>Samsung Galaxy S22 Ultra Smartphone (12/256GB)</p></Link>
                    <span>187,999৳</span>
                </div>
            </div>
            <div className="related-product-item d-flex ">
                <div className="img-area">
                    <Link to="/"><img src="https://www.startech.com.bd/image/cache/catalog/mobile/samsung/galaxy-s22-ultra/galaxy-s22-ultra-001-500x500.webp" alt="" /></Link>
                </div>
                <div className="s-details">
                    <Link to="/"><p>Samsung Galaxy S22 Ultra Smartphone (12/256GB)</p></Link>
                    <span>187,999৳</span>
                </div>
            </div>
        </div>
    </>
  )
}

export default RelatedProduct
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import "./Style/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.product) {
          setProduct(data.product);
          setImages(data.images || []);

          if (data.images && data.images.length > 0) {
            setSelectedImage(data.images[0].image);
          }
        }
      })
      .catch((error) => {
        console.error("Product Details Error:", error);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="product-loading">
        Loading product...
      </div>
    );
  }

  const currentPrice =
    product.sale_price &&
    Number(product.sale_price) < Number(product.price)
      ? product.sale_price
      : product.price;

  const oldPrice =
    product.sale_price &&
    Number(product.sale_price) < Number(product.price)
      ? product.price
      : null;

  const discount =
    oldPrice
      ? Math.round(
          ((Number(oldPrice) - Number(currentPrice)) /
            Number(oldPrice)) *
            100
        )
      : 0;

  return (
    <main className="product-details-page">

      {/* Breadcrumb */}
      <div className="product-breadcrumb-wrap">
        <div className="product-breadcrumb">

          <Link to="/">Home</Link>

          <i className="bi bi-chevron-right"></i>

          <span>Women</span>

          <i className="bi bi-chevron-right"></i>

          <span>{product.category}</span>

          <i className="bi bi-chevron-right"></i>

          <span className="current">
            {product.name}
          </span>

        </div>

        <div className="product-navigation">
          <button>
            <i className="bi bi-chevron-left"></i>
            Previous
          </button>

          <button>
            Next
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>

      {/* Product Main */}
      <section className="product-main">

        {/* LEFT */}
        <div className="product-gallery">

          <div className="product-main-image">

            {selectedImage ? (
              <img
                src={`http://localhost:5000${selectedImage}`}
                alt={product.name}
              />
            ) : (
              <div className="no-image">
                No Image
              </div>
            )}

            <button className="image-zoom">
              <i className="bi bi-search"></i>
            </button>

          </div>

          <div className="product-thumbnails">

            {images.map((image, index) => (
              <button
                key={index}
                className={
                  selectedImage === image.image
                    ? "thumbnail active"
                    : "thumbnail"
                }
                onClick={() =>
                  setSelectedImage(image.image)
                }
              >
                <img
                  src={`http://localhost:5000${image.image}`}
                  alt={`${product.name} ${index + 1}`}
                />
              </button>
            ))}

          </div>

        </div>

        {/* RIGHT */}
        <div className="product-info">

          <h1>{product.name}</h1>

          {/* Rating */}
          <div className="product-rating">

            <span className="stars">
              ★★★★★
            </span>

            <span>
              (0 customer reviews)
            </span>

          </div>

          {/* Price */}
          <div className="product-pricing">

            <span className="current-price">
              ₹{Number(currentPrice).toFixed(2)}
            </span>

            {oldPrice && (
              <>
                <span className="old-price">
                  ₹{Number(oldPrice).toFixed(2)}
                </span>

                <span className="discount">
                  {discount}% OFF
                </span>
              </>
            )}

          </div>

          {/* Description */}
          <p className="short-description">
            {product.description ||
              "Elegant and stylish fashion designed for modern women. Crafted with quality materials and thoughtful details, perfect for everyday wear and special occasions."}
          </p>

          {/* Size */}
          <div className="size-section">

            <h4>Size</h4>

            <div className="size-buttons">

              {["M", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  className={
                    selectedSize === size
                      ? "size-btn active"
                      : "size-btn"
                  }
                  onClick={() =>
                    setSelectedSize(size)
                  }
                >
                  {size}
                </button>
              ))}

            </div>

          </div>

          {/* Cart Box */}
          <div className="purchase-box">

            <div className="quantity-row">

              <button
                onClick={() =>
                  setQuantity(
                    Math.max(1, quantity - 1)
                  )
                }
              >
                −
              </button>

              <span>{quantity}</span>

              <button
                onClick={() =>
                  setQuantity(quantity + 1)
                }
              >
                +
              </button>

            </div>

            <button className="add-cart-btn">
              ADD TO CART
            </button>

            <button className="buy-now-btn">
              BUY NOW
            </button>

          </div>

          {/* Wishlist */}
          <button className="wishlist-btn">
            <i className="bi bi-heart"></i>
            Add to wishlist
          </button>

          {/* Features */}
          <div className="product-features">

            <div>
              <i className="bi bi-box-seam"></i>
              <span>Delivery Return</span>
            </div>

            <div>
              <i className="bi bi-rulers"></i>
              <span>Size Guide</span>
            </div>

            <div>
              <i className="bi bi-chat-dots"></i>
              <span>Ask a Question</span>
            </div>

          </div>

          {/* Meta */}
          <div className="product-meta">

            <p>
              <strong>SKU:</strong>{" "}
              UB-{product.id}
            </p>

            <p>
              <strong>Categories:</strong>{" "}
              Women, {product.category}
            </p>

            <p>
              <strong>Tags:</strong>{" "}
              casual ethnic wear, women fashion,
              stylish clothing
            </p>

          </div>

          {/* Payment */}
          <div className="secure-payment">

            <h5>Guaranteed Safe Checkout</h5>

            <div className="payment-icons">

              <span>Apple Pay</span>
              <span>G Pay</span>
              <span>VISA</span>
              <span>AMEX</span>
              <span>Mastercard</span>

            </div>

            <div className="payment-benefits">

              <div>
                <strong>Free delivery</strong>
                <small>
                  Enjoy free delivery on all orders
                </small>
              </div>

              <div>
                <strong>Easy returns</strong>
                <small>
                  Shop with confidence
                </small>
              </div>

              <div>
                <strong>Secure payments</strong>
                <small>
                  Safe & secure checkout
                </small>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Description */}
      <section className="product-description">

        <div className="description-tabs">

          <button className="active">
            Description
          </button>

          <button>
            Reviews (0)
          </button>

        </div>

        <div className="description-content">

          <h3>Description</h3>

          <p>
            {product.description ||
              "This product is designed with modern style, comfort and quality in mind. Perfect for women looking for elegant and versatile fashion."}
          </p>

          <p>
            Designed for everyday comfort, this stylish
            piece combines contemporary fashion with
            timeless appeal. The carefully selected
            material provides comfort while maintaining
            an elegant appearance.
          </p>

          <h3>Key Features</h3>

          <ul>
            <li>Premium quality material</li>
            <li>Comfortable and stylish design</li>
            <li>Perfect for everyday wear</li>
            <li>Elegant modern look</li>
            <li>Easy to style</li>
          </ul>

        </div>

      </section>

    </main>
  );
}

export default ProductDetails;
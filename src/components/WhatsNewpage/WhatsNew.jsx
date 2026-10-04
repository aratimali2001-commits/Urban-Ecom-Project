import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import PageBanner from "../Common/PageBanner";
import "./Style/WhatsNew.css";

function WhatsNew() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Products Error:", error);
      });

  }, []);

  return (
    <main className="whatsnew-page">

      {/* Page Banner */}

      <PageBanner
        title="What’s New"
        currentPage="What’s New"
      />

      {/* Products */}

      <section className="whatsnew-products">

        <div className="whatsnew-grid">

          {products.map((product) => (

            <Link
              to={`/product/${product.id}`}
              className="product-card-link"
              key={product.id}
            >

              <div className="whatsnew-card">

                <div className="whatsnew-image">

                  <img
                    src={`http://localhost:5000${product.image}`}
                    alt={product.name}
                  />

                </div>

                <h3>
                  {product.name}
                </h3>

                <div className="whatsnew-price">

                  <span className="whatsnew-sale-price">
                    ₹{product.sale_price}
                  </span>

                  {product.sale_price !== product.price && (
                    <span className="whatsnew-original-price">
                      ₹{product.price}
                    </span>
                  )}

                </div>

              </div>

            </Link>

          ))}

        </div>

      </section>

    </main>
  );
}

export default WhatsNew;
import { useEffect, useState } from "react";
import PageBanner from "../Common/PageBanner";
import "./Style/Salepage.css";

function Salepage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {

        // Only products having sale price
        const saleProducts = data.filter(
          (product) =>
            product.sale_price &&
            Number(product.sale_price) < Number(product.price)
        );

        setProducts(saleProducts);

      })
      .catch((error) => {
        console.error("Sale Products Error:", error);
      });

  }, []);


  return (
    <main className="sale-page">

      {/* =========================================
          PAGE BANNER
      ========================================= */}

      <PageBanner
        title="Sale"
        currentPage="Sale"
      />


      {/* =========================================
          SALE PRODUCTS
      ========================================= */}

      <section className="sale-products">

        <div className="sale-grid">

          {products.length > 0 ? (

            products.map((product) => (

              <div
                className="sale-card"
                key={product.id}
              >

                {/* Product Image */}

                <div className="sale-image">

                  <img
                    src={`http://localhost:5000${product.image}`}
                    alt={product.name}
                  />

                  {/* Sale Badge */}

                  <span className="sale-badge">
                    SALE
                  </span>

                </div>


                {/* Product Name */}

                <h3>
                  {product.name}
                </h3>


                {/* Price */}

                <div className="sale-price">

                  <span className="sale-current-price">
                    ₹{product.sale_price}
                  </span>

                  <span className="sale-old-price">
                    ₹{product.price}
                  </span>

                </div>

              </div>

            ))

          ) : (

            <p className="no-sale-products">
              No sale products available.
            </p>

          )}

        </div>

      </section>

    </main>
  );
}

export default Salepage;
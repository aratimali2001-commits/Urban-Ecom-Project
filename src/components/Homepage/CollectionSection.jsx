import { useEffect, useState } from "react";
import "./Style/CollectionSection.css";
import one from "../../assets/one.jpg";
function CollectionSection() {

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


  if (products.length === 0) {
    return null;
  }


  const featuredProduct = products[0];
  const sideProducts = products.slice(1, 5);


  return (
    <section className="collection-section">

      {/* Heading */}

      <div className="collection-heading">

        <p className="collection-subtitle">
          Exclusive Women’s Fashion
        </p>

        <h2>
          Stylish Collection for Modern Women
        </h2>

        <p className="collection-description">
          Explore trendy, comfortable, and affordable outfits designed for women
        </p>

      </div>


      {/* Products Layout */}

      <div className="collection-grid">

        {/* Big Product */}

        <div className="featured-product">

          <img
           src={one}
            alt=""
          />

        </div>


        {/* Right Products */}

        <div className="side-products">

          {sideProducts.map((product) => (

            <div
              className="collection-product"
              key={product.id}
            >

              <img
                src={`http://localhost:5000${product.image}`}
                alt={product.name}
              />

              <h3>
                {product.name}
              </h3>

              <div className="collection-price">

                <span className="collection-sale-price">
                  ₹{product.sale_price}
                </span>

                <span className="collection-original-price">
                  ₹{product.price}
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>



    </section>
  );
}

export default CollectionSection;
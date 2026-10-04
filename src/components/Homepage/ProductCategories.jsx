import { useState, useEffect } from "react";
import "./Style/ProductCategories.css";

function ProductCategories() {

  // API मधून आलेले products store करतो
  const [products, setProducts] = useState([]);

  // कोणती category active आहे ते store करतो
  const [activeCategory, setActiveCategory] = useState(
    "Bangles & Bracelets"
  );

  // API मधून products आणणे
  useEffect(() => {

    fetch("http://localhost:5000/api/products")
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Products fetch error:", error);
      });

  }, []);


  // Categories
  const categories = [
    "Bangles & Bracelets",
    "Earrings",
    "Casual Tops",
    "Top & Tunics",
    "Trendy"
  ];


  // Active category चे products filter करणे
  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );


  return (
    <section className="product-categories">

      <h2>
        Shop Women’s Best Sellers
      </h2>

      <p>
        Trending Styles Loved by Women
      </p>


      {/* Category Tabs */}

      <div className="category-tabs">

        {categories.map((category) => (

          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={
              activeCategory === category
                ? "category-tab active"
                : "category-tab"
            }
          >
            {category}
          </button>

        ))}

      </div>


      {/* Products */}

      <div className="products-grid">

        {filteredProducts.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            {/* Product Image */}

            <img
              src={`http://localhost:5000${product.image}`}
              alt={product.name}
            />

            {/* Product Name */}

            <h3>
              {product.name}
            </h3>

            {/* Product Price */}

            <p>
              ₹{product.sale_price}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default ProductCategories;
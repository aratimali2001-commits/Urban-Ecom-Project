import "./Style/CategorySection.css";

import jewellery from "../../assets/jewellery.jpg";
import kurti from "../../assets/kurti.jpg";
import topTunic from "../../assets/top-tunic.jpg";
import trendy from "../../assets/trendy.jpg";

function CategorySection() {

  const categories = [
    {
      name: "Jewellery",
      count: 92,
      image: jewellery,
    },
    {
      name: "Kurti",
      count: 100,
      image: kurti,
    },
    {
      name: "Top & Tunics",
      count: 207,
      image: topTunic,
    },
    {
      name: "Trendy",
      count: 23,
      image: trendy,
    },
  ];

  return (
    <section className="category-section">

      <div className="category-heading">

        <p className="category-subtitle">
          Women’s Fashion Collection
        </p>

        <h2>
          Shop Women’s Clothing by Category
        </h2>

        <p className="category-description">
          Discover stylish and comfortable women’s wear for every occasion
        </p>

      </div>


      <div className="category-grid">

        {categories.map((category) => (

          <div
            className="category-card"
            key={category.name}
          >

            <img
              src={category.image}
              alt={category.name}
            />

            <div className="category-name">

              <span>
                {category.name}
              </span>

              <strong>
                {category.count}
              </strong>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default CategorySection;
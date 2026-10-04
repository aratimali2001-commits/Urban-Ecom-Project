import "./Style/CTA.css";
import { Link } from "react-router-dom";

function CTA() {
  return (
    <section className="cta-section">

      <div className="cta-content">

        <h2>
          Promotion -10% From 2 Units
        </h2>

        <p>
          When buying 2 units the discount is -10%. Make a purchase
          <br />
          and enter the promo code <span>Urban Bharat</span> 10 in the cart
        </p>

        <Link to="/whats-new" className="cta-button">
          VIEW COLLECTION
        </Link>

      </div>

    </section>
  );
}

export default CTA;
import "./Footer.css";

function Footer() {
  const features = [
    {
      icon: "bi-bag-check",
      title: "Secure Payments",
      description: "Shop securely with our trusted payment options",
    },
    {
      icon: "bi-truck",
      title: "Free Delivery",
      description: "Enjoy free delivery on all orders above Rs.1299",
    },
    {
      icon: "bi-bag-check",
      title: "Easy Returns",
      description: "Shop with confidence, enjoy easy returns",
    },
    {
      icon: "bi-shop",
      title: "Top-Notch Support",
      description: "Experience best support, ensuring your satisfaction",
    },
  ];

  return (
    <footer className="footer">

      {/* =================================
          FEATURES
      ================================= */}

      <div className="footer-features">

        {features.map((feature) => (
          <div className="footer-feature" key={feature.title}>

            <i className={`bi ${feature.icon} footer-feature-icon`}></i>

            <div>
              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </div>

          </div>
        ))}

      </div>


      {/* =================================
          FOOTER CONTENT
      ================================= */}

      <div className="footer-content">

        {/* INFORMATION */}

        <div className="footer-column">

          <h3>INFORMATION</h3>

          <a href="#">Privacy Policy</a>

          <a href="#">Shipping Policy</a>

          <a href="#">Terms & Conditions</a>

          <a href="#">Refund And Retrun Policy</a>

          <p className="visitors">
            Website Visitors: <strong>1,067</strong>
          </p>

        </div>


        {/* QUICK LINKS */}

        <div className="footer-column">

          <h3>QUICK LINKS</h3>

          <a href="#">My Account</a>

          <a href="#">Wishlist</a>

          <a href="#">Disclaimers</a>

          <a href="#">Cancellation Policy</a>

        </div>


        {/* CONTACT */}

        <div className="footer-column">

          <h3>CONTACT US</h3>

          <p>
            <strong>Customer Care No:</strong>{" "}
            +91-86689 98753
          </p>

          <p>
            <strong>Email us at:</strong>{" "}
            <a href="mailto:support@urbanbharat.store">
              support@urbanbharat.store
            </a>
          </p>

        </div>


        {/* COMPANY */}

        <div className="footer-column">

          <h3>OUR COMPANY</h3>

          <p>
            <strong>Address:</strong>{" "}
            Shukla Layout, DP Road,
            Khamgaon, Buldhana, 444303
          </p>

        </div>

      </div>


      {/* =================================
          BOTTOM FOOTER
      ================================= */}

      <div className="footer-bottom">

        <div className="footer-copyright">

          Copyright © 2026 Urban Bharat.
        

          {/* <span>
            Highkites Digital Solutions
          </span> */}

        </div>


        {/* PAYMENT METHODS */}

        <div className="payment-methods">

          <div className="payment-logo visa">
            VISA
          </div>

          <div className="payment-logo mastercard">
            <span>●</span> Mastercard
          </div>

          <div className="payment-logo paypal">
            PayPal
          </div>

          <div className="payment-logo amazon">
            amazon
          </div>

          <div className="payment-logo amex">
            AMERICAN
            <br />
            EXPRESS
          </div>

        </div>

      </div>


      {/* =================================
          SOCIAL ICONS
      ================================= */}

      <div className="footer-social">

        <a href="#" aria-label="Facebook">
          <i className="bi bi-facebook"></i>
        </a>

        <a href="#" aria-label="Instagram">
          <i className="bi bi-instagram"></i>
        </a>

      </div>


      {/* =================================
          BACK TO TOP
      ================================= */}

      <button
        className="back-to-top"
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
      >
        ↑
      </button>

    </footer>
  );
}

export default Footer;
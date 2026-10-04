import "./Style/Aboutpage.css";
import PageBanner from "../Common/PageBanner";

import aboutStory from "../../assets/about-story.jpg";

function Aboutpage() {
    return (
        <main className="about-page">

            {/* =========================================
          PAGE BANNER
      ========================================= */}

            <PageBanner
                title="About Us"
                currentPage="About Us"
            />


            {/* =========================================
          OUR STORY
      ========================================= */}

            <section className="about-story">

                <div className="about-story-content">

                    <h2>
                        Our Story – Celebrating Women’s Style & Confidence
                    </h2>

                    <p>
                        Urban Bharat is a modern online destination for women’s fashion
                        and jewellery, created to celebrate elegance, individuality, and
                        confidence. We curate stylish women’s clothing and statement
                        jewellery that blend the latest trends with timeless appeal.
                        From everyday essentials to statement outfits, our collections
                        are designed to make you feel confident and beautiful for every
                        occasion.
                    </p>

                    <p>
                        We focus on quality, comfort, and versatile designs that
                        seamlessly fit into your lifestyle. Our mission is to make
                        women’s fashion affordable, inspiring, and accessible, while
                        offering a smooth and enjoyable online shopping experience with
                        reliable support. At Urban Bharat, shopping is more than just
                        buying—it’s about discovering your personal style and expressing
                        who you truly are.
                    </p>

                </div>


                {/* Story Image */}

                <div className="about-story-image">

                    <img
                        src={aboutStory}
                        alt="Urban Bharat Women's Fashion"
                    />

                </div>

            </section>


            {/* =========================================
          OUR PROMISE
      ========================================= */}

            <section className="about-promise">

                <div className="about-promise-heading">

                    <h2>
                        Our Promise to Every Woman
                    </h2>

                    <p>
                        What inspires us to deliver stylish, comfortable, and empowering
                        fashion for women
                    </p>

                </div>


                {/* =========================================
            PROMISE CARDS
        ========================================= */}

                <div className="promise-grid">

                    {/* Card 1 */}

                    <div className="promise-card">

                        <div className="promise-icon">
                            💎
                        </div>

                        <h3>
                            Premium Quality
                        </h3>

                        <p>
                            Crafted with care using high-quality fabrics
                        </p>

                    </div>


                    {/* Card 2 */}

                    <div className="promise-card">

                        <div className="promise-icon">
                            👗
                        </div>

                        <h3>
                            Trendy Styles
                        </h3>

                        <p>
                            Latest women’s fashion for every occasion
                        </p>

                    </div>


                    {/* Card 3 */}

                    <div className="promise-card">

                        <div className="promise-icon">
                            💖
                        </div>

                        <h3>
                            Confidence First
                        </h3>

                        <p>
                            Designed to make you feel beautiful
                        </p>

                    </div>


                    {/* Card 4 */}

                    <div className="promise-card">

                        <div className="promise-icon">
                            🚚
                        </div>

                        <h3>
                            Fast Delivery
                        </h3>

                        <p>
                            Quick and reliable delivery to your doorstep
                        </p>

                    </div>


                    {/* Card 5 */}

                    <div className="promise-card">

                        <div className="promise-icon">
                            🤝
                        </div>

                        <h3>
                            Customer Support
                        </h3>

                        <p>
                            Always here to help you
                        </p>

                    </div>


                    {/* Card 6 */}

                    <div className="promise-card">

                        <div className="promise-icon">
                            💰
                        </div>

                        <h3>
                            Affordable Fashion
                        </h3>

                        <p>
                            Style that fits your budget
                        </p>

                    </div>

                </div>

            </section>


            {/* =========================================
    OUR VISION
========================================= */}

            <section className="about-vision">

                <div className="about-vision-heading">

                    <h2>
                        Our Vision for Modern Women
                    </h2>

                    <p>
                        To become a trusted women’s fashion brand that empowers confidence
                        through style while delivering a seamless and enjoyable online
                        shopping experience.
                    </p>

                    <p>
                        Driven by passion and creativity, we are committed to delivering
                        meaningful fashion experiences through thoughtfully designed
                        collections, high-quality products, and seamless service. We
                        continuously innovate to redefine how women discover stylish
                        clothing and jewellery online.
                    </p>

                </div>


                <div className="vision-content">

                    {/* LEFT IMAGE */}

                    <div className="vision-image">

                        <img
                            src={aboutStory}
                            alt="Urban Bharat Fashion"
                        />

                    </div>


                    {/* RIGHT CONTENT */}

                    <div className="vision-text">

                        <h2>
                            Why Women Love Urban Bharat
                        </h2>

                        <p>
                            At Urban Bharat, we focus on thoughtfully curated collections
                            that combine style, quality, and comfort. Every piece is selected
                            to ensure it feels elegant, wearable, and perfect for modern
                            women. We bring you trend-forward designs along with a seamless
                            shopping experience that makes discovering fashion effortless
                            and enjoyable.
                        </p>

                    </div>

                </div>

            </section>

       

            

        </main>
    );
}

export default Aboutpage;
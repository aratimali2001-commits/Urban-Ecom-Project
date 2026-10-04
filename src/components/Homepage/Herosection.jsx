import { useEffect, useState } from "react";

import Bannerone from "../../assets/Bannerone.png";
import Bannertwo from "../../assets/Bannertwo.png";
import Bannerthree from "../../assets/Bannerthree.png";
import "./Style/Herosection.css";

function Hero() {

  const banners = [
    Bannerone,
    Bannertwo,
    Bannerthree
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto Slider
  useEffect(() => {

    const interval = setInterval(() => {

      setCurrentSlide((prevSlide) => {
        return (prevSlide + 1) % banners.length;
      });

    }, 6000);

    return () => clearInterval(interval);

  }, []);

  // Next
  const nextSlide = () => {

    setCurrentSlide((prevSlide) => {
      return (prevSlide + 1) % banners.length;
    });

  };

  // Previous
  const prevSlide = () => {

    setCurrentSlide((prevSlide) => {
      return (
        (prevSlide - 1 + banners.length) % banners.length
      );
    });

  };

  return (
    <section className="hero">

      <div className="hero-slider">


        <div
          className="hero-track"
          style={{
            transform: `translateX(-${currentSlide * 100}%)`,
          }}
        >
        </div>


        <img
          src={banners[currentSlide]}
          alt={`Banner ${currentSlide + 1}`}
          className="hero-image"
        />

        {/* Previous Button */}
        <button
          type="button"
          onClick={prevSlide}
          className="hero-prev"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={nextSlide}
          className="hero-next"
        >
          ❯
        </button>

        {/* Dots */}
        {/* <div className="hero-dots">

          {banners.map((_, index) => (

            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              className={
                currentSlide === index
                  ? "dot active"
                  : "dot"
              }
            />

          ))}

        </div> */}

      </div>

    </section>
  );
}

export default Hero;
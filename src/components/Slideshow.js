import React from "react";
import "../css/slideshow.css";

import secondImg from "../images/yeshtery2.jpg";
import thirdImg from "../images/yeshtery3.jpg";
import fourthImg from "../images/yeshtery4.jpg";
import fifthImg from "../images/yeshtery5.jpg";
import sixthImg from "../images/yeshtery6.jpg";

const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FFBB28", "#FFBB28"];
const images = [secondImg, thirdImg, fourthImg, fifthImg, sixthImg];
const delay = 2500;

function Slideshow() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <div className="slideshow">
      <div
        className="slideshowSlider"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {images.map((image, index) => (
          <div className="slide" key={index}>
            <img src={image} alt="product" className="product-img" />
          </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Slideshow;

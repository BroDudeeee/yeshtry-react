import { MinusIcon, PlusIcon } from "@heroicons/react/24/outline";
import "../css/productDetails.css";
import { useState } from "react";

const sizes = ["M", "S", "L", "XL", "2XL"];

const ProductDetails = ({ setCartCount, cartCount }) => {
  const [count, setCount] = useState(1);

  const changeCartCount = () => {
    setCartCount(count + cartCount);
    setCount(1);
  };
  return (
    <section className="product-details-container">
      <div className="price-container">
        <p>649</p>
        <span>EGP</span>
      </div>
      <span className="title">Color: </span> <span>NGHBLK</span>
      <div className="size-container">
        <span className="title">Size: </span>
        <span>M</span>
        <div className="sizes">
          {sizes.map((size, index) => {
            return (
              <p className="single-size" key={index}>
                {size}
              </p>
            );
          })}
        </div>
      </div>
      <div className="quantity">
        <p className="title">Quantity:</p>
        <div className="counter">
          <button
            className="plus-btn count-btn"
            onClick={() => setCount(count + 1)}
          >
            <PlusIcon />
          </button>
          <p>{count}</p>
          <button
            className={`minus-btn count-btn ${count === 1 ? "disable" : ""}`}
            disabled={count === 1}
            onClick={() => setCount(count - 1)}
          >
            <MinusIcon />
          </button>
        </div>
      </div>
      <button className="add-to-cart-btn" onClick={changeCartCount}>
        Add To Cart
      </button>
    </section>
  );
};

export default ProductDetails;

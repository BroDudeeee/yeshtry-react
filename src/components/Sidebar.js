import { XMarkIcon } from "@heroicons/react/24/outline";
import "../css/sidebar.css";

const Sidebar = ({ closeTheSidebar, cartCount, sidebar, setCartCount }) => {
  const closeSidebar = () => {
    closeTheSidebar(false);
  };

  const emptyCart = () => {
    setCartCount(0);
    closeTheSidebar(false);
  };
  return (
    <aside className={`sidebar ${!sidebar && "hide"}`}>
      <XMarkIcon className="x-icon" onClick={closeSidebar} />
      <p>Cart Summary</p>

      {cartCount ? (
        <div>
          <div className="cart-product">
            <img
              src="http://localhost:3000/static/media/yeshtery2.945b2681fddd386ad9c8.jpg"
              alt="product"
            />
            <div>
              <h3>Reebok Workout Ready Graphic T-shirt For Men</h3>
              <div className="product-color item">
                <span>Color:</span>
                <span>NGHBLK</span>
              </div>
              <div className="product-size item">
                <span>Size:</span>
                <span>M</span>
              </div>
              <div className="product-quantity item">
                <span>Quantity:</span>
                <span>{cartCount}</span>
              </div>
              <div className="product-price item">
                <p>649</p>
                <p>EGP</p>
              </div>
            </div>
          </div>
          <div className="total-bill">
            <p>Total:</p>
            <p>{cartCount * 649}</p>
            <p>EGP</p>
          </div>
          <div className="empty-container">
            <button className="empty-cart" onClick={emptyCart}>
              Empty Cart
            </button>
          </div>
        </div>
      ) : (
        <p className="no-item-msg">You have no items yet...</p>
      )}
    </aside>
  );
};

export default Sidebar;

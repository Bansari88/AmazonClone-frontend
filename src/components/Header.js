import "./../css/Header.css";
import ValueContext from "./ValueContext";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  const goToCart = (e) => {
    navigate("/user/cart");
  };

  return (
    <>
      <div>
        <div className="div-header-dashboard-navbar">
          <div className="nav-left div-nav-child">
            <div className="nav-logo">
              <div className="div-amazon-icon"></div>
            </div>
            <div className="div-address-selection">
              <div className="div-address-pin-icon"></div>
              <div className="div-address-selection-text">
                <span className="span-address-selection-line1 span-drop-to-new-line">
                  Hello
                </span>
                <span className="span-address-selection-line2 span-drop-to-new-line">
                  Select your address
                </span>
              </div>
            </div>
          </div>
          <div className="nav-center div-nav-child">
            <div className="div-searchbar">
              <input
                type="text"
                placeholder="Search Amazon"
                className="input-searchbar-text"
              ></input>
            </div>
            <div className="nav-searchbar-go-icon">
              <div className="searchbar-go-button"></div>
            </div>
          </div>
          <div className="nav-right div-nav-child">
            <div className="div-Account-details">
              <div className="div-account-details-span1">
                <span>Hello, Bansari</span>
              </div>
              <div className="div-account-details-span2">
                <span>Account & Lists</span>
              </div>
            </div>
            <div className="div-order-details">
              <div className="div-Account-details">
                <div className="div-account-details-span1">
                  <span>Returns</span>
                </div>
                <div className="div-account-details-span2">
                  <span>& Orders</span>
                </div>
              </div>
            </div>
            <div className="div-cart" onClick={(e) => goToCart(e)}>
              <div className="nav-cart-count-container">
                <span className="nav-cart-item-count span-drop-to-new-line">
                  <ValueContext.Consumer>
                    {(valueContext) => <>{valueContext.value}</>}
                  </ValueContext.Consumer>
                </span>
                <span className="nav-cart-icon span-drop-to-new-line"></span>
              </div>
              <div className="div-cart-label">
                <span>Cart</span>
              </div>
            </div>
          </div>
        </div>
        <div className="nav-category">
          <div className="category-title">Amazon Basics</div>
          <div className="category-title">Books</div>
          <div className="category-title">Music</div>
          <div className="category-title">Amazon Home</div>
          <div className="category-title">Best Sellers</div>
        </div>
      </div>
    </>
  );
};

export default Header;

import "./../css/ProductDetails.css";
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import ValueContext from "./ValueContext";

const ProductDetails = () => {
  const location = useLocation();

  const valueContext = useContext(ValueContext);

  const keys = Object.keys(location.state.productAttributes);

  const [product, setProduct] = useState({
    productId: location.state.productId,
    productName: location.state.productName,
    description: location.state.description,
    category: location.state.category,
    price: location.state.price,
    availability: location.state.availability,
    productAttributes: location.state.productAttributes,
    productImages: location.state.productImages,
    reviewEntities: location.state.reviewEntities,
  });

  const addToCart = (e) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const newCart = [
      ...existingCart,
      { product },
    ];
    localStorage.setItem("cart", JSON.stringify(newCart));
    valueContext.updateValue(newCart.length);
  };

  return (
    <>
      <div className="main-div-product-details">
        <div className="left-img-div">
          <img
            src={product.productImages}
            className="product-img-product-details"
          />
        </div>
        <div className="center-product-details-div">
          <table className="table-product-details">
            <tbody>
              <tr>
                <td className="product-name">{product.productName}</td>
              </tr>
              <tr>
                <td>
                  <div className="div-divider-inner"></div>
                </td>
              </tr>
              <tr>
                <td className="td-product-price">
                  <div className="dollar-sign-price">$</div>
                  <div className="product-price">{product.price}</div>
                </td>
              </tr>
              <tr>
                <td>
                  <div>
                    <table className="table-product-attributes">
                      <tbody>
                        {keys.map((key) => (
                          <tr key={key}>
                            <td>
                              <strong>{key}</strong>{" "}
                            </td>
                            <td className="td-product-attribute-value">
                              {location.state.productAttributes[key]}
                            </td>
                          </tr>
                        ))}{" "}
                      </tbody>
                    </table>
                  </div>
                </td>
              </tr>
              <tr>
                <td>
                  <div className="div-divider-inner"></div>
                </td>
              </tr>
              <tr>
                <td className="td-product-description">
                  <div className="div-about-product-description-title">
                    About this item
                  </div>
                  <div className="div-about-product-description">
                    <ul>
                      <li>{product.description}</li>
                    </ul>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="right-add-to-cart-div">
          <div className="div-cart-product">
            <table className="table-add-to-cart">
              <tbody>
                <tr>
                  <td className="">
                    <strong>Buy new:</strong>
                  </td>
                </tr>
                <tr>
                  <td className="td-product-price">
                    <div className="dollar-sign-price">$</div>
                    <div className="product-price">{product.price}</div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <input
                      className="input-add-to-cart"
                      defaultValue="Add to Cart"
                      readOnly
                      onClick={(e) => addToCart(e)}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

import { useEffect, useState } from "react";

const CartProductList = ({ product, updateCount }) => {
  

  useEffect(() => {
    console.log("called");
    updateCount(product.price);
  }, [product.productId]);

  return (
    <td key={product.productId} className="cart-product-list-td">
      <div className="div-divider-inner cart-divider-length"></div>
      <div className="product-details-cart-div">
        <div className="product-iamge-cart">
          <img
            src={product.productImages}
            className="product-img-dashboard"
            alt=""
          ></img>
        </div>
        <div className="product-details-cart">
          <table>
            <tbody>
              <tr>
                <td className="cart-product-name">{product.productName}</td>
              </tr>
              <tr>
                <td className="cart-stock-details">In Stock</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="product-price-cart">${product.price}</div>
      </div>
    </td>
  );
};

export default CartProductList;

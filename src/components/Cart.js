import "./../css/Cart.css";
import { useEffect, useState } from "react";
import CartProductList from "./CartProductList";

const Cart = () => {
  const [loading, setLoading] = useState(true);
  const [cartTotalItems, setcartTotalItems] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState({
    productId: "",
    productName: "",
    description: "",
    category: "",
    price: "",
    availability: "",
    productAttributes: "",
    productImages: "",
    reviewEntities: "",
  });

  var totalPriceVar = 0;

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (cart.length <= 1) {
      setcartTotalItems(cart.length + " item");
    } else {
      setcartTotalItems(cart.length + " items");
    }
    setLoading(true);
    setProducts(cart);
    setLoading(false);
  }, []);

  function updateCount(currentProductPrice) {
    totalPriceVar = currentProductPrice + totalPriceVar;
    setTotalPrice(totalPriceVar);
  }

  return (
    <>
      <div className="cart-main-div">
        <div className="shopping-cart">
          <div className="shopping-cart-title">
            <h1>Shopping Cart</h1>
            <span className="price-title-cart">price</span>
          </div>
          <div className="cart-product-list">
            <table>
              {!loading && (
                <tbody>
                  {products.map((product) => (
                    <tr key={product.product.productId}>
                      <CartProductList
                        key={product.product.productId}
                        product={product.product}
                        updateCount={updateCount}
                      ></CartProductList>
                    </tr>
                  ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="proceed-to-checkout-box">
          <div className="proceed-to-checkout-inner-box">
            <div>
              <span className="Subtotal-title-cart">
                Subtotal ({cartTotalItems}):
              </span>
              <span className="total-price-cart"> ${totalPrice / 2}</span>
            </div>
            <div>
              <input
                className="input-add-to-cart"
                defaultValue="Proceed to checkout"
                readOnly
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;

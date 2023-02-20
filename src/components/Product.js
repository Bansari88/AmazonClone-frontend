import "./../css/DashBoard.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
  const navigate = useNavigate();

  const goToProductDetails = (e) => {
    e.preventDefault();
    navigate("/user/ProductDetails", {state:product});
  };

  return (
    <td key={product.productId}>
      <img
        src={product.productImages}
        className="product-img-dashboard"
        alt=""
        onClick={(e) => goToProductDetails(e)}
      ></img>
    </td>
  );
};

export default Product;

import "./../css/DashBoard.css";
import productImg from "./../images/product_images/819697MwKmL._AC_SY200_.jpg";
import ProductCatalogService from "../service/ProductCatalogService";
import { useState, useEffect } from "react";
import Product from "./Product";

const DashBoard = () => {
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await ProductCatalogService.listAllProducts();
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="div-body">
        <div className="div-carousel-bg">
          <div className="div-image-carosel">
            <div className="image-carousel-left">
              <div className="left-arrow-top-image"></div>
            </div>
            <div className="image-carousel-center">
              <div className="image-carousel-main-image"></div>
            </div>
            <div className="image-carousel-right">
              <div className="right-arrow-top-image"></div>
            </div>
          </div>
          <div className="bg-gradient">
            <div className="product-display-outer-div">
              <div className="product-display-inner-div">
                <h2>Frequently purchased in Electronics</h2>
                <table className="product-table">
                  <tbody>
                    {!loading && (
                      <tr>
                        {products.map((product) => (
                          <Product key={product.productId} product={product} />
                        ))}
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="product-display-outer-div">
            <div className="product-display-inner-div">
              <h2>Frequently purchased in Electronics</h2>
              <table className="product-table">
                <tbody>
                  {!loading && (
                    <tr>
                      {products.map((product) => (
                        <Product key={product.productId} product={product} />
                      ))}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
          <div className="product-display-outer-div">
            <div className="product-display-inner-div">
              <h2>Frequently purchased in Electronics</h2>
              <table className="product-table">
                <tbody>
                  {!loading && (
                    <tr>
                      {products.map((product) => (
                        <Product key={product.productId} product={product} />
                      ))}
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashBoard;

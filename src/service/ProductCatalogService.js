import axios from "axios";

const AMAZON_CREATE_ACCOUNT_API_URL = "http://localhost:8081/amazon/v1";

class ProductCatalogService {
  listAllProducts() {
    return axios.get(AMAZON_CREATE_ACCOUNT_API_URL + "/getAllProducts");
  }
}

export default new ProductCatalogService();

import axios from "axios";

const AMAZON_CREATE_ACCOUNT_API_URL = "http://localhost:8080/amazon/v1";

class UserMetaDataService {
  createUserAccount(user) {
    return axios.post(AMAZON_CREATE_ACCOUNT_API_URL + "/createuser", user);
  }

  verifyUserAccount(user) {
    return axios.post(AMAZON_CREATE_ACCOUNT_API_URL + "/verifyuser", user);
  }

  logIn(user) {
    return axios.post(AMAZON_CREATE_ACCOUNT_API_URL + "/login", user);
  }
}

export default new UserMetaDataService();

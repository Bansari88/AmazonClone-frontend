import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyEmailAddress from "./components/VerifyEmailAddress";
import CreateUserAccount from "./components/CreateUserAccount";
import UserAuthentication from "./components/UserAuthentication";
import DashBoard from "./components/DashBoard";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import ProductDetails from "./components/ProductDetails";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter className="App">
      <Routes>
        <Route path="/login" element={<UserAuthentication />}></Route>
        <Route path="/home" element={<DashBoard />}></Route>
        <Route path="/" element={<CreateUserAccount />}></Route>
        <Route
          path="/verifyEmailAddress"
          element={<VerifyEmailAddress />}
        ></Route>
        <Route path="/user" element={<AuthenticatedRoute />}>
          <Route path="dashboard" element={<DashBoard />}></Route>
          <Route path="productDetails" element={<ProductDetails />}></Route>
          <Route path="cart" element={<Cart />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

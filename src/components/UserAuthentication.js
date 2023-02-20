import { useNavigate } from "react-router-dom";
import UserMetaDataService from "../service/UserMetaDataService";
import { useState } from "react";
import { doLogin } from "./../auth/LoginAuth";

const UserAuthentication = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    emailId: "",
    password: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const login = (e) => {
    e.preventDefault();
    UserMetaDataService.logIn(user).then((response) => {
      doLogin(response);
      navigate("/user/dashboard");
    });
  };

  return (
    <div className="main-div">
      <div className="amazon-logo"></div>
      <div className="create-user-form-outer-div">
        <div className="create-user-form-inner-div">
          <h1 className="a-spacing-small">Sign in</h1>
          <div className="div-input-box-section-box">
            <label>Email</label>
            <input
              type="email"
              id="email_id"
              name="emailId"
              value={user.emailId}
              onChange={(e) => handleChange(e)}
              className="input-animation input-text"
            ></input>
          </div>
          <div className="div-input-box-section-box">
            <label>Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={(e) => handleChange(e)}
              className="input-animation input-text"
            ></input>
          </div>
          <div className="div-create_user_button">
            <button
              type="submit"
              className="btn-create-user"
              onClick={(e) => login(e)}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
      <div className="div-divider-outer">
        <div className="div-divider-inner">
          <h5>New to Amazon?</h5>
        </div>
        <div className="div-create_user_button">
          <button
            type="submit"
            className="btn-go-to-create-user"
            onClick={(e) => navigate("/")}
          >
            Create your Amazon account
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAuthentication;

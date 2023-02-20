import "./../css/VerifyEmailAddress.css";
import { useLocation } from "react-router-dom";
import UserMetaDataService from "../service/UserMetaDataService";
import { useState } from "react";

const VerifyEmailAddress = () => {
  const location = useLocation();

  const [user, setUser] = useState({
    userId: location.state.userId,
    userName: location.state.userName,
    emailId: location.state.emailId,
    password: location.state.password,
    verificationCode: "",
    enabled: location.state.enabled,
  });

  const createUserAccount = (e) => {
    e.preventDefault();
    UserMetaDataService.verifyUserAccount(user);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="main-div">
      <div className="amazon-logo"></div>
      <div className="create-user-form-outer-div">
        <div className="create-user-form-inner-div">
          <h1 className="a-spacing-small">Verify email address</h1>
          <div className="div-verify-email-title-note">
            To verify your email, we've sent a One Time Password (OTP) to{" "}
            {user.emailId}
          </div>
          <div className="div-input-box-section-box">
            <label>Enter OTP</label>
            <input
              type="number"
              id="verificationCode"
              name="verificationCode"
              value={user.verificationCode}
              onChange={(e) => handleChange(e)}
              className="input-animation input-text"
            ></input>
          </div>
          <div className="div-create_user_button">
            <button
              type="submit"
              className="btn-create-user"
              onClick={(e) => createUserAccount(e)}
            >
              Create your Amazon account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmailAddress;

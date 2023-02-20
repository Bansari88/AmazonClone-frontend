import "./../css/CreateUserAccount.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UserMetaDataService from "../service/UserMetaDataService";

const CreateUserAccount = () => {
  const [user, setUser] = useState({
    userId: "",
    userName: "",
    emailId: "",
    password: "",
    verificationCode: "",
    enabled: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    setUser({ ...user, [e.target.name]: value });
  };

  const continueToVerifyAddress = (e) => {
    e.preventDefault();
    UserMetaDataService.createUserAccount(user).then((response) => {navigate("/verifyEmailAddress", {state:response.data});});
  };

  return (
    <div className="main-div">
      <div className="amazon-logo"></div>
      <div>
        <div className="create-user-form-outer-div">
          <div className="create-user-form-inner-div">
            <h1 className="a-spacing-small">Create account</h1>
            <div className="div-input-box-section-box">
              <label>Your name</label>
              <input
                type="text"
                id="user_name"
                placeholder="First and last name"
                name="userName"
                value={user.userName}
                onChange={(e) => handleChange(e)}
                className="input-animation input-text"
              ></input>
            </div>
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
                placeholder="At least 6 characters"
                name="password"
                value={user.password}
                onChange={(e) => handleChange(e)}
                className="input-animation input-text"
              ></input>
              <div className="div-password-note">
                <div className="icon-alert"></div>
                <div className="password-note">
                  Passwords must be at least 6 characters.
                </div>
              </div>
            </div>
            <div className="div-input-box-section-box">
              <label>Re-enter password</label>
              <input
                type="password"
                id="re-enter-password"
                name="reEnterPassword"
                className="input-animation input-text"
              ></input>
            </div>
            <div className="div-create_user_button">
              <button type="submit" className="btn-create-user" onClick={(e) => continueToVerifyAddress(e)}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserAccount;

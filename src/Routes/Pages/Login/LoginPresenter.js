import React from "react";
import "./login.css";

const LoginPresenter = () => {
  /* Router */
  const url =
    "http://127.0.0.1:30000/oauth2.0/authorize?response_type=code&redirect_uri=http://localhost:30002/main&client_id=MNdF0QeOt8hTo8X8vWDq&state=CA978112CA1BBDCAFAC231B39A23DC4DA786EFF8147C4E72B9807785AFEE48BB";
  /* State */

  const params = new URLSearchParams(window.location.search);
  console.log(params);
  /* Hooks */
  /* Functions */
  const actionLogin = () => {
    window.open(url);
  };
  /* Render */
  return (
    <div className="login-background">
      <div className="login-container">
        <h2>Login</h2>
        <div className="login-form-container">
          <span>아이디</span>
          <input type="text" />
          <span>패스워드</span>
          <input type="password" />
          <button>Login</button>
          <button onClick={actionLogin}>CityDataHub Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPresenter;

/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";

const TOKEN_URL = "http://127.0.0.1:30000/oauth2.0/token";

const MainPresenter = () => {
  const current = window.location.search;
  const search = current.split("?")[1];
  const params = new URLSearchParams(search);
  const code = params.get("code");
  const state = params.get("state");
  const [data, setData] = useState({});

  console.log(code);
  console.log(state);

  useEffect(() => {
    if (!search) {
      return;
    }
    handleToken();
  }, [search]);

  const handleToken = async () => {
    const { status, data } = await axios.post(TOKEN_URL, {
      grant_type: "authorization_code",
      code: code,
      redirect_uri: "http://localhost:30002/main",
      client_id: "vCJhhIJVVStfoBWMlAYH",
      client_secret: "jPgR4A4C6evXLJMClW9EwpI60qFoMJP9",
    });
    if (status === 200) {
      console.log(data);
      setData(data);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h3>Application Login Test</h3>
      <div style={{ width: "50%", marginBottom: 10 }}>
        Access Token: {data.access_token}
      </div>
      <div style={{ width: "50%" }}>Refresh Token: {data.refresh_token}</div>
      <div style={{ width: "50%" }}>Token_Type: {data.token_type}</div>
    </div>
  );
};

export default MainPresenter;

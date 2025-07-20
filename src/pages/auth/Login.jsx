import React from "react";
import Forms from "./components/Forms";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = async (data) => {
    try {
      const response = await axios.post(baseURL + `/Login`, data);
      // console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);

        navigate("/");
      } else {
        alert("login failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };

  return <Forms type={"login"} onSubmit={handleLogin} />;
};

export default Login;

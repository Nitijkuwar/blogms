import React from "react";
import Forms from "./components/Forms";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../config";

const Register = () => {
  const navigate = useNavigate();
  const handleRegister = async (data) => {
    try {
      const response = await axios.post(`${baseURL}/register`, data);
      if (response.status === 201) {
        navigate("/login");
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      alert(error?.response?.data?.message);
    }
  };
  return <Forms type={"register"} onSubmit={handleRegister} />;
};

export default Register;

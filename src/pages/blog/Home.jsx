import React, { useEffect, useState } from "react";
import Layout from "./../../components/layout/Layout";
import Card from "./components/Card";
import { baseURL } from "../../config";
import axios from "axios";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const fetchBlogs = async () => {
    const response = await axios.get(`${baseURL}/blog`);
    if (response.status === 200) {
      setBlogs(response.data.data);
    }
  };
  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <Layout>
      <div className="flex flex-wrap justify-center my-10">
        {blogs.length > 0 &&
          blogs.map((blog, index) => {
            return <Card blog={blog} key={index} />;
          })}
      </div>
    </Layout>
  );
};

export default Home;

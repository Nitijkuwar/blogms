import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { baseURL } from "../../config";
import Layout from "../../components/layout/Layout";

const EditBlogs = () => {
  const [blog, setBlog] = useState({
    title: "",
    description: "",
    subtitle: "",
    image: null,
    category: "",
  });
  const navigate = useNavigate();
  const { id } = useParams();

  const editBlog = async (e) => {
    e.preventDefault();
    const response = await axios.patch(`${baseURL}/blog/${id}`, blog, {
      headers: {
        "Content-Type": "multipart/form-data",
        "Authorization ": localStorage.getItem("token"),
      },
    });
    if (response.status === 200) {
      navigate("/blog/" + id);
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlog({
      ...blog,
      [name]: name === "image" ? e.target.files[0] : value,
    });
  };
  const fetchBlog = async () => {
    const response = await axios.get(`${baseURL}/blog/${id}`);
    if (response.status === 200) {
      setBlog(response.data.data);
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <>
      <Layout>
        <form onSubmit={editBlog}>
          <div className="max-w-2xl mx-auto p-4 bg-[#f2f2f2]">
            <h2 className="text-center text-4xl mt-5 font-bold">Edit Blog</h2>{" "}
            <br />
            <div className="mb-6">
              <label
                htmlFor="title"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                Title
              </label>
              <input
                value={blog.title}
                type="text"
                id="title"
                name="title"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subtitle"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                Subtitle
              </label>
              <input
                value={blog.subtitle}
                type="text"
                id="subtitle"
                name="subtitle"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="category"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                Category
              </label>
              <input
                type="text"
                value={blog.category}
                id="category"
                name="category"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                Description
              </label>
              <textarea
                id="description"
                value={blog.description}
                name="description"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
                rows="6"
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <div className="mb-6">
              <label
                htmlFor="image"
                className="block text-lg font-medium text-gray-800 mb-1"
              >
                Image
              </label>
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleChange}
                className="w-full"
              />
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none"
              >
                Submit
              </button>
            </div>
          </div>
        </form>{" "}
      </Layout>
    </>
  );
};

export default EditBlogs;

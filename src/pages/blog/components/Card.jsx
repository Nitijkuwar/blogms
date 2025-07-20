import React, { useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ blog }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="flex flex-wrap w-[95%] m-auto px-4 py-6 ">
        <div className="w-[300px] rounded overflow-hidden shadow-lg bg-white">
          <img
            className="w-full h-40 object-cover"
            src={blog.imageUrl}
            alt={blog.title}
          />
          <div className="px-4 py-3">
            <h2 className="font-bold text-xl mb-2">{blog.title}</h2>
            <p className="inline-block text-sm font-semibold text-gray-700">
              {blog.description}
            </p>
          </div>
          <div className="px-4 py-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs font-semibold text-gray-700">
              {blog.category}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;

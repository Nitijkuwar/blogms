import React from "react";
import useCounter from "../../hooks/useCounter";
import useInput from "../../hooks/useinput";
import useFetch from "../../hooks/useFetch";

const Hook = () => {
  const { count, increment, decrement } = useCounter(0);
  const { value, onChange } = useInput("");
  const { data, loading, error } = useFetch(
    "https://react30.onrender.com/api/user/blog"
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>error...</p>;

  return (
    <div>
      <p>Count:{count}</p>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Sub</button>
      <div>
        <input
          className="border p-1 "
          type="text"
          onChange={onChange}
          value={value}
        />
        <p>{value}</p>
      </div>

      <ul>
        {data.map((post) => {
          return <li key={post._id}>{post.title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Hook;

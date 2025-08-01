import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/blog/Home";
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import AddBlog from "./pages/blog/AddBlog";
import EditBlog from "./pages/blog/EditBlog";
import SingleBlog from "./pages/blog/SingleBlog";
import Parent from "./pages/useCallback/Parent";
import Hook from "./pages/hookPages/Hook";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blog/add" element={<AddBlog />} />
        <Route path="/blog/edit/:id" element={<EditBlog />} />
        <Route path="/blog/:id" element={<SingleBlog />} />
        <Route path="/useCallback" element={<Parent />} />
        <Route path="/customhook" element={<Hook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

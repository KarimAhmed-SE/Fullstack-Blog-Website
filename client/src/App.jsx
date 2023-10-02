import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PostDetails from "./pages/PostDetails";
import { UserContextProvider } from "./userContext";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/PostDetails/:id" element={<PostDetails />} />
        <Route path="/CreatePost" element={<CreatePost />} />
        <Route path="/EditPost/:id" element={<EditPost />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;

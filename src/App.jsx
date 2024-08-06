import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddPost from "./pages/add-post/add-post";
import PostDetails from "./pages/post-details";
import PostsList from "./pages/posts-list";
import NoPage from "./pages/no-page";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AddPost />} />
        <Route path="add-post" element={<AddPost />} />
        <Route path="post/:postid" element={<PostDetails />} />
        <Route path="posts-list" element={<PostsList />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

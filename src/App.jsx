import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import PostListPage from "./pages/PostListPage.jsx";
import PostDetailPage from "./pages/PostDetailPage.jsx";
import PostCreatePage from "./pages/PostCreatePage.jsx";
import PostEditPage from "./pages/PostEditPage.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/posts/novo" element={<PostCreatePage />} />
        <Route path="/posts/:id/editar" element={<PostEditPage />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  );
}

export default App;

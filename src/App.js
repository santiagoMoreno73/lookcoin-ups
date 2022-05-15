// route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

// context
import { AuthProvider } from "./context/auth.provider";

// pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Error404 from "./pages/Error404";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

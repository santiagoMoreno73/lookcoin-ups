// route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

// context
import { AuthProvider } from "./context/auth.provider";

import Login from "./components/Login";
import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;

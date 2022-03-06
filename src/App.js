// route
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout/Layout";

import FormAditionalData from "./components/Forms/FormAditionalData";
import FormRegister from "./components/Forms/FormRegister";
import FormSignIn from "./components/Forms/FormSignIn";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<FormSignIn />} />
          <Route path="/register" element={<FormRegister />} />
          <Route path="/register/aditionalData" element={<FormAditionalData />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

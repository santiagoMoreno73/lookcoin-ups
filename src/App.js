// route
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout/Layout";

import FormRegister from "./components/Forms/FormRegister";
import FormSignIn from "./components/Forms/FormSignIn";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<FormSignIn />} />
          <Route path="/register" element={<FormRegister />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

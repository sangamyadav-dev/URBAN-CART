import "./App.css";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import CustomerRouter from "./Router/CustomerRouter";
import AdminRouters from "./Router/AdminRouters";

const App = () => (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CustomerRouter />} />
        <Route path="/Admin/*" element={<AdminRouters />} />
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

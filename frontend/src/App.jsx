import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import OrdersPage from "./pages/OrdersPage";
import SettingPage from "./pages/SettingPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <div
          className="content"
          style={{ marginTop: "100px", marginLeft: "250px", minHeight: "90vh" }}
        >
          <Sidebar />
          <div>
            <Routes>
              <Route exact path="/" element={<DashboardPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/settings" element={<SettingPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

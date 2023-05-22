import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import OrdersPage from "./pages/OrdersPage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <div className="content" style={{ marginLeft: "25 0px" }}>
          <Header />
          <div>
            <Routes>
              <Route exact path="/" element={<DashboardPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

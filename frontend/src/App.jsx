import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import Sidebar from "./components/Sidebar/Sidebar";
import Header from "./components/Header";
import OrdersPage from "./pages/OrdersPage";
import SettingPage from "./pages/SettingPage";
import ReceiptPage from "./pages/ReceiptPage";
import BookEntryPage from "./pages/BookEntryPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
let currentUser = true;
function App() {
  return currentUser ? (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  ) : (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <div>
        <Header />
        <div
          className="content"
          style={{
            marginTop: "100px",
            marginLeft: "250px",
            minHeight: "90vh",
          }}
        >
          <Sidebar />
          <div>
            <Routes>
              <Route exact path="/" element={<DashboardPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/orders" element={<OrdersPage />} />
              <Route path="/settings" element={<SettingPage />} />
              <Route path="/receipts" element={<ReceiptPage />} />
              <Route path="/book-entries" element={<BookEntryPage />} />
              <Route path="/users" element={<UserPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

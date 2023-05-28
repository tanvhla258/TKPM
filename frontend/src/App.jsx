import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import OrdersPage from "./pages/OrdersPage";
import SettingPage from "./pages/SettingPage";
import ReceiptPage from "./pages/ReceiptPage";
import BookEntryPage from "./pages/BookEntryPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import TopAndSide from "./components/TopAndSide";
import { Box } from "@mui/material";
let currentUser = true;
function App() {
  return (
    <Box>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
        {!currentUser || (
          <Box sx={{ display: "flex" }}>
            <TopAndSide />
            <Box marginTop={9} component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route exact path="/" element={<DashboardPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/orders" element={<OrdersPage />} />
                <Route path="/settings" element={<SettingPage />} />
                <Route path="/receipts" element={<ReceiptPage />} />
                <Route path="/book-entries" element={<BookEntryPage />} />
                <Route path="/users" element={<UserPage />} />
              </Routes>
            </Box>
          </Box>
        )}
      </BrowserRouter>
    </Box>
  );
}

export default App;

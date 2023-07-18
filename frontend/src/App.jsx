import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/DashboardPage";
import ProductsPage from "./pages/ProductsPage";
import ReceiptPage from "./pages/ReceiptPage";
import BookEntryPage from "./pages/BookEntryPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import TopAndSide from "./components/TopAndSide";
import { Box } from "@mui/material";
import InvoicePage from "./pages/InvoicePage";
import RegulationPage from "./pages/RegulationPage";
import StartPage from "./pages/StartPage";
import AuthPage from "./pages/AuthPage";

import SignUpPage from "./pages/SignupPage";
import ReportPage from "./pages/ReportPage";
import { useSelector } from "react-redux";
import { adminActions } from "./reducers/adminReducer";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
function App() {
  const admin = useSelector((state) => state.admin.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminActions.getAdmin());
  }, [dispatch]);
  console.log(admin);
  return (
    <Box position={"relative"}>
      <BrowserRouter>
        {!localStorage.getItem("currentUser") ? (
          <Box>
            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/" element={<StartPage />} />
                <Route path="/signup" element={<SignUpPage />} />
                <Route path="/*" element={<AuthPage />} />
              </Routes>
            </Box>
          </Box>
        ) : (
          <Box position={"absolute"} sx={{ display: "flex" }}>
            <TopAndSide />
            <Box marginTop={9} component="main" sx={{ flexGrow: 1, p: 3 }}>
              <Routes>
                <Route exact path="/" element={<DashboardPage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path="/invoices" element={<InvoicePage />} />
                <Route path="/regulations" element={<RegulationPage />} />
                <Route path="/receipts" element={<ReceiptPage />} />
                <Route path="/book-entries" element={<BookEntryPage />} />
                <Route path="/users" element={<UserPage />} />
                <Route path="/reports" element={<ReportPage />} />
              </Routes>
            </Box>
          </Box>
        )}
      </BrowserRouter>
    </Box>
  );
}

export default App;

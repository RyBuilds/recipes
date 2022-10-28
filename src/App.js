import { Routes, Route } from "react-router-dom";

import { AuthContextProvider } from "./context/AuthContext";
import MainNavigation from "./components/layout/MainNavigation";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import EmailPage from "./pages/EmailPage";
import AccountPage from "./pages/AccountPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <div>
      <AuthContextProvider>
        <MainNavigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route
            path="/account"
            element={
              <ProtectedRoute>
                <AccountPage />
              </ProtectedRoute>
            }
          />
          <Route path="/signin/email" element={<EmailPage />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;

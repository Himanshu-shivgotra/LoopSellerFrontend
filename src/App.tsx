import { useEffect, useState } from 'react';
import { Route, Routes, useLocation, Navigate } from 'react-router-dom';

import Loader from './common/Loader';
import SignIn from './pages/Authentication/SignIn';
import SignUp from './pages/Authentication/SignUp';
import ECommerce from './pages/Dashboard/ECommerce';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import DefaultLayout from './layout/DefaultLayout';
import ProtectedRoute from './common/protectedRoutes';
import AddNewProduct from './pages/Product/AddNewProduct';
import ProductList from "./pages/Product/ProductList"
import LandingPage from './pages/LandingPage/LandingPage';

function App() {
  const [loading, setLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Simulate a loading state while checking token
    const token = localStorage.getItem('authToken');
    setIsAuthenticated(!!token); // Set authentication status based on the token
    setLoading(false); // Stop loading after checking
  }, []);

  if (loading) {
    return <Loader />; // Show a loader while authentication status is being checked
  }

  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/auth/signin"
        element={!isAuthenticated ? <SignIn /> : <Navigate to="/dashboard" replace />}
      />
      <Route
        path="/auth/signup"
        element={!isAuthenticated ? <SignUp /> : <Navigate to="/dashboard" replace />}
      />

      <Route
        path="/"
        element={!isAuthenticated ? <LandingPage /> : <Navigate to="/dashboard" replace />}
      />
      {/* Redirect root to dashboard or signin based on authentication */}
      <Route
        path="/"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth/signin"} replace />}
      />

      {/* Protected Routes */}
      <Route
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <DefaultLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/dashboard" element={<ECommerce />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/add-new-product" element={<AddNewProduct />} />
        <Route path="/product-list" element={<ProductList />} />
      </Route>

      {/* Catch-all for undefined routes */}
      <Route
        path="*"
        element={<Navigate to={isAuthenticated ? "/dashboard" : "/auth/signin"} replace />}
      />
    </Routes>
  );
}

export default App;

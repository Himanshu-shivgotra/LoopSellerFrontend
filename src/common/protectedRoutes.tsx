import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

// Define the type for the component's props
const ProtectedRoute: React.FC<{ isAuthenticated: boolean; children?: JSX.Element }> = ({
  isAuthenticated,
  children,
}) => {
  if (!isAuthenticated) {
    return <Navigate to="/auth/signin" replace />;
  }

  // Render the passed children or an `Outlet` for nested routes
  return children ? children : <Outlet />;
};

export default ProtectedRoute;

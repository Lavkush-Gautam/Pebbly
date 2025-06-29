
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Provider/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) return <div className="text-center">Loading...</div>;

  if (!user) return <Navigate to="/signin" replace />;

  return children;
};

export default ProtectedRoute;

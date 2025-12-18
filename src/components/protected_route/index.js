import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const publicRoutes = ['/login', '/register'];

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading) {
      const isPublicRoute = publicRoutes.includes(router.pathname);

      if (!isAuthenticated && !isPublicRoute) {
        router.push('/login');
      } else if (isAuthenticated && isPublicRoute) {
        router.push('/');
      }
    }
  }, [isAuthenticated, loading, router.pathname]);

  if (loading) return <div>Carregando autenticação...</div>;

  const isPublicRoute = publicRoutes.includes(router.pathname);
  if (!isAuthenticated && !isPublicRoute) return null;

  return children;
}

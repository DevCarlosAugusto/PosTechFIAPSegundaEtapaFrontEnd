import Layout from '../components/Layout';
import GlobalStyle from '../styles/GlobalStyle';

import { AuthProvider } from '../contexts/AuthContext';
import ProtectedRoute from '../components/protected_route/index.js';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />

      <AuthProvider>
        <Layout>
          <ProtectedRoute>
            <Component {...pageProps} />
          </ProtectedRoute>
        </Layout>
      </AuthProvider>
    </>
  );
}

export default MyApp;

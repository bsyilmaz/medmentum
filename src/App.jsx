import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import { AuthProvider } from './contexts/AuthContext'
import Layout from './components/layout/Layout'
import ProtectedRoute from './components/admin/ProtectedRoute'
import ScrollToTop from './components/ScrollToTop'

// Public pages
import Home from './pages/Home'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import MakoDetail from './pages/MakoDetail'
import Blog from './pages/Blog'
import BlogDetail from './pages/BlogDetail'
import Team from './pages/Team'
import Contact from './pages/Contact'

// Admin pages
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import BlogManagement from './pages/admin/BlogManagement'
import UpdateManagement from './pages/admin/UpdateManagement'

function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
        <ScrollToTop />
        <Routes>
          {/* Public routes with layout */}
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/products" element={<Layout><Products /></Layout>} />
          <Route path="/products/mako" element={<Layout><MakoDetail /></Layout>} />
          <Route path="/products/:id" element={<Layout><ProductDetail /></Layout>} />
          <Route path="/blog" element={<Layout><Blog /></Layout>} />
          <Route path="/blog/:id" element={<Layout><BlogDetail /></Layout>} />
          <Route path="/team" element={<Layout><Team /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />

          {/* Admin routes without main layout */}
          <Route path="/admin/login" element={<Login />} />
          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/blogs"
            element={
              <ProtectedRoute>
                <BlogManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/updates"
            element={
              <ProtectedRoute>
                <UpdateManagement />
              </ProtectedRoute>
            }
          />
        </Routes>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  )
}

export default App

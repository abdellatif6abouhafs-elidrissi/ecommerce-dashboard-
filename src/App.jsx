import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Admin Components
import Layout from './components/Layout/Layout';
import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';

// Store Components
import StoreLayout from './components/Store/StoreLayout';
import Home from './pages/Store/Home';
import Shop from './pages/Store/Shop';
import ProductDetail from './pages/Store/ProductDetail';
import Cart from './pages/Store/Cart';
import Checkout from './pages/Store/Checkout';
import Login from './pages/Store/Login';
import Register from './pages/Store/Register';
import Profile from './pages/Store/Profile';
import OrderHistory from './pages/Store/OrderHistory';

function App() {
  return (
    <Router>
      <Routes>
        {/* Store Routes */}
        <Route path="/" element={<StoreLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="orders" element={<OrderHistory />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" element={<Products />} />
          <Route path="orders" element={<Orders />} />
          <Route path="customers" element={<Customers />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

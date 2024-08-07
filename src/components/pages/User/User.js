import { Routes, Route, Link, Outlet } from 'react-router-dom';
import UserProfile from './UserProfile';
import UserOrders from './UserOrders';

function User() {
  return (
    <div>
      <h1>User Page</h1>
      <nav>
        <Link to="profile">Profile</Link> | <Link to="orders">Orders</Link>
      </nav>
      <Routes>
        <Route path="profile" element={<UserProfile />} />
        <Route path="orders" element={<UserOrders />} />
      </Routes>
      <Outlet />
    </div>
  );
}

export default User;
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';  // Make sure to add a CSS file for styling

function Dashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Welcome to Your Admin Dashboard</h1>
        <nav className="dashboard-nav">
          <ul>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/admin/users">Manage Users</Link></li> {/* Admin Link */}
            <li><Link to="/admin/stats">System Stats</Link></li> {/* Admin Link */}
          </ul>
        </nav>
      </header>

      <section className="dashboard-content">
        {/* Recent Activities Card */}
        <div className="dashboard-card">
          <h2>Recent Activities</h2>
          <p>Here you can track your recent activities and updates.</p>
        </div>

        {/* Your Projects Card */}
        <div className="dashboard-card">
          <h2>Your Projects</h2>
          <p>Manage and view the status of your ongoing projects.</p>
        </div>

        {/* Notifications Card */}
        <div className="dashboard-card">
          <h2>Notifications</h2>
          <p>Check your latest notifications here.</p>
        </div>

        {/* Admin-only Cards */}
        <div className="dashboard-card admin-card">
          <h2>Admin Dashboard</h2>
          <p>As an admin, you have access to advanced features such as managing users and viewing system stats.</p>
          <div className="admin-links">
            <Link to="/admin/users" className="admin-link">Manage Users</Link>
            <Link to="/admin/stats" className="admin-link">View System Stats</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;

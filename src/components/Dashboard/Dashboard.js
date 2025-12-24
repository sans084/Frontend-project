import React, { useState } from "react";
import "./Dashboard.css";

function Dashboard() {
  const [filter, setFilter] = useState("Today");

  const statsData = {
    Today: {
      users: 25,
      products: 40,
      orders: 12,
      revenue: 1200,
    },
    Yesterday: {
      users: 18,
      products: 38,
      orders: 9,
      revenue: 900,
    },
    Weekly: {
      users: 120,
      products: 80,
      orders: 60,
      revenue: 6200,
    },
    Monthly: {
      users: 450,
      products: 200,
      orders: 220,
      revenue: 25000,
    },
  };

  const stats = statsData[filter];

  return (
    <div className="container">
      <h2>Analytics Dashboard</h2>
      <div className="dashboard-cards">
        <div className="card"></div>
        <div className="card"></div>
      </div>

      <select value={filter} onChange={(e) => setFilter(e.target.value)}>
        <option>Today</option>
        <option>Yesterday</option>
        <option>Weekly</option>
        <option>Monthly</option>
      </select>

      <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
        <div>
          <h4>Total Users</h4>
          <p>{stats.users}</p>
        </div>

        <div>
          <h4>Total Products</h4>
          <p>{stats.products}</p>
        </div>

        <div>
          <h4>Total Orders</h4>
          <p>{stats.orders}</p>
        </div>

        <div>
          <h4>Total Revenue</h4>
          <p>₹ {stats.revenue}</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

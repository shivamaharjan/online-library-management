import React from 'react'
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <div className="bg-dark text-light sidebar">
      <div className="text-center mt-4">Welcome</div>
      <hr />
      <div>
        <ul className="list-unstyled ms-5 me-5">
          <Link to="/history" className="nav-link">
            <li>History</li>
          </Link>
          <Link to="/dashboard" className="nav-link">
            <li>Dashboard</li>
          </Link>
          <Link to="/books" className="nav-link">
            <li>Books</li>
          </Link>

          <Link to="/clients" className="nav-link">
            <li>Clients</li>
          </Link>
          <Link to="/history" className="nav-link">
            <li>History</li>
          </Link>
          <Link to="/admin-signup" className="nav-link"><li>Admin Signup</li></Link>
          
        </ul>
      </div>
    </div>
  );
}

export default SideBar
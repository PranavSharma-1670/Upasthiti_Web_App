import React from 'react';
const AdminNavbar = () => {
    return (
       <nav className="navbar navbar-dark bg-dark px-3 shadow-sm">
          <span className="navbar-brand mb-0 h1">Admin Panel</span>
           <div className="ms-auto"><button className="btn btn-outline-light btn-sm">Logout</button></div>
       </nav>
    );
};
export default AdminNavbar;
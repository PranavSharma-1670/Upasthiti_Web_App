import React from 'react';
const AdminNavbar = ({ isSidebarOpen, toggleSidebar }) => {
    return (
       <nav className="navbar navbar-dark bg-dark px-3 shadow-sm">
            {!isSidebarOpen && (
                <button className="btn btn-outline-light me-2" onClick={toggleSidebar}>
                    ☰
                </button>
            )}
            <span className="navbar-brand mb-0 h1">Admin Panel</span>
            <div className="ms-auto"><button className="btn btn-outline-light btn-sm">Logout</button></div>
       </nav>
    );
};
export default AdminNavbar;
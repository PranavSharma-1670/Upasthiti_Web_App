import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { ExcelDataProvider } from '../features/admin/context/ExcelDataContext';
import AdminSidebar from '../features/admin/components/layout/AdminSidebar';
import AdminNavbar from '../features/admin/components/layout/AdminNavbar';

const AdminLayout = () => {

  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    // The Data Provider wraps the entire layout, making data available to all admin pages
    <ExcelDataProvider sheetsToLoad={["Students", "Holidays", "Events", "Notices"]}>
      <div className="d-flex flex-column vh-100">
        <AdminNavbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="d-flex flex-grow-1" style={{ overflow: 'hidden' }}>
        {/* <AdminNavbar /> */}
        {/* <div className="d-flex flex-grow-1"> */}
          <AdminSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <main className="flex-grow-1 p-3 bg-light" style={{ overflowY: 'auto' }}>
          {/* <AdminSidebar /> */}
          {/* <main className="flex-grow-1 p-3 bg-light"> */}
            <Outlet /> {/* All admin pages will render here via the router */}
          </main>
        </div>
      </div>
    </ExcelDataProvider>
  );
};

export default AdminLayout;
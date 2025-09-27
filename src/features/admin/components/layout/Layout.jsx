import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Content from "./Content";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <div className="d-flex flex-column vh-100">
      <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="d-flex flex-grow-1">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          currentPage={currentPage}  // pass current page
          setCurrentPage={setCurrentPage}
        />
        <main className="flex-grow-1 p-4">
          <Content currentPage={currentPage} />
        </main>
      </div>
    </div>
  );
};

export default Layout;

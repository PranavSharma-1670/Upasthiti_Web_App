import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {X, Speedometer2, CalendarCheck, PersonPlus, Person, Pencil, Check2Square, FileText, Database, ClipboardCheck } from "react-bootstrap-icons";

// Note: This component uses global Bootstrap classes, so it does not need a .module.css file.
const AdminSidebar = ({ isOpen, toggleSidebar, currentPage, setCurrentPage }) => {
  const location = useLocation();
  const menuItems = [
    { name: "Dashboard", path: "/admin/dashboard", icon: <Speedometer2 /> },
    { name: "Add Events And Notices", path: "/admin/add-events", icon: <CalendarCheck /> },
    { name: "Add Student", path: "/admin/add-student", icon: <PersonPlus /> },
    { name: "Add Teacher", path: "/admin/add-teacher", icon: <Person /> },
    { name: "Modify Class Records", path: "/admin/modify-records", icon: <Pencil /> },
    { name: "Modify Attendance", path: "/admin/modify-attendance", icon: <Check2Square /> },
    { name: "Check Logs", path: "/admin/check-logs", icon: <FileText /> },
    { name: "Check DataStorage", path: "/admin/data-storage", icon: <Database /> },
    { name: "Process Attendance", path: "/admin/process-attendance", icon: <ClipboardCheck /> },
  ];

  return (

    <div 
      className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" 
      style={{ width: isOpen ? '280px' : '70px', transition: 'width 0.3s ease' }}
    >
      {/* 2. Header now includes a close button, visible only when open */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <span className="fs-4" style={{ display: isOpen ? 'block' : 'none' }}>Admin Menu</span>
        {isOpen && (
          <button className="btn btn-dark" onClick={toggleSidebar}>
            <X size={24} />
          </button>
        )}
      </div>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <li key={item.name} className="nav-item" title={isOpen ? '' : item.name}>
            <Link to={item.path} className={`nav-link text-white d-flex align-items-center ${location.pathname === item.path ? "active" : ""}`}>
              {item.icon}
              {/* 3. The menu item text is now only rendered when the sidebar is open */}
              {isOpen && <span className="ms-2">{item.name}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    
    // <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark " style={{width: '280px'}}>
    //   <span className="fs-4">Admin Menu</span>
    //   <hr />
    //   <ul className="nav nav-pills flex-column mb-auto">
    //     {menuItems.map((item) => (
    //       <li key={item.name} className="nav-item">
    //         <Link to={item.path} className={`nav-link text-white ${location.pathname === item.path ? "active" : ""}`}>
    //           {item.icon} <span className="ms-2">{item.name}</span>
    //         </Link>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
  );
};
export default AdminSidebar;




// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import styles from './AdminSidebar.module.css';
// import { 
//     Speedometer2, 
//     CalendarCheck, 
//     PersonPlus, 
//     Person, 
//     Pencil, 
//     Check2Square, 
//     FileText, 
//     Database, 
//     ClipboardCheck 
// } from "react-bootstrap-icons";

// const AdminSidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const location = useLocation();

//   // This is the complete, corrected menu with all your original items and new paths
//   const menuItems = [
//     { name: "Dashboard", path: "/admin/dashboard", icon: <Speedometer2 /> },
//     { name: "Add Events And Notices", path: "/admin/add-events", icon: <CalendarCheck /> },
//     { name: "Add Student", path: "/admin/add-student", icon: <PersonPlus /> },
//     { name: "Add Teacher", path: "/admin/add-teacher", icon: <Person /> },
//     { name: "Modify Class Records", path: "/admin/modify-records", icon: <Pencil /> },
//     { name: "Modify Attendance", path: "/admin/modify-attendance", icon: <Check2Square /> },
//     { name: "Check Logs", path: "/admin/check-logs", icon: <FileText /> },
//     { name: "Check DataStorage", path: "/admin/data-storage", icon: <Database /> },
//     { name: "Process Attendance", path: "/admin/process-attendance", icon: <ClipboardCheck /> },
//   ];

//   return (
//     <div className={`${styles.sidebar} bg-dark text-white p-3`}>
//       <h5 className="mb-4">Admin Menu</h5>
//       <ul className="nav flex-column">
//         {menuItems.map((item) => (
//           <li key={item.name} className="nav-item mb-2" title={item.name}>
//             <Link
//               to={item.path}
//               className={`nav-link text-white ${location.pathname === item.path ? "fw-bold bg-primary rounded" : ""}`}
//             >
//               {item.icon}
//               {isOpen && <span className="ms-2">{item.name}</span>}
//             </Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default AdminSidebar;





// // import "./Sidebar.css";
// // import {X, Speedometer2, CalendarCheck, PersonPlus, Person, Pencil, Check2Square, FileText, Database, ClipboardCheck,} from "react-bootstrap-icons";

// // const Sidebar = ({ isOpen, toggleSidebar, currentPage, setCurrentPage }) => {

// //   const menuItems = [
// //     { name: "Dashboard", icon: <Speedometer2 /> },
// //     { name: "Add Events And Notices", icon: <CalendarCheck /> },
// //     { name: "Add Student", icon: <PersonPlus /> },
// //     { name: "Add Teacher", icon: <Person /> },
// //     { name: "Modify Class Records", icon: <Pencil /> },
// //     { name: "Modify Attendance", icon: <Check2Square /> },
// //     { name: "Check Logs", icon: <FileText /> },
// //     { name: "Check DataStorage", icon: <Database /> },
// //     { name: "Process Attendance", icon: <ClipboardCheck /> },
// //   ];

// //   return (
// //     <div className={`sidebar bg-dark text-white p-3 ${isOpen ? "open" : "closed"}`}>
// //       <div className="d-flex justify-content-between align-items-center mb-4">
// //         <h5 className="mb-0">{isOpen ? "Menu" : ""}</h5>
// //         {isOpen && (
// //           <button className="btn btn-sm btn-outline-light" onClick={toggleSidebar}>
// //             <X size={20} />
// //           </button>
// //         )}
// //       </div>

// //       <ul className="nav flex-column">
// //         {menuItems.map((item, index) => (
// //           <li key={index} className="nav-item mb-2">
// //             <button
// //               onClick={() => setCurrentPage(item.name)}
// //               className={`nav-link btn btn-link text-start p-0 text-white ${
// //                 currentPage === item.name ? "fw-bold text-primary" : ""
// //               }`}
// //             >
// //               {isOpen ? (
// //                 <>
// //                   {item.icon} <span className="ms-2">{item.name}</span>
// //                 </>
// //               ) : (
// //                 item.icon
// //               )}
// //             </button>
// //           </li>
// //         ))}
// //       </ul>
// //     </div>
// //   );
// // };

// // export default Sidebar;

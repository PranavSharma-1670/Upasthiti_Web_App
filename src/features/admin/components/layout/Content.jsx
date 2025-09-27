// src/components/layout/Content.jsx
import React from "react";
import Dashboard from "../pages/Dashboard";
import AddEventsAndNotices from "../pages/Add Events And Notices";
import AddStudent from "../pages/Add Student";
import AddTeacher from "../pages/Add Teacher";
import ModifyClassRecords from "../pages/Modify Class Records";
import ModifyAttendance from "../pages/Modify Attendance";
import CheckLogs from "../pages/Check Logs";
import CheckDataStorage from "../pages/Check DataStorage";
import ProcessAttendance from "../pages/Process Attendance";

const Content = ({ currentPage }) => {
  switch (currentPage) {
    case "Dashboard":
      return <Dashboard />;
    case "Add Events And Notices":
      return <AddEventsAndNotices />;
    case "Add Student":
      return <AddStudent />;
    case "Add Teacher":
      return <AddTeacher />;
    case "Modify Class Records":
      return <ModifyClassRecords />;
    case "Modify Attendance":
      return <ModifyAttendance />;
    case "Check Logs":
      return <CheckLogs />;
    case "Check DataStorage":
      return <CheckDataStorage />;
    case "Process Attendance":
      return <ProcessAttendance />;
    default:
      return <Dashboard />;
  }
};

export default Content;

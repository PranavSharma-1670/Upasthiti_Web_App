import { Routes, Route, Navigate  } from 'react-router-dom';
import SplashIntroLayout from './base/splash_intro.layout.jsx';
import StudentLayout from './base/student.layout.jsx';
import TeacherLayout from './base/teacher.layout.jsx';
import AdminLayout from './base/admin.layout.jsx';

import StudentDashboardPage from './features/student/pages/StudentDashboardPage.jsx';
import StudentCalendarPage from './features/student/pages/StudentCalendarPage.jsx';
import StudentTeachersPage from './features/student/pages/StudentTeachersPage.jsx';
import StudentTimetablePage from './features/student/pages/StudentTimetablePage.jsx';

import TeacherDashboardPage from './features/teacher/pages/TeacherDashboardPage.jsx';
import MarkAttendancePage from './features/teacher/pages/MarkAttendancePage.jsx';
import UpdateAttendancePage from './features/teacher/pages/UpdateAttendancePage.jsx';
import NoticesPage from './features/teacher/pages/NoticesPage.jsx';
import ComposeNoticePage from './features/teacher/pages/ComposeNoticePage.jsx';

import AdminDashboardPage from './features/admin/pages/AdminDashboardPage.jsx';
import AddEventsAndNoticesPage from './features/admin/pages/AddEventsAndNoticesPage.jsx';
import AddStudentPage from './features/admin/pages/AddStudentPage.jsx';
import AddTeacherPage from './features/admin/pages/AddTeacherPage.jsx';
import ModifyClassRecordsPage from './features/admin/pages/ModifyClassRecordsPage.jsx';
import ModifyAttendancePage from './features/admin/pages/ModifyAttendancePage.jsx';
import CheckLogsPage from './features/admin/pages/CheckLogsPage.jsx';
import CheckDataStoragePage from './features/admin/pages/CheckDataStoragePage.jsx';
import ProcessAttendancePage from './features/admin/pages/ProcessAttendancePage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SplashIntroLayout />} />
        {/* Student Section Routes */}
        <Route path="/student" element={<StudentLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<StudentDashboardPage />} />
          <Route path="calendar" element={<StudentCalendarPage />} />
          <Route path="teachers" element={<StudentTeachersPage />} />
          <Route path="timetable" element={<StudentTimetablePage />} />
        </Route>
        {/* Teacher Section Routes */}
        <Route path="/teacher" element={<TeacherLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<TeacherDashboardPage />} />
          <Route path="mark-attendance" element={<MarkAttendancePage />} />
          <Route path="update-attendance" element={<UpdateAttendancePage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="compose-notice" element={<ComposeNoticePage />} />
        </Route>
        {/* Admin Section Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="add-events" element={<AddEventsAndNoticesPage />} />
          <Route path="add-student" element={<AddStudentPage />} />
          <Route path="add-teacher" element={<AddTeacherPage />} />
          <Route path="modify-records" element={<ModifyClassRecordsPage />} />
          <Route path="modify-attendance" element={<ModifyAttendancePage />} />
          <Route path="check-logs" element={<CheckLogsPage />} />
          <Route path="data-storage" element={<CheckDataStoragePage />} />
          <Route path="process-attendance" element={<ProcessAttendancePage />} />
        </Route>
    </Routes>
  );
}

export default App;
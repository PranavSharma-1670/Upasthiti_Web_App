import { Routes, Route, Navigate  } from 'react-router-dom';
import SplashIntroLayout from './base/splash_intro.layout.jsx';
import StudentLayout from './base/student.layout.jsx';
import TeacherLayout from './base/teacher.layout.jsx';

import StudentDashboardPage from './features/student/pages/StudentDashboardPage.jsx';
import StudentCalendarPage from './features/student/pages/StudentCalendarPage.jsx';
import StudentTeachersPage from './features/student/pages/StudentTeachersPage.jsx';
import StudentTimetablePage from './features/student/pages/StudentTimetablePage.jsx';

import TeacherDashboardPage from './features/teacher/pages/TeacherDashboardPage.jsx';
import MarkAttendancePage from './features/teacher/pages/MarkAttendancePage.jsx';
import UpdateAttendancePage from './features/teacher/pages/UpdateAttendancePage.jsx';
import NoticesPage from './features/teacher/pages/NoticesPage.jsx';
import ComposeNoticePage from './features/teacher/pages/ComposeNoticePage.jsx';

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
    </Routes>
  );
}

export default App;
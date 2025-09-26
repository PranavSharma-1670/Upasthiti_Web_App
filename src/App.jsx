import { Routes, Route, Navigate  } from 'react-router-dom';
import SplashIntroLayout from './base/splash_intro.layout.jsx';
import StudentLayout from './base/student.layout.jsx';

import StudentDashboardPage from './features/student/pages/StudentDashboardPage.jsx';
import StudentCalendarPage from './features/student/pages/StudentCalendarPage.jsx';
import StudentTeachersPage from './features/student/pages/StudentTeachersPage.jsx';
import StudentTimetablePage from './features/student/pages/StudentTimetablePage.jsx';

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
    </Routes>
  );
}

export default App;
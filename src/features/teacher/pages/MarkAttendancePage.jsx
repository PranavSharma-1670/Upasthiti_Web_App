import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './MarkAttendancePage.module.css';

const MarkAttendancePage = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState(null);
  const [studentsData, setStudentsData] = useState([]);
  const [attendanceData, setAttendanceData] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [saving, setSaving] = useState(false);

  const classes = [
    { id: 'class_10a_math', name: 'Class 10-A Mathematics', subject: 'Mathematics' },
    { id: 'class_10b_math', name: 'Class 10-B Mathematics', subject: 'Mathematics' },
    { id: 'class_9a_math', name: 'Class 9-A Mathematics', subject: 'Mathematics' },
    { id: 'class_9b_math', name: 'Class 9-B Mathematics', subject: 'Mathematics' }
  ];
  const allStudentsData = {
    'class_10a_math': [
      { id: 1, name: 'Niya Sharma', rollNumber: '10A001' }, { id: 2, name: 'Pranav', rollNumber: '10A002' }, 
      { id: 3, name: 'Paridhi Balodhi', rollNumber: '10A003' }, { id: 4, name: 'Nandika Gupta', rollNumber: '10A004' }
    ],
    'class_10b_math': [
      { id: 1, name: 'Mahima', rollNumber: '10B001' }, { id: 2, name: 'Raj', rollNumber: '10B002' },
    ]
  };

  useEffect(() => {
    if (selectedClass) {
      const students = allStudentsData[selectedClass.id] || [];
      setStudentsData(students);
      const initialAttendance = {};
      students.forEach(student => { initialAttendance[student.id] = 'pending'; });
      setAttendanceData(initialAttendance);
    }
  }, [selectedClass]);

  const filteredStudents = studentsData.filter(student =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    student.rollNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const markAttendance = (studentId, status) => {
    setAttendanceData(prev => ({ ...prev, [studentId]: status }));
  };
  
  const markAllAttendance = (status) => {
    const newAttendanceData = {};
    studentsData.forEach(student => { newAttendanceData[student.id] = status; });
    setAttendanceData(newAttendanceData);
  };
  
  const getAttendanceStats = () => {
    const values = Object.values(attendanceData);
    return {
      present: values.filter(v => v === 'present').length, absent: values.filter(v => v === 'absent').length,
      leave: values.filter(v => v === 'leave').length, pending: values.filter(v => v === 'pending').length
    };
  };

  const saveAttendance = async () => { setSaving(true); setTimeout(() => { setSaving(false); alert('Attendance saved!'); }, 1500); };
  const stats = getAttendanceStats();

  if (!selectedClass) {
    return (
      <div className={styles['mark-attendance']}>
        <div className={styles['breadcrumb-container']}>
          <div className={styles['breadcrumb-box']} onClick={() => navigate('/teacher/dashboard')}>
            <span>Home → Mark Attendance</span>
          </div>
        </div>
        <div className={styles['class-selection']}>
          <h1>Select Class</h1>
          <p>Choose a class to mark attendance</p>
          <div className={styles['class-grid']}>
            {classes.map(classItem => (
              <div key={classItem.id} className={styles['class-card']} onClick={() => setSelectedClass(classItem)}>
                <div className={styles['class-icon']}><i className="fas fa-users"></i></div>
                <h3>{classItem.name}</h3><p>{classItem.subject}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles['mark-attendance']}>
      <div className={styles['breadcrumb-container']}>
        <div className={styles['breadcrumb-box']} onClick={() => setSelectedClass(null)}>
          <span>Home → Mark Attendance → {selectedClass.name}</span>
        </div>
      </div>
      <div className={styles['attendance-header']}>
        <button className={styles['back-button']} onClick={() => setSelectedClass(null)}>
          <i className="fas fa-arrow-left"></i> Back to Classes
        </button>
        <h1>{selectedClass.name}</h1>
        <div className={styles['class-meta']}>
          <span>{new Date().toLocaleDateString()}</span><span>Total Students: {studentsData.length}</span>
        </div>
      </div>
      <div className={styles.controls}>
        <div className={styles['controls-header']}>
          <input type="text" className={styles['search-box']} placeholder="Search students..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
          <div className={styles['bulk-actions']}>
            <button className={`${styles.btn} ${styles['btn-success']}`} onClick={() => markAllAttendance('present')}>All Present</button>
            <button className={`${styles.btn} ${styles['btn-danger']}`} onClick={() => markAllAttendance('absent')}>All Absent</button>
          </div>
        </div>
        <div className={styles['attendance-stats']}>
          <div className={`${styles['stat-card']} ${styles.present}`}><span className={styles['stat-number']}>{stats.present}</span><div className={styles['stat-label']}>Present</div></div>
          <div className={`${styles['stat-card']} ${styles.absent}`}><span className={styles['stat-number']}>{stats.absent}</span><div className={styles['stat-label']}>Absent</div></div>
          <div className={`${styles['stat-card']} ${styles.leave}`}><span className={styles['stat-number']}>{stats.leave}</span><div className={styles['stat-label']}>Leave</div></div>
          <div className={`${styles['stat-card']} ${styles.pending}`}><span className={styles['stat-number']}>{stats.pending}</span><div className={styles['stat-label']}>Pending</div></div>
        </div>
      </div>
      <div className={styles['students-list']}>
        {filteredStudents.map(student => (
          <div key={student.id} className={styles['student-item']}>
            <div className={styles['student-avatar']}>{student.name.charAt(0).toUpperCase()}</div>
            <div className={styles['student-info']}>
              <div className={styles['student-name']}>{student.name}</div>
              <div className={styles['student-details']}><span>{student.rollNumber}</span></div>
            </div>
            <div className={styles['attendance-actions']}>
              <button className={`${styles['attendance-btn']} ${styles.present} ${attendanceData[student.id] === 'present' ? styles.active : ''}`} onClick={() => markAttendance(student.id, 'present')}>P</button>
              <button className={`${styles['attendance-btn']} ${styles.leave} ${attendanceData[student.id] === 'leave' ? styles.active : ''}`} onClick={() => markAttendance(student.id, 'leave')}>L</button>
              <button className={`${styles['attendance-btn']} ${styles.absent} ${attendanceData[student.id] === 'absent' ? styles.active : ''}`} onClick={() => markAttendance(student.id, 'absent')}>A</button>
            </div>
          </div>
        ))}
      </div>
      <div className={styles['save-section']}>
        <button className={styles['save-btn']} onClick={saveAttendance} disabled={saving}>
          {saving ? 'Saving...' : 'Save Attendance'}
        </button>
      </div>
    </div>
  );
};

export default MarkAttendancePage;
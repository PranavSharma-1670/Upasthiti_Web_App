import React, { useState } from 'react';
import styles from './LoginModal.module.css';

export default function TeacherLogin({ onClose }) {
  const [loginId, setLoginId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const response = await fetch('http://localhost:5050/api/splash/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ loginId, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed.');
      }

      localStorage.setItem('authToken', data.token);

      if (data.role === 'teacher') {
        window.location.href = '/teacher/dashboard';
      } else if (data.role === 'admin') {
        window.location.href = '/admin/dashboard';
      } else {
        setError('Access denied. Please use the student login portal.');
      }

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        <h3>Teacher & Admin Login</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Employee ID / Admin ID" value={loginId} onChange={(e) => setLoginId(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className={styles['teacher-btn']}>Login</button>
        </form>
        <button className={styles['close-btn']} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}





// import React from 'react';
// import styles from './LoginModal.module.css'; // Updated import

// export default function TeacherLogin({ onClose }) {
//   return (
//     <div className={styles['modal-overlay']}>
//       <div className={styles.modal}>
//         <h3>Teacher Login</h3>
//         <form>
//           <input type="text" placeholder="Employee ID" required />
//           <input type="password" placeholder="Password" required />
//           {/* Added the specific button class */}
//           <button type="submit" className={styles['teacher-btn']}>
//             Login
//           </button>
//         </form>
//         <button className={styles['close-btn']} onClick={onClose}>
//           Close
//         </button>
//       </div>
//     </div>
//   );
// }
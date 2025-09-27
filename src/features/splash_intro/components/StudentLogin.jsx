import React, { useState } from 'react';
import styles from './LoginModal.module.css';

export default function StudentLogin({ onClose }) {
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
      
      // On successful login
      localStorage.setItem('authToken', data.token); // Store the token
      
      // Redirect based on role
      if (data.role === 'student') {
        window.location.href = '/student/dashboard';
      } else {
        setError('Access denied. Please use the correct login portal.');
      }

    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className={styles['modal-overlay']}>
      <div className={styles.modal}>
        <h3>Student Login</h3>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Student ID" value={loginId} onChange={(e) => setLoginId(e.target.value)} required />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit" className={styles['student-btn']}>Login</button>
        </form>
        <button className={styles['close-btn']} onClick={onClose}>Close</button>
      </div>
    </div>
  );
}




// import React from 'react';
// import styles from './LoginModal.module.css'; // Updated import

// export default function StudentLogin({ onClose }) {
//   return (
//     <div className={styles['modal-overlay']}>
//       <div className={styles.modal}>
//         <h3>Student Login</h3>
//         <form>
//           <input type="text" placeholder="Student ID" required />
//           <input type="password" placeholder="Password" required />
//           {/* Added the specific button class */}
//           <button type="submit" className={styles['student-btn']}>
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
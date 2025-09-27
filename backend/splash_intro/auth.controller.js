import pool from '../db.js';
import { JWT_SECRET } from '../db.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
    const { loginId, password } = req.body;

    console.log('--- Login Attempt Received ---');
    console.log('Received Login ID:', loginId);
    console.log('Type of Login ID:', typeof loginId);
    console.log('-----------------------------');

    if (!loginId || !password) {
        return res.status(400).json({ message: "Login ID and password are required." });
    }

    try {
        let user = null;
        let userType = '';

        // 1. Check the students table first, trimming any whitespace
        const studentResult = await pool.query('SELECT * FROM students WHERE TRIM(login_id) = $1', [loginId]); // Changed here
        
        if (studentResult.rows.length > 0) {
            user = studentResult.rows[0];
            userType = 'student';
        } else {
            // 2. If not a student, check the teachers table, also trimming whitespace
            const teacherResult = await pool.query('SELECT * FROM teachers WHERE TRIM(login_id) = $1', [loginId]); // Changed here
            
            if (teacherResult.rows.length > 0) {
                user = teacherResult.rows[0];
                
                if (user.role === 'Admin') {
                    userType = 'admin';
                } else if (['Class Teacher', 'Subject Teacher', 'Non-Teaching Staff'].includes(user.role)) {
                    userType = 'teacher';
                } else {
                    return res.status(403).json({ message: "User role is not authorized to log in." });
                }
            }
        }

        // 3. If no user was found in either table
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        // 4. Compare the provided password with the hashed password in the database
        const isPasswordValid = await bcrypt.compare(password, user.password_hash);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials." });
        }

        // 5. If password is valid, create a JWT
        const payload = {
            userId: user.student_id || user.teacher_id,
            role: userType,
        };

        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });

        // 6. Send the token and user role back to the client
        res.status(200).json({
            message: "Login successful!",
            token: token,
            role: userType,
            user: {
                id: user.student_id || user.teacher_id,
                name: `${user.first_name} ${user.last_name || ''}`.trim()
            }
        });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Server error during login." });
    }
};









// import pool from '../db.js';
// import bcrypt from 'bcrypt';
// import jwt from 'jsonwebtoken';

// // A secret key for signing JWTs. In a real app, this should be in a .env file!
// const JWT_SECRET = 'your-super-secret-key-that-is-long-and-random';

// export const login = async (req, res) => {
//     const { loginId, password } = req.body;

//     // --- ADD THIS LOGGING BLOCK ---
//     console.log('--- Login Attempt Received ---');
//     console.log('Received Login ID:', loginId);
//     console.log('Type of Login ID:', typeof loginId); // Check if it's a string
//     console.log('-----------------------------');

//     if (!loginId || !password) {
//         return res.status(400).json({ message: "Login ID and password are required." });
//     }

//     try {
//         let user = null;
//         let userType = '';

//         // 1. Check the students table first
//         const studentResult = await pool.query('SELECT * FROM students WHERE login_id = $1', [loginId]);
//         if (studentResult.rows.length > 0) {
//             user = studentResult.rows[0];
//             userType = 'student';
//         } else {
//             // 2. If not a student, check the teachers table (for teachers and admins)
//             const teacherResult = await pool.query('SELECT * FROM teachers WHERE login_id = $1', [loginId]);
//             if (teacherResult.rows.length > 0) {
//                 user = teacherResult.rows[0];
//                 // Check if the teacher's role is 'Admin'
//                 // userType = user.role === 'Admin' ? 'admin' : 'teacher'; 
//                 if (user.role === 'Admin') {
//                     userType = 'admin';
//                 } else if (['Class Teacher', 'Subject Teacher', 'Non-Teaching Staff'].includes(user.role)) {
//                     userType = 'teacher';
//                 } else {
//                     // This is a security measure in case a user has an unrecognized role
//                     return res.status(403).json({ message: "User role is not authorized to log in." });
//                 }
//             }
//         }

//         // 3. If no user was found in either table
//         if (!user) {
//             return res.status(404).json({ message: "User not found." });
//         }

//         // 4. Compare the provided password with the hashed password in the database
//         const isPasswordValid = await bcrypt.compare(password, user.password_hash);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: "Invalid credentials." });
//         }

//         // 5. If password is valid, create a JWT
//         const payload = {
//             userId: user.student_id || user.teacher_id,
//             role: userType,
//         };

//         const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' }); // Token expires in 1 day

//         // 6. Send the token and user role back to the client
//         res.status(200).json({
//             message: "Login successful!",
//             token: token,
//             role: userType,
//             user: { // Send some basic user info back
//                 id: user.student_id || user.teacher_id,
//                 name: `${user.first_name} ${user.last_name || ''}`.trim()
//             }
//         });

//     } catch (err) {
//         console.error("Login error:", err);
//         res.status(500).json({ message: "Server error during login." });
//     }
// };
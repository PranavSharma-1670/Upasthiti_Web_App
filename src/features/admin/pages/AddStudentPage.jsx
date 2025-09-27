import React, { useState, useEffect } from "react";
import styles from './AddStudentPage.module.css';

const AddStudentPage = () => {
  const [classesWithSections, setClassesWithSections] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", className: "", section: "A" });

  useEffect(() => {
    fetch("http://localhost:5050/api/admin/students/classes")
      .then(res => res.json()).then(data => setClassesWithSections(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, className, section } = formData;
    const payload = { first_name: firstName, last_name: lastName, class_name: className, section };
    
    const res = await fetch("http://localhost:5050/api/admin/students", {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) { alert("Student added!"); setShowForm(false); } 
    else { alert("Failed to add student."); }
  };

  return (
    <div className="container-fluid p-3">
      <div className={`${styles['slide-panel']} ${showForm ? styles.open : ""}`}>
        <div className={`card shadow-sm p-4 ${styles['form-scrollable']}`}>
          <h5>Add Student</h5>
          <form onSubmit={handleSubmit} className="row g-3">
            <div className="col-md-6"><label>First Name</label><input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required/></div>
            <div className="col-md-6"><label>Last Name</label><input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange}/></div>
            <div className="col-md-6"><label>Class</label><select className="form-select" name="className" value={formData.className} onChange={handleChange} required><option value="">Select Class</option>{Object.keys(classesWithSections).map((grade) => (<option key={grade} value={grade}>{grade}</option>))}</select></div>
            <div className="col-md-6"><label>Section</label><select className="form-select" name="section" value={formData.section} onChange={handleChange} required>{["A", "B", "C"].map((s) => (<option key={s} value={s}>{s}</option>))}</select></div>
            <div className="col-12 mt-4">
              <button type="submit" className="btn btn-success me-2">Save Student</button>
              <button type="button" className="btn btn-secondary" onClick={() => setShowForm(false)}>Cancel</button>
            </div>
          </form>
        </div>
      </div>
      <div className="card shadow-sm p-3 mt-3">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h4>Classes</h4>
          <button className="btn btn-primary btn-sm" onClick={() => setShowForm(!showForm)}>+ Add Student</button>
        </div>
      </div>
    </div>
  );
};
export default AddStudentPage;






// import React, { useState, useEffect } from "react";
// import "./AddStudent.css";

// const AddStudent = () => {
//   const [classesWithSections, setClassesWithSections] = useState({});
//   const [selectedGrade, setSelectedGrade] = useState("");
//   const [selectedSection, setSelectedSection] = useState("");
//   const [showForm, setShowForm] = useState(false);
//   const [studentsList, setStudentsList] = useState([]);

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     dob: "",
//     gender: "M",
//     address: "",
//     contactInfo: "",
//     photoPath: "",
//     className: "", // Use class name instead of ID
//     section: "A",
//     specialNeeds: false,
//     iepDetails: "",
//   });

//   const [classes, setClasses] = useState([]); // Kept for other parts of component
//   const [students, setStudents] = useState([]);

//   useEffect(() => {
//     const fetchClasses = async () => {
//       try {
//         const res = await fetch("http://localhost:5050/api/students/classes");
//         const data = await res.json();
//         setClassesWithSections(data);
//       } catch (err) {
//         console.error("Error fetching classes:", err);
//       }
//     };
//     fetchClasses();
//   }, []);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const handleSectionClick = async (classObj, section) => {
//     const key = `${classObj.class_name}-${section}`;
//     const newSelected = selectedSection === key ? null : key;
//     setSelectedSection(newSelected);

//     if (newSelected) {
//       setFormData((prev) => ({ ...prev, section, classId: classObj.class_id }));

//       try {
//         const res = await fetch(
//           `http://localhost:5050/api/students?class_id=${classObj.class_id}&section=${section}`
//         );
//         const data = await res.json();
//         setStudents((prev) => ({ ...prev, [key]: data }));
//       } catch (err) {
//         console.error("Error fetching students:", err);
//         setStudents((prev) => ({ ...prev, [key]: [] }));
//       }
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // CHANGE 2: Updated payload for the API.
//     // - Sends `class_name` instead of `class_id`.
//     // - `admission_no`, `login_id`, and `password_hash` are removed.
//     //   The backend will now be responsible for generating them.
//     const payload = {
//       first_name: formData.firstName,
//       last_name: formData.lastName,
//       dob: formData.dob || null,
//       gender: formData.gender,
//       address: formData.address,
//       contact_info: formData.contactInfo,
//       photo_path: formData.photoPath,
//       class_name: formData.className || null, // Sending name instead of ID
//       section: formData.section || null,
//       special_needs: formData.specialNeeds,
//       iep_details: formData.iepDetails,
//     };

//     try {
//       const res = await fetch("http://localhost:5050/api/students", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(payload),
//       });

//       if (!res.ok) {
//         const errBody = await res.text().catch(() => null);
//         throw new Error(`Failed to add student: ${res.status} ${errBody || ""}`);
//       }

//       await res.json();
//       alert("✅ Student added successfully!");

//       // CHANGE 3: Reset form state to match its new structure.
//       setFormData({
//         firstName: "",
//         lastName: "",
//         dob: "",
//         gender: "M",
//         address: "",
//         contactInfo: "",
//         photoPath: "",
//         className: "", // Reset className
//         section: "A",
//         specialNeeds: false,
//         iepDetails: "",
//       });
//       setShowForm(false);
//       setSelectedSection(null);

//       // This part might need adjustment later based on your API response
//       if (payload.class_name && payload.section) {
//         // You would need a way to get class_id from class_name to refresh the list,
//         // or change the student list fetching logic. This is outside the scope of the UI change.
//       }
//     } catch (err) {
//       console.error("Error adding student:", err);
//       alert("❌ Failed to add student. See console for details.");
//     }
//   };

//   const handleSearch = async () => {
//     if (!selectedGrade || !selectedSection) {
//       alert("Please select both grade and section");
//       return;
//     }

//     try {
//       const res = await fetch(
//         `http://localhost:5050/api/students/${selectedGrade}/${selectedSection}`
//       );
//       if (!res.ok) throw new Error("Failed to fetch students");
//       const data = await res.json();
//       setStudents(data);
//     } catch (err) {
//       console.error("Error fetching students:", err);
//     }
//   };

//   return (
//     <div className="container-fluid p-3">
//       {/* Row 1: Summary Panels (Unchanged) */}
//       <div className="row mb-4">
//         <div className="col-md-4">
//           <div className="card shadow-sm p-3 h-100">
//             <h6>Total Classes</h6>
//             <h3>{Object.keys(classesWithSections).length}</h3>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card shadow-sm p-3 h-100">
//             <h6>Total Students</h6>
//             <h3>{Object.values(students).flat().length}</h3>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card shadow-sm p-3 h-100">
//             <h6>Total Teachers</h6>
//             <h3>28</h3>
//           </div>
//         </div>
//       </div>

//       {/* ==================================================================== */}
//       {/* Row 2: Slide-in Add Student Form (MODIFIED AS REQUESTED)             */}
//       {/* ==================================================================== */}
//       <div className={`slide-panel ${showForm ? "open" : ""}`}>
//         <div className="card shadow-sm p-4 form-scrollable">
//           <h5>Add Student</h5>
//           <form onSubmit={handleSubmit} className="row g-3">
//             {/* Admission No */}
//             <div className="col-md-6">
//               <label className="form-label">Admission No</label>
//               {/* CHANGE 4: Admission No is now read-only */}
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Auto-generated on save"
//                 readOnly
//               />
//             </div>

//             {/* Login ID */}
//             <div className="col-md-6">
//               <label className="form-label">Login ID</label>
//               {/* CHANGE 5: Login ID is now read-only */}
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Same as Admission No"
//                 readOnly
//               />
//             </div>

//             {/* First / Last Name */}
//             <div className="col-md-6">
//               <label className="form-label">First Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="firstName"
//                 value={formData.firstName}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="col-md-6">
//               <label className="form-label">Last Name</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="lastName"
//                 value={formData.lastName}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* DOB / Gender */}
//             <div className="col-md-4">
//               <label className="form-label">Date of Birth</label>
//               <input
//                 type="date"
//                 className="form-control"
//                 name="dob"
//                 value={formData.dob}
//                 onChange={handleChange}
//               />
//             </div>
//             <div className="col-md-4">
//               <label className="form-label">Gender</label>
//               <select
//                 className="form-select"
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//               >
//                 <option value="M">Male</option>
//                 <option value="F">Female</option>
//                 <option value="O">Other</option>
//               </select>
//             </div>
//             <div className="col-md-4">
//               <label className="form-label">Contact Info</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="contactInfo"
//                 value={formData.contactInfo}
//                 onChange={handleChange}
//               />
//             </div>

//             {/* Photo Path / Address */}
//             <div className="col-md-6">
//               <label className="form-label">Photo Path</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="photoPath"
//                 value={formData.photoPath}
//                 onChange={handleChange}
//                 placeholder="e.g., /uploads/student1.jpg"
//               />
//             </div>
//              <div className="col-md-6">
//               <label className="form-label">Address</label>
//               <input
//                 type="text"
//                 className="form-control"
//                 name="address"
//                 value={formData.address}
//                 onChange={handleChange}
//               />
//             </div>
            
//             {/* Class select */}
//             <div className="col-md-6">
//               <label className="form-label">Class</label>
//               {/* CHANGE 6: Class dropdown now uses class name for its value */}
//               <select
//                 className="form-select"
//                 name="className"
//                 value={formData.className}
//                 onChange={handleChange}
//                 required
//               >
//                 <option value="">Select Class</option>
//                 {Object.keys(classesWithSections).map((grade) => (
//                   <option key={grade} value={grade}>
//                     {grade}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             {/* Section */}
//             <div className="col-md-3">
//               <label className="form-label">Section</label>
//               <select
//                 className="form-select"
//                 name="section"
//                 value={formData.section}
//                 onChange={handleChange}
//                 required
//               >
//                 {["A", "B", "C", "D", "E", "F"].map((s) => (
//                   <option key={s} value={s}>{s}</option>
//                 ))}
//               </select>
//             </div>

//             {/* Special Needs */}
//             <div className="col-md-3 d-flex align-items-end pb-2">
//               <div className="form-check">
//                 <input
//                   id="specialNeeds"
//                   type="checkbox"
//                   className="form-check-input"
//                   name="specialNeeds"
//                   checked={formData.specialNeeds}
//                   onChange={handleChange}
//                 />
//                 <label htmlFor="specialNeeds" className="form-check-label ms-2">
//                   Special Needs
//                 </label>
//               </div>
//             </div>

//             {/* IEP Details */}
//             <div className="col-12">
//               <label className="form-label">IEP Details</label>
//               <textarea
//                 className="form-control"
//                 name="iepDetails"
//                 value={formData.iepDetails}
//                 onChange={handleChange}
//                 rows={3}
//                 disabled={!formData.specialNeeds}
//               />
//             </div>
            
//             {/* CHANGE 7: Password field has been completely removed. */}
            
//             {/* Actions */}
//             <div className="col-12 mt-4">
//               <button type="submit" className="btn btn-success me-2">
//                 Save Student
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-secondary"
//                 onClick={() => setShowForm(false)}
//               >
//                 Cancel
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
            
//        {/* Row 3: Classes Display */}
//        <div className="card shadow-sm p-3 mt-3">
//          <div className="d-flex justify-content-between align-items-center mb-3">
//            <h4>Classes</h4>
//            <button
//             className="btn btn-primary btn-sm"
//             onClick={() => setShowForm(!showForm)}
//           >
//             + Add Student
//           </button>
//         </div>

//         {/* Filters Row */}
//         <div className="row g-3 align-items-center mb-3">
//           {/* Grade Dropdown */}
//           <div className="col-md-4">
//             <label className="form-label">Select Grade</label>
//             <select
//               className="form-select"
//               value={selectedGrade}
//               onChange={(e) => {
//                 setSelectedGrade(e.target.value);
//                 setSelectedSection("");
//               }}
//             >
//               <option value="">-- Select Grade --</option>
//               {Object.keys(classesWithSections).map((grade) => (
//                 <option key={grade} value={grade}>
//                   {grade}
//                 </option>
//               ))}
//             </select>
//           </div>

//           {/* Section Dropdown */}
//           <div className="col-md-4">
//             <label className="form-label">Select Section</label>
//             <select
//               className="form-select"
//               value={selectedSection}
//               onChange={(e) => setSelectedSection(e.target.value)}
//               disabled={!selectedGrade}
//             >
//               <option value="">-- Select Section --</option>
//               {selectedGrade &&
//                 classesWithSections[selectedGrade]?.map((section) => (
//                   <option key={section} value={section}>
//                     {section}
//                   </option>
//                 ))}
//             </select>
//           </div>

//           {/* Search Button */}
//           <div className="col-md-4 d-flex align-items-end">
//             <button className="btn btn-success w-100" onClick={handleSearch}>
//               Search
//             </button>
//           </div>
//         </div>

//         <div className="mt-3">
//           <h5>Students in {selectedGrade} - {selectedSection}</h5>
//           {students.length === 0 ? (
//             <p>No students found.</p>
//           ) : (
//             <table className="table table-striped">
//               <thead>
//                 <tr>
//                   <th>Admission No</th>
//                   <th>First Name</th>
//                   <th>Last Name</th>
//                   <th>DOB</th>
//                   <th>Gender</th>
//                   <th>Contact</th>
//                   <th>Grade</th>
//                   <th>Section</th>
//                   <th>Class Teacher</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {students.map((s) => (
//                   <tr key={s.student_id}>
//                     <td>{s.admission_no}</td>
//                     <td>{s.first_name}</td>
//                     <td>{s.last_name}</td>
//                     <td>{s.dob}</td>
//                     <td>{s.gender}</td>
//                     <td>{s.contact_info}</td>
//                     <td>{s.class_name}</td>
//                     <td>{s.class_section}</td>
//                     <td>{s.class_teacher}</td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           )}
//         </div>

//       </div>

//     </div>
//   );
// };

// export default AddStudent;

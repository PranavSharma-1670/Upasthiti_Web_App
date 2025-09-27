import React from "react";
import LeftPanel from "../components/leftPanel/LeftPanel";
import RightPanel from "../components/rightPanel/RightPanel";

const AdminDashboardPage = () => {
  return (
    <div className="container-fluid h-100">
      <div className="row h-100">
        <div className="col-lg-8"><LeftPanel /></div>
        <div className="col-lg-4"><RightPanel /></div>
      </div>
    </div>
  );
};
export default AdminDashboardPage;





// import React from "react";
// import LeftPanel from "../leftPanel/LeftPanel";
// import RightPanel from "../rightPanel/RightPanel";

// const Dashboard = () => {
//   return (
//     <div className="container-fluid h-100">
//       <div className="row h-100">
//       <div className="d-flex" style={{ height: "100vh", gap: "1rem" }}>
//         {/* Left Column (2/3 width) */}
//         <div className="col-lg-8 d-flex flex-column">
//           <LeftPanel />
//         </div>

//         {/* Right Column (1/3 width) */}
//         <div className="col-lg-4 d-flex">
//           <RightPanel />
//         </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

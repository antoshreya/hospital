import { Link } from "react-router-dom";

const DoctorDashboard = () => {
  return (
    <div
      className="min-h-screen px-6 py-10"
      style={{
        backgroundImage: `url('https://hmsoftwarez.com/images/pages/software/banner.png')`, // Replace with your image URL
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <h2 className="text-4xl font-bold text-center mb-10 text-blue-700">Doctor Dashboard</h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {/* View Patients */}
        <div className="backdrop-blur-lg bg-white/40 p-6 rounded-2xl shadow-lg border border-blue-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">👩‍⚕️ View Patients</h3>
          <p className="text-sm text-gray-700 mb-5">Access patient information and medical history.</p>
          <Link
            to="/view-patients"
            className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Go to Patients
          </Link>
        </div>

        {/* Manage Appointments */}
        <div className="backdrop-blur-lg bg-white/40 p-6 rounded-2xl shadow-lg border border-blue-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">📅 Manage Appointments</h3>
          <p className="text-sm text-gray-700 mb-5">View, approve, or reject patient appointments.</p>
          <Link
            to="/manage-appointments"
            className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Go to Appointments
          </Link>
        </div>

        {/* Manage Prescriptions */}
        <div className="backdrop-blur-lg bg-white/40 p-6 rounded-2xl shadow-lg border border-blue-100 hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out">
          <h3 className="text-xl font-semibold text-blue-800 mb-3">💊 Manage Prescriptions</h3>
          <p className="text-sm text-gray-700 mb-5">Create and manage patient prescriptions securely.</p>
          <Link
            to="/manage-prescriptions"
            className="block bg-blue-600 text-white text-center py-2 rounded hover:bg-blue-700 transition-colors"
          >
            Go to Prescriptions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;

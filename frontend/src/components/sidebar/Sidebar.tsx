import { MdDashboard } from "react-icons/md";
import { FaBriefcase, FaChartBar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
   <aside
  className="w-72 h-screen p-5"
  style={{
    backgroundColor: "var(--sidebar)",
    borderRight: "1px solid var(--border)",
  }}
>

  {/* Logo */}
  <div className="mb-12">
    <h1
  className="text-3xl font-bold"
  style={{ color: "var(--text)" }}
>
      Career<span className="text-blue-500">OS</span>
    </h1>

    <p
  className="text-xs mt-1"
  style={{ color: "var(--muted)" }}
>
      AI Career Intelligence
    </p>
  </div>

  {/* Navigation */}
  <nav className="space-y-4">
     <div
  className="
  flex items-center gap-3
  rounded-xl
  p-3
  cursor-pointer
  transition-all
  duration-300
  hover:scale-[1.02]
  hover:border-blue-400
  hover:bg-blue-500/20
  "
  style={{
    backgroundColor: "rgba(37,99,235,0.15)",
    border: "1px solid rgba(37,99,235,0.2)",
    color: "#60A5FA",
  }}
>
  <MdDashboard size={20} />
  <span>Dashboard</span>
</div>

 <div
  className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:translate-x-1"
  style={{ color: "var(--muted)" }}
>
  <FaBriefcase size={20} />
  <span>Jobs</span>
</div>

     <div
  className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:translate-x-1"
  style={{ color: "var(--muted)" }}
>
          <FaChartBar size={20} />
          <span>Analytics</span>
        </div>

     <div
  className="flex items-center gap-3 cursor-pointer transition-all duration-300 hover:translate-x-1"
  style={{ color: "var(--muted)" }}
>
          <IoSettingsSharp size={20} />
          <span>Settings</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
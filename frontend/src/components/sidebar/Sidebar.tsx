import { MdDashboard } from "react-icons/md";
import { FaBriefcase, FaChartBar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-zinc-950 border-r border-zinc-800 p-5">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-white mb-10">
        Career<span className="text-violet-500">OS</span>
      </h1>

      {/* Navigation */}
      <nav className="space-y-4">
        <div className="flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer transition">
          <MdDashboard size={20} />
          <span>Dashboard</span>
        </div>

        <div className="flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer transition">
          <FaBriefcase size={20} />
          <span>Jobs</span>
        </div>

        <div className="flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer transition">
          <FaChartBar size={20} />
          <span>Analytics</span>
        </div>

        <div className="flex items-center gap-3 text-zinc-300 hover:text-white cursor-pointer transition">
          <IoSettingsSharp size={20} />
          <span>Settings</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
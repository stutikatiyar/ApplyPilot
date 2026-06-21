import { MdDashboard } from "react-icons/md";
import { FaBriefcase, FaChartBar } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";

const Sidebar = () => {
  return (
   <aside className="w-72 h-screen bg-zinc-950 border-r border-zinc-800 p-5">

  {/* Logo */}
  <div className="mb-12">
    <h1 className="text-3xl font-bold text-white">
      Career<span className="text-blue-500">OS</span>
    </h1>

    <p className="text-xs text-zinc-500 mt-1">
      AI Career Intelligence
    </p>
  </div>

  {/* Navigation */}
  <nav className="space-y-4">
     <div className="flex items-center gap-3 bg-blue-500/15 border border-blue-500/20 rounded-xl p-3 text-blue-400 cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 hover:bg-blue-500/20">
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
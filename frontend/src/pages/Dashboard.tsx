import Sidebar from "../components/sidebar/Sidebar";
import StatsCards from "../components/dashboard/StatsCards";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0B1020]">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Good Evening, Stuti 👋
          </h1>

          <p className="text-zinc-400 mt-2">
            Track opportunities and manage your placement journey.
          </p>
        </div>

        <StatsCards />
      </main>
    </div>
  );
};

export default Dashboard;
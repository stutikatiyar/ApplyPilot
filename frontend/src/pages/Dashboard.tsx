import Sidebar from "../components/sidebar/Sidebar";
import StatsCards from "../components/dashboard/StatsCards";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0B1020]">
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-bold text-white">
              Good Evening, Stuti 👋
            </h1>

            <p className="text-zinc-400 mt-2">
              Track opportunities and manage your placement journey.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search jobs..."
              className="
              bg-zinc-900
              border border-zinc-800
              rounded-xl
              px-4 py-2
              text-white
              outline-none
              focus:border-violet-500
              "
            />
          </div>
        </div>

        <StatsCards />

        <div className="grid grid-cols-2 gap-6 mt-8">
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-white text-lg font-semibold">
              Placement Progress
            </h3>

            <p className="text-zinc-400 mt-3">
              You have applied to 8 jobs and received 2 interview calls.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-white text-lg font-semibold">
              AI Recommendation
            </h3>

            <p className="text-zinc-400 mt-3">
              React.js and System Design appear most frequently in saved jobs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
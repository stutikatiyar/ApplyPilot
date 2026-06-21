import Sidebar from "../components/sidebar/Sidebar";
import StatsCards from "../components/dashboard/StatsCards";
import RecentApplications from "../components/dashboard/RecentApplications";
import ApplicationChart from "../components/dashboard/ApplicationChart";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-[#0A0E1A]">
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

        <RecentApplications />
        <ApplicationChart />

      <div className="mt-8 bg-zinc-900 rounded-2xl border border-zinc-800 p-6">
          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
            <h3 className="text-white text-lg font-semibold">
              Placement Progress
            </h3>

            <p className="text-zinc-400 mt-3">
              You have applied to 8 jobs and received 2 interview calls.
            </p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">
           <h3 className="text-white text-lg font-semibold mb-5">
  AI Insights
</h3>

<div className="space-y-5">
  <div>
    <p className="text-zinc-500 text-sm">
      Top Skill Demand
    </p>

    <p className="text-blue-400 font-semibold text-lg">
      React.js (78%)
    </p>
  </div>

  <div>
    <p className="text-zinc-500 text-sm">
      Fastest Growing Skill
    </p>

    <p className="text-cyan-400 font-semibold text-lg">
      System Design (+24%)
    </p>
  </div>

  <div>
    <p className="text-zinc-500 text-sm">
      Profile Match Score
    </p>

    <p className="text-green-400 font-semibold text-lg">
      82%
    </p>
  </div>
</div>

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
import Sidebar from "../components/sidebar/Sidebar";
import StatsCards from "../components/dashboard/StatsCards";
import RecentApplications from "../components/dashboard/RecentApplications";
import ApplicationChart from "../components/dashboard/ApplicationChart";
import ThemeSwitcher from "../components/settings/ThemeSwitcher";
import { FaSearch } from "react-icons/fa";
import TopCompanies from "../components/dashboard/TopCompanies"
const Dashboard = () => {
  return (
   <div
  className="flex min-h-screen"
  style={{
    backgroundColor: "var(--background)",
    color: "var(--text)",
  }}
>
      <Sidebar />

      <main className="flex-1 p-10">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h1
  className="text-4xl font-bold"
  style={{ color: "var(--text)" }}
>
              Good Evening, Stuti 👋
            </h1>

            <p
  className="mt-2"
  style={{ color: "var(--muted)" }}
>
              Track opportunities and manage your placement journey.
            </p>
          </div>

        <div className="flex flex-col items-end gap-3">
  <div className="relative">
    <FaSearch
  className="absolute left-4 top-1/2 -translate-y-1/2"
  style={{ color: "var(--muted)" }}
/>

    <input
      type="text"
      placeholder="Search jobs..."
      className="
w-96
rounded-xl
pl-12
pr-4
py-3
outline-none
transition-all
duration-300
focus:border-blue-500
focus:ring-2
focus:ring-blue-500/20
"
style={{
  backgroundColor: "var(--card)",
  color: "var(--text)",
  border: "1px solid var(--border)",
}}
    />
  </div>

  <ThemeSwitcher />
</div>
        </div>

        

        <StatsCards />

        <RecentApplications />
        <ApplicationChart />
        <TopCompanies />

      <div
  className="mt-8 rounded-2xl p-6"
  style={{
    backgroundColor: "var(--card)",
    border: "1px solid var(--border)",
  }}
>
          <div
  className="rounded-2xl p-6"
  style={{
    backgroundColor: "var(--card)",
    border: "1px solid var(--border)",
  }}
>
            <h3
  className="text-lg font-semibold"
  style={{ color: "var(--text)" }}
>
              Placement Progress
            </h3>

            <p
  className="mt-3"
  style={{ color: "var(--muted)" }}
>
              You have applied to 8 jobs and received 2 interview calls.
            </p>
          </div>

          <div
  className="rounded-2xl p-6"
  style={{
    backgroundColor: "var(--card)",
    border: "1px solid var(--border)",
  }}
>
           <h3
  className="text-lg font-semibold mb-5"
  style={{ color: "var(--text)" }}
>
  AI Insights
</h3>

<div className="space-y-5">
  <div>
    <p
  className="text-sm"
  style={{ color: "var(--muted)" }}
>
      Top Skill Demand
    </p>

    <p className="text-blue-400 font-semibold text-lg">
      React.js (78%)
    </p>
  </div>

  <div>
    <p
  className="text-sm"
  style={{ color: "var(--muted)" }}
>
      Fastest Growing Skill
    </p>

    <p className="text-cyan-400 font-semibold text-lg">
      System Design (+24%)
    </p>
  </div>

  <div>
   <p
  className="text-sm"
  style={{ color: "var(--muted)" }}
>
      Profile Match Score
    </p>

    <p className="text-green-400 font-semibold text-lg">
      82%
    </p>
  </div>
</div>

            <p
  className="mt-3"
  style={{ color: "var(--muted)" }}
>
              React.js and System Design appear most frequently in saved jobs.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
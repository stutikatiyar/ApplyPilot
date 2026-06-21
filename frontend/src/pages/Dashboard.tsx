import Sidebar from "../components/sidebar/Sidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-black">
      <Sidebar />

      <main className="flex-1 p-8">
        <h1 className="text-4xl font-bold text-white">
          Welcome to CareerOS 🚀
        </h1>

        <p className="text-zinc-400 mt-2">
          Your AI-powered career intelligence platform.
        </p>
      </main>
    </div>
  );
};

export default Dashboard;
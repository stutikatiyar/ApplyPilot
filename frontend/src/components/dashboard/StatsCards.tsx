import {
  FaBriefcase,
  FaPaperPlane,
  FaUserTie,
  FaTrophy,
} from "react-icons/fa";

const stats = [
  {
    title: "Total Jobs",
    value: "24",
    icon: <FaBriefcase size={22} />,
  },
  {
    title: "Applied",
    value: "8",
    icon: <FaPaperPlane size={22} />,
  },
  {
    title: "Interviews",
    value: "2",
    icon: <FaUserTie size={22} />,
  },
  {
    title: "Offers",
    value: "1",
    icon: <FaTrophy size={22} />,
  },
];

const StatsCards = () => {
  return (
    <div className="grid grid-cols-4 gap-5">
      {stats.map((item) => (
  <div
    key={item.title}
    className="
      rounded-2xl
      border border-zinc-800
      bg-gradient-to-br from-zinc-900 to-zinc-950
      backdrop-blur-lg
      p-5
      transition-all
      duration-300
      hover:scale-[1.02]
      hover:border-blue-500/40
      hover:shadow-lg
      hover:shadow-blue-500/10
      hover:-translate-y-1
    "
  >
    <div className="flex justify-between items-start">
      <div>
        <p className="text-zinc-400 text-sm">
          {item.title}
        </p>

        <h2 className="text-3xl font-bold text-white mt-3">
          {item.value}
        </h2>
      </div>

      <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400">
        {item.icon}
      </div>
    </div>
  </div>
))}
    </div>
  );
};

export default StatsCards;
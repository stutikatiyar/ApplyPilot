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
  style={{
  background:
    "linear-gradient(135deg, #3B82F6 0%, #2563EB 50%, #1D4ED8 100%)",
  border: "1px solid rgba(255,255,255,0.08)",
}}
>
  
    <div className="flex justify-between items-start">
      <div>
        <p
  className="text-sm"
  style={{ color: "var(--muted)" }}
>
          {item.title}
        </p>

        <h2
  className="text-3xl font-bold mt-3"
  style={{ color: "var(--text)" }}
>
          {item.value}
        </h2>
      </div>

     <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 transition-all duration-300 hover:bg-blue-500/15 hover:scale-110">
  {item.icon}
</div>
    </div>
  </div>
))}
    </div>
  );
};

export default StatsCards;
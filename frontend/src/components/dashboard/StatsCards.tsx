const stats = [
  {
    title: "Total Jobs",
    value: "24",
  },
  {
    title: "Applied",
    value: "8",
  },
  {
    title: "Interviews",
    value: "2",
  },
  {
    title: "Offers",
    value: "1",
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
            hover:border-violet-500/40
            hover:shadow-lg
            hover:shadow-violet-500/10
            hover:-translate-y-1

            "
        >
          <p className="text-zinc-400 text-sm">
            {item.title}
          </p>

          <h2 className="text-3xl font-bold text-white mt-3">
            {item.value}
          </h2>
        </div>
      ))}
    </div>
  );
};

export default StatsCards;
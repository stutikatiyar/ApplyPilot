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
          bg-zinc-900/70
          backdrop-blur-lg
          p-5
          hover:border-violet-500/40
          transition
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
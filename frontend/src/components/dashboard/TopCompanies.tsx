const companies = [
  { name: "Google", count: 4 },
  { name: "Microsoft", count: 3 },
  { name: "Amazon", count: 2 },
  { name: "OpenAI", count: 1 },
];

const TopCompanies = () => {
  return (
    <div
      className="rounded-2xl p-6 mt-8"
      style={{
        backgroundColor: "var(--card)",
        border: "1px solid var(--border)",
      }}
    >
      <h2
        className="text-xl font-semibold mb-6"
        style={{ color: "var(--text)" }}
      >
        Top Companies Applied To
      </h2>

      <div className="space-y-6">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex justify-between items-center"
          >
            <span
              style={{ color: "var(--text)" }}
            >
              {company.name}
            </span>

            <span className="text-blue-500 font-semibold">
              {company.count}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default TopCompanies;
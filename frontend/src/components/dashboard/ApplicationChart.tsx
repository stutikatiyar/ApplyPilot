import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", applications: 5 },
  { month: "Feb", applications: 8 },
  { month: "Mar", applications: 12 },
  { month: "Apr", applications: 10 },
  { month: "May", applications: 15 },
  { month: "Jun", applications: 18 },
];

const ApplicationChart = () => {
  return (
    <div className="bg-zinc-900 rounded-2xl border border-zinc-800 p-6 mt-8">
      <h2 className="text-xl font-semibold text-white mb-6">
        Application Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <XAxis dataKey="month" stroke="#a1a1aa" />
          <YAxis stroke="#a1a1aa" />
<Tooltip
  contentStyle={{
    backgroundColor: "#111827",
    border: "1px solid #2563EB",
    borderRadius: "12px",
  }}
  labelStyle={{
    color: "#FFFFFF",
    fontWeight: "bold",
  }}
  itemStyle={{
    color: "#60A5FA",
  }}
/>

          <Line
            type="monotone"
            dataKey="applications"
            stroke="#2563EB"
            strokeWidth={3}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ApplicationChart;
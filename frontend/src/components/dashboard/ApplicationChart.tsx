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
        Application Trends
      </h2>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
         <XAxis
  dataKey="month"
  stroke="var(--muted)"
/>

<YAxis
  stroke="var(--muted)"
/>
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
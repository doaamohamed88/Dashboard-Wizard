import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
} from "recharts";

const data = [
  { name: "Moon Start", value: 38 },
  { name: "", value: 58 },
  { name: "", value: 34 },
  { name: "", value: 53 },
  { name: "", value: 76 },
  { name: "Full Moon", value: 42 },
  { name: "", value: 66 },
  { name: "", value: 86 },
  { name: "", value: 61 },
  { name: "", value: 38 },
  { name: "", value: 29 },
  { name: "Moon End", value: 72 },
];

export default function RegistryActivity() {
  return (
    <div className="col-span-2 rounded-2xl border border-[#D0BCFF1A] bg-[#051424CC] p-6">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-[20px] font-medium text-[#D4E4FA]">
          Registry Activity
        </h2>

        <button className="rounded-lg bg-[#26364C] px-3 py-2 text-xs text-[#DDE6F5]">
          Last 30 Days
        </button>
      </div>

      <ResponsiveContainer width="100%" height={260}>
        <BarChart data={data}>
          <CartesianGrid
            vertical={false}
            stroke="#18263A"
          />

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{
              fill: "#9AA4B4",
              fontSize: 12,
            }}
          />

          <Bar
            dataKey="value"
            fill="#495577"
            barSize={32}
            radius={[2, 2, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
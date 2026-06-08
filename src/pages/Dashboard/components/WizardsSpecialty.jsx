import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { name: "Alchemists", value: 45, color: "#D0BCFF" },
  { name: "Transmuters", value: 30, color: "#FFB84D" },
  { name: "Conjurers", value: 25, color: "#C9D2E4" },
];

export default function WizardsSpecialty() {
  return (
    <div className="rounded-2xl border border-[#1A2942] bg-[#071321] p-6">
      <h2 className="mb-6 text-[20px] font-medium text-[#DDE6F5]">
        Wizards by Specialty
      </h2>

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              cx="50%"
              cy="50%"
              innerRadius={70}
              outerRadius={82}
              paddingAngle={2}
              stroke="none"
            >
              {chartData.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>

            <text
              x="50%"
              y="48%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#DDE6F5"
              fontSize="28"
              fontWeight="600"
              fontFamily="Manrope, sans-serif"
            >
              1.2k
            </text>

            <text
              x="50%"
              y="58%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="#9AA4B4"
              fontSize="12"
              fontFamily="Manrope, sans-serif"
            >
              Total
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 space-y-3">
        {chartData.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <div
                className="h-2.5 w-2.5 rounded-full"
                style={{ backgroundColor: item.color }}
              />

              <span className="text-sm text-[#DDE6F5]">
                {item.name}
              </span>
            </div>

            <span className="text-sm text-[#DDE6F5]">
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

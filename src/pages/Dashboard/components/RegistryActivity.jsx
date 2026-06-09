import { useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Cell,
} from "recharts";
 
const barData = [
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
 
const ACTIVE_INDEX = 7;
 
const CustomTooltip = ({ active, payload, coordinate }) => {
  if (!active || !payload?.length) return null;
  return (
    <div
      style={{
        position: "absolute",
        left: coordinate?.x,
        top: coordinate?.y - 36,
        transform: "translateX(-50%)",
        background: "#3B82F6",
        color: "#fff",
        fontSize: 11,
        fontWeight: 500,
        padding: "4px 8px",
        borderRadius: 4,
        whiteSpace: "nowrap",
        pointerEvents: "none",
      }}
    >
      {payload[0].value.toFixed(2)} Fill × {Math.round(payload[0].value * 3.14)}
    </div>
  );
};
 
export default function RegistryActivity() {
  const [activeIndex, setActiveIndex] = useState(ACTIVE_INDEX);
 
  return (
    <div
      style={{
        background: "rgba(5, 20, 36, 0.8)",
        border: "1px solid rgba(208, 188, 255, 0.1)",
        borderRadius: 16,
        padding: "24px 24px 16px",
 
      }}
    >
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
        <h2 style={{ color: "#D4E4FA", fontSize: 18, fontWeight: 500, margin: 0 }}>
          Registry Activity
        </h2>
        <button
          style={{
            background: "#1E2D3E",
            border: "none",
            borderRadius: 8,
            color: "#DDE6F5",
            fontSize: 12,
            padding: "6px 12px",
            cursor: "pointer",
          }}
        >
          Last 30 Days
        </button>
      </div>
 
      {/* Chart wrapper with blue border on active bar */}
      <div style={{ position: "relative" }}>
        {/* Blue outline box around active bar */}
        <ActiveBarHighlight activeIndex={activeIndex} />
 
        <ResponsiveContainer width="100%" height={220}>
          <BarChart
            data={barData}
            barCategoryGap="8%"
            margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
            onMouseMove={(state) => {
              if (state.isTooltipActive) setActiveIndex(state.activeTooltipIndex);
            }}
          >
            <CartesianGrid vertical={false} stroke="#0F1E2E" strokeDasharray="0" />
            <XAxis
              dataKey="name"
              axisLine={false}
              tickLine={false}
              tick={({ x, y, payload }) => {
                if (!payload.value) return null;
                return (
                  <text x={x} y={y + 12} textAnchor={
                    payload.value === "Moon Start" ? "start" :
                    payload.value === "Moon End" ? "end" : "middle"
                  } fill="#6B7A8F" fontSize={11}>
                    {payload.value}
                  </text>
                );
              }}
            />
            <Bar
              dataKey="value"
              radius={[3, 3, 0, 0]}
              isAnimationActive={false}
            >
              {barData.map((_, index) => (
                <Cell
                  key={index}
                  fill={index === activeIndex ? "#3D4E6B" : "#2A3650"}
                  stroke={index === activeIndex ? "#3B82F6" : "none"}
                  strokeWidth={index === activeIndex ? 1.5 : 0}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
 
        {/* Tooltip label below active bar */}
        <TooltipLabel activeIndex={activeIndex} data={barData} />
      </div>
    </div>
  );
}
 
function ActiveBarHighlight({ activeIndex }) {
  const barWidth = 100 / barData.length;
  const leftPct = activeIndex * barWidth;
 
  return (
    <div
      style={{
        position: "absolute",
        left: `${leftPct + barWidth * 0.14}%`,
        right: `${100 - leftPct - barWidth * 0.86}%`,
        top: 0,
        bottom: 24,
        border: "1.5px solid #3B82F6",
        borderRadius: 4,
        pointerEvents: "none",
        zIndex: 2,
      }}
    />
  );
}
 
function TooltipLabel({ activeIndex, data }) {
  if (activeIndex === null) return null;
  const item = data[activeIndex];
  const barWidth = 100 / data.length;
  const leftPct = activeIndex * barWidth + barWidth / 2;
 
  return (
    <div
      style={{
        position: "absolute",
        left: `${leftPct}%`,
        bottom: 4,
        transform: "translateX(-50%)",
        background: "#3B82F6",
        color: "#fff",
        fontSize: 11,
        fontWeight: 500,
        padding: "3px 8px",
        borderRadius: 4,
        whiteSpace: "nowrap",
        zIndex: 3,
      }}
    >
      {item.value.toFixed(2)} Fill × {Math.round(item.value * 3.14)}
    </div>
  );
}

const specialtyData = [
  { name: "Alchemists", value: 45, color: "#C4B5FD" },
  { name: "Transmuters", value: 30, color: "#F59E0B" },
  { name: "Conjurers", value: 25, color: "#94A3B8" },
];

const TOTAL = 1200;
const RADIUS = 70;
const STROKE = 13;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function WizardsSpecialty() {
  let cumulative = 0;

  return (
    <div
      style={{
        background: "#071321",
        border: "1px solid #1A2942",
        borderRadius: 16,
        padding: "24px",
      }}
    >
      <h2
        style={{
          color: "#DDE6F5",
          fontSize: 18,
          fontWeight: 500,
          margin: "0 0 20px",
        }}
      >
        Wizards by Specialty
      </h2>

      {/* Donut chart using SVG for precision */}
      <div
        style={{ display: "flex", justifyContent: "center", marginBottom: 24 }}
      >
        <svg width={170} height={170} viewBox="0 0 170 170">
          {/* Background ring */}
          <circle
            cx={85}
            cy={85}
            r={RADIUS}
            fill="none"
            stroke="#1A2942"
            strokeWidth={STROKE}
          />

          {/* Colored segments */}
          {specialtyData.map((seg, i) => {
            const pct = seg.value / 100;
            const dashLen = pct * CIRCUMFERENCE;
            const offset = cumulative * CIRCUMFERENCE;
            cumulative += pct;
            return (
              <circle
                key={i}
                cx={85}
                cy={85}
                r={RADIUS}
                fill="none"
                stroke={seg.color}
                strokeWidth={STROKE}
                strokeDasharray={`${dashLen} ${CIRCUMFERENCE - dashLen}`}
                strokeDashoffset={-offset + CIRCUMFERENCE * 0.25}
                style={{ transition: "stroke-dasharray 0.5s" }}
              />
            );
          })}

          {/* Center text */}
          <text
            x={85}
            y={79}
            textAnchor="middle"
            fill="#DDE6F5"
            fontSize={26}
            fontWeight={600}
          >
            1.2k
          </text>
          <text x={85} y={97} textAnchor="middle" fill="#6B7A8F" fontSize={12}>
            Total
          </text>
        </svg>
      </div>

      {/* Legend */}
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {specialtyData.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 9,
                  height: 9,
                  borderRadius: "50%",
                  background: item.color,
                  flexShrink: 0,
                }}
              />
              <span style={{ color: "#DDE6F5", fontSize: 13 }}>
                {item.name}
              </span>
            </div>
            <span style={{ color: "#DDE6F5", fontSize: 13 }}>
              {item.value}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

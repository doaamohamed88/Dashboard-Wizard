import { TrendingUp, FlaskConical, AlertTriangle } from "lucide-react";

const stats = [
  {
    label: "Total Registered Wizards",
    value: "1,248",
    trendIndicator: "+4.5% from last moon",
    icon: TrendingUp,
    valueColor: "text-[#D0BCFF]",
  },
  {
    label: "Active Elixirs",
    value: "856",
    trendIndicator: "24 new formulas registered",
    icon: FlaskConical,
    valueColor: "text-[#FFB95F]",
  },
  {
    label: "Pending Verifications",
    value: "12",
    trendIndicator: "Requires High-Council approval",
    icon: AlertTriangle,
    valueColor: "text-[#FFB4AB]",
  },
];
import React from "react";
import Card from "./Card";

export default function CardList() {
  return (
    <div className="grid grid-cols-1 gap-6 px-4 sm:px-6 lg:px-10 py-4 md:grid-cols-3">
      {stats.map((item) => (
        <Card key={item.label} {...item} />
      ))}
    </div>
  );
}

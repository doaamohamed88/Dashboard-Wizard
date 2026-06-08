import React from "react";

export default function Card({
  title,
  count,
  icon: Icon,
  desc,
  countColor = "text-foreground",
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#4944544D] bg-card p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.4)] ">
      <p className="text-xs uppercase tracking-wider text-foreground"> 
        {title}
      </p>

      <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${countColor}`}>
        {count}
      </h2>

      <div className="mt-4 flex items-center gap-2 text-xs text-primary">
        {Icon && <Icon className="h-4 w-4" />}
        <span>{desc}</span>
      </div>
    </div>
  );
}

export default function Card({
  label,
  value,
  trendIndicator,
  icon: Icon,
  valueColor = "text-foreground",
}) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-[#4944544D] bg-card p-6 shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.4)] ">
      <p className="text-xs uppercase tracking-wider text-foreground"> 
        {label}
      </p>

      <h2 className={`mt-3 text-3xl sm:text-4xl font-bold ${valueColor}`}>
        {value}
      </h2>

      <div className="mt-4 flex items-center gap-2 text-xs text-primary">
        {Icon && <Icon className="h-4 w-4 " />}

        <span className="text-xs ">{trendIndicator}</span>
      </div>
    </div>
  );
}


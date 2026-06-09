import { Search } from "lucide-react";

export default function WizardSearch({ search, setSearch }) {
  return (
    <div className="relative w-full sm:flex-1 lg:w-auto">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
      />

      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by first or last name..."
        className="h-12 w-full sm:min-w-[200px] lg:w-[320px] rounded-xl border border-[#243342] bg-[#0B1A2A] pl-11 text-white outline-none placeholder:text-slate-500"
      />
    </div>
  );
}
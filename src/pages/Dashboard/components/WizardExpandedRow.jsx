export default function WizardExpandedRow({ elixirs }) {
  return (
    <tr className="bg-[#0B1A2A]">
      <td colSpan={4} className="px-6 py-4">
        <div className="flex flex-wrap gap-2">
          {elixirs.length ? (
            elixirs.map((elixir) => (
              <span
                key={elixir.id}
                className="rounded-full border border-[#7A5D27] bg-[#2B2111] px-3 py-1 text-sm text-[#FFB95F]"
              >
                {elixir.name}
              </span>
            ))
          ) : (
            <span className="text-[#677484]">
              No elixirs available
            </span>
          )}
        </div>
      </td>
    </tr>
  );
}
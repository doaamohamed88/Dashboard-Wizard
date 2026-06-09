import { Eye } from "lucide-react";
import WizardExpandedRow from "./WizardExpandedRow";

export default function WizardTableRow({
  wizard,
  expandedWizard,
  setExpandedWizard,
  setSelectedWizard,
  setOpenWizard,
}) {
  const fullName =
    [wizard.firstName, wizard.lastName]
      .filter(Boolean)
      .join(" ") || "Unknown";

  return (
    <>
      <tr className="border-b border-[#112030] hover:bg-[#091827]">
        <td className="px-6 py-5 text-[#E6EAF0]">{fullName}</td>

        <td className="px-6 py-5 text-[#E6EAF0]">
          <button
            onClick={() =>
              setExpandedWizard(
                expandedWizard === wizard.id ? null : wizard.id
              )
            }
            className="rounded-full bg-[#2B2111] px-3 py-1 text-sm text-[#FFB95F] border border-[#7A5D27]"
          >
            {wizard.elixirs.length} Elixirs
          </button>
        </td>

        <td className="px-6 py-5">
          <div className="flex flex-wrap gap-2">
            {wizard.elixirs.length ? (
              wizard.elixirs.map((elixir) => (
                <span
                  key={elixir.id}
                  className="rounded-full border border-[#7A5D27] bg-[#2B2111] px-3 py-1 text-sm text-[#FFB95F]"
                >
                  {elixir.name}
                </span>
              ))
            ) : (
              <span className="text-[#677484]">
                None registered
              </span>
            )}
          </div>
        </td>

        <td className="px-6 py-5">
          <button
            onClick={() => {
              setSelectedWizard(wizard);
              setOpenWizard(true);
            }}
          >
            <Eye className="cursor-pointer" />
          </button>
        </td>
      </tr>
{expandedWizard === wizard.id && (
  <WizardExpandedRow
    elixirs={wizard.elixirs}
  />
)}
    </>
  );
}
import WizardTableRow from "./WizardTableRow";
import TableState from "./TableState";

export default function WizardTable({
  paginatedData = [],
  isLoading,
  isError,
  expandedWizard,
  setExpandedWizard,
  setSelectedWizard,
  setOpenWizard,
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr className="border-b border-[#1D2A38] bg-[#0C1B2C] text-left">
            <th className="px-6 py-5 text-xs font-medium uppercase text-[#9AA4B2]">
              Full Name
            </th>

            <th className="px-6 py-5 text-xs font-medium uppercase text-[#9AA4B2]">
              Elixirs Count
            </th>

            <th className="px-6 py-5 text-xs font-medium uppercase text-[#9AA4B2]">
              Elixirs
            </th>

            <th className="px-6 py-5 text-xs font-medium uppercase text-[#9AA4B2]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {isLoading ? (
            <TableState
              message="Loading Wizards..."
              color="text-white"
            />
          ) : isError ? (
            <TableState
              message="Something went wrong."
              color="text-red-400"
            />
          ) : paginatedData.length === 0 ? (
            <TableState message="No Wizards Found" />
          ) : (
            paginatedData.map((wizard) => (
              <WizardTableRow
                key={wizard.id}
                wizard={wizard}
                expandedWizard={expandedWizard}
                setExpandedWizard={setExpandedWizard}
                setSelectedWizard={setSelectedWizard}
                setOpenWizard={setOpenWizard}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
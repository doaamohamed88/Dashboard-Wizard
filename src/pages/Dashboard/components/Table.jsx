import { Eye, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import WizardDetailsModal from "./WizardDetailsModal";
import useDebounce from "@/hooks/useDebounce";
import { getWizards } from "@/services/wizardApi";

const ITEMS_PER_PAGE = 10;

export default function MasterWizardRegistry() {
  const [openWizard, setOpenWizard] = useState(false);
  const [selectedWizard, setSelectedWizard] = useState(null);

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(search, 400);

  const [expandedWizard, setExpandedWizard] = useState(null);
  const {
    data: wizards = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["wizards", debouncedSearch],
    queryFn: () => getWizards(debouncedSearch),
  });

  useEffect(() => {
    setCurrentPage(1);
  }, [debouncedSearch]);

  const totalPages = Math.ceil(wizards.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedData = wizards.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  if (isLoading) {
    return (
      <div className="p-8 text-center text-white">Loading Wizards... </div>
    );
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-400">Something went wrong. </div>
    );
  }

  return (
    <div className="mx-4 sm:mx-6 lg:mx-10 mt-6 overflow-hidden rounded-xl border border-[#2A3441] bg-[#051424]">
      {/* Header */}{" "}
      <div className="flex flex-col gap-4 border-b border-[#1D2A38] p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        {" "}
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white">
          Master Wizard Registry{" "}
        </h2>
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
      </div>
      {/* Table */}
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
            {paginatedData.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-10 text-center text-slate-400">
                  No Wizards Found
                </td>
              </tr>
            ) : (
              paginatedData.map((wizard) => {
                const fullName =
                  [wizard.firstName, wizard.lastName]
                    .filter(Boolean)
                    .join(" ") || "Unknown";

                return (
                  <>
                    {/* MAIN ROW */}
                    <tr
                      key={wizard.id}
                      className="border-b border-[#112030] hover:bg-[#091827]"
                    >
                      <td className="px-6 py-5 text-[#E6EAF0]">{fullName}</td>

                      <td className="px-6 py-5 text-[#E6EAF0]">
                        <button
                          onClick={() =>
                            setExpandedWizard(
                              expandedWizard === wizard.id ? null : wizard.id,
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

                    {/* EXPANDED ROW */}
                    {expandedWizard === wizard.id && (
                      <tr className="bg-[#0B1A2A]">
                        <td colSpan={4} className="px-6 py-4">
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
                                No elixirs available
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    )}
                  </>
                );
              })
            )}
          </tbody>{" "}
        </table>
      </div>
      {/* Footer */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6">
        <p className="text-sm text-[#9AA4B2]">
          Showing {paginatedData.length} of {wizards.length} records
        </p>

        <div className="flex items-center gap-2">
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >
            <ChevronLeft className="text-[#94A3B8]" />
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={
                currentPage === index + 1
                  ? "h-9 w-9 rounded-lg bg-[#D0BCFF] text-black"
                  : "h-9 w-9 text-white"
              }
            >
              {index + 1}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages || totalPages === 0}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
          >
            <ChevronRight className="text-[#94A3B8]" />
          </button>
        </div>
      </div>
      <WizardDetailsModal
        open={openWizard}
        wizard={selectedWizard}
        onOpenChange={setOpenWizard}
      />
    </div>
  );
}

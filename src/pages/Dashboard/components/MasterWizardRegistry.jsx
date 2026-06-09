import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import useDebounce from "@/hooks/useDebounce";
import { getWizards } from "@/services/wizardApi";

import WizardSearch from "./WizardSearch";
import WizardTable from "./WizardTable";
import Pagination from "./Pagination";
import WizardDetailsModal from "./WizardDetailsModal";

const ITEMS_PER_PAGE = 10;

export default function MasterWizardRegistry() {
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const [openWizard, setOpenWizard] = useState(false);
  const [selectedWizard, setSelectedWizard] = useState(null);

  const [expandedWizard, setExpandedWizard] = useState(null);

  const debouncedSearch = useDebounce(search, 400);

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
    return <div className="p-8 text-center text-white">Loading Wizards...</div>;
  }

  if (isError) {
    return (
      <div className="p-8 text-center text-red-400">Something went wrong.</div>
    );
  }

  return (
    <div className="mx-4 sm:mx-6 lg:mx-10 mt-6 overflow-hidden rounded-xl border border-[#2A3441] bg-[#051424]">
      <div className="flex flex-col gap-4 border-b border-[#1D2A38] p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white">
          Master Wizard Registry
        </h2>

        <WizardSearch search={search} setSearch={setSearch} />
      </div>

      <WizardTable
        paginatedData={paginatedData}
        isLoading={isLoading}
        isError={isError}
        expandedWizard={expandedWizard}
        setExpandedWizard={setExpandedWizard}
        setSelectedWizard={setSelectedWizard}
        setOpenWizard={setOpenWizard}
      />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        totalRecords={wizards.length}
        currentRecords={paginatedData.length}
        setCurrentPage={setCurrentPage}
      />

      <WizardDetailsModal
        open={openWizard}
        wizard={selectedWizard}
        onOpenChange={setOpenWizard}
      />
    </div>
  );
}

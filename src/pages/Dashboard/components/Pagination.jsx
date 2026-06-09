import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Pagination({
  currentPage,
  totalPages,
  totalRecords,
  currentRecords,
  setCurrentPage,
}) {
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6">
      <p className="text-sm text-[#9AA4B2]">
        Showing {currentRecords} of {totalRecords} records
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
  );
}
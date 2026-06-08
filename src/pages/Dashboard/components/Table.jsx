// components/MasterWizardRegistry.jsx

import {
  Eye,
  Search,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import { useState } from "react";
import WizardDetailsModal from "./WizardDetailsModal";

const data = [
  {
    id: "03ca5597...a04457",
    firstName: "(None)",
    lastName: "Mrs Skower",
    elixirs: ["Mrs Skower's All-Purpose Magical Mess Remover"],
  },
  {
    id: "f47ac10b...89c0a1",
    firstName: "Severus",
    lastName: "Snape",
    elixirs: ["Veritaserum", "Wolfsbane Potion"],
  },
  {
    id: "9d2e431f...b23d9a",
    firstName: "Nicolas",
    lastName: "Flamel",
    elixirs: ["Elixir of Life"],
  },
  {
    id: "6b208922...f00e12",
    firstName: "Luna",
    lastName: "Lovegood",
    elixirs: [],
  },
];

export default function MasterWizardRegistry() {
  const [openWizard, setOpenWizard] = useState(false);

  return (
    <div className="mx-4 sm:mx-6 lg:mx-10 mt-6 overflow-hidden rounded-xl border border-[#2A3441] bg-[#051424]">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-[#1D2A38] p-4 sm:p-6 lg:flex-row lg:items-center lg:justify-between">
        <h2 className="text-2xl sm:text-3xl lg:text-[36px] font-semibold text-white">
          Master Wizard Registry
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
          <div className="relative w-full sm:flex-1 lg:w-auto">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
            />

            <input
              placeholder="Search wizards..."
              className="h-12 w-full sm:min-w-[200px] lg:w-[320px] rounded-xl border border-[#243342] bg-[#0B1A2A] pl-11 text-white outline-none placeholder:text-slate-500"
            />
          </div>

          <button className="flex h-12 w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-[#243342] bg-[#0B1A2A] px-5 text-white">
            <SlidersHorizontal size={18} />
            Filter
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
      <table className="w-full min-w-[640px]">
        <thead>
          <tr className="border-b border-[#1D2A38] bg-[#0C1B2C] text-left">
            <th className="px-6 py-5 text-xs font-medium uppercase text-[#9AA4B2]">
              ID
            </th>

            <th className="px-6 py-5 text-xs font-medium uppercase text-[#9AA4B2]">
              First Name
            </th>

            <th className="px-6 py-5 text-xs font-medium uppercase text-[#9AA4B2]">
              Last Name
            </th>

            <th className="px-6 py-5 text-xs font-medium uppercase text-[#9AA4B2]">
              Associated Elixirs
            </th>

            <th className="px-6 py-5 text-xs font-medium uppercase text-[#9AA4B2]">
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((wizard) => (
            <tr
              key={wizard.id}
              className="border-b border-[#112030] hover:bg-[#091827]"
            >
              <td className="px-6 py-5 text-[#C8D0D8]">{wizard.id}</td>

              <td className="px-6 py-5 text-[#E6EAF0]">{wizard.firstName}</td>

              <td className="px-6 py-5 text-[#E6EAF0]">{wizard.lastName}</td>

              <td className="px-6 py-5">
                <div className="flex flex-wrap gap-2">
                  {wizard.elixirs.length ? (
                    wizard.elixirs.map((elixir) => (
                      <span
                        key={elixir}
                        className="rounded-full border border-[#7A5D27] bg-[#2B2111] px-3 py-1 text-sm text-[#FFB95F]"
                      >
                        {elixir}
                      </span>
                    ))
                  ) : (
                    <span className="text-[#677484]">None registered</span>
                  )}
                </div>
              </td>

              <td className="px-6 py-5">
                <button>
                  <Eye
                    onClick={() => setOpenWizard(true)}
                    className="cursor-pointer"
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

      {/* Footer */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-4 sm:p-6">
        <p className="text-sm text-[#9AA4B2]">Showing 1-4 of 1,248 Records</p>

        <div className="flex items-center gap-3">
          <button>
            <ChevronLeft className="text-[#94A3B8]" />
          </button>

          <button className="h-9 w-9 rounded-lg bg-[#D0BCFF] text-black">
            1
          </button>

          <button className="text-white">2</button>

          <button className="text-white">3</button>

          <button>
            <ChevronRight className="text-[#94A3B8]" />
          </button>
        </div>
      </div>
                <WizardDetailsModal
            open={openWizard}
            onOpenChange={setOpenWizard}
          />

    </div>
    
  );
}


import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Beaker, ChevronRight, Pencil } from "lucide-react";
import img from "../../../assets/images/modalImg.jpg" 
export default function WizardDetailsModal({
  open,
  onOpenChange,
}) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          !max-w-[896px]
          w-full
          max-h-[921.6px]
          overflow-auto
          border
          border-[#494454]
          bg-[#0D1C2D]
          
          p-0
          text-[#D4E4FA]
          shadow-[0_0_60px_rgba(0,0,0,.6)]
        "
      >
        {/* Header */}

        <div className="flex items-start justify-between px-4 sm:px-8 pt-6">
          <div>
            <p className="text-xs uppercase tracking-[2px] text-[#B8A8D9]">
              MEMBER PROFILE
            </p>

            <h2 className="mt-1 text-3xl sm:text-[32px] font-semibold tracking-[-0.32px]">
              Mrs Skower
            </h2>
          </div>

          <div className="text-right">
            <p className="text-sm text-[#B9C0CA] ">
              Registry ID
            </p>

            <p className="text-2xl sm:text-[32px] font-medium  text-primary">
              WR-1897-MS
            </p>
          </div>
        </div>

        <div className="mt-5 h-px bg-[#16283C]" />

        {/* Main Content */}

        <div className="px-4 sm:px-10 py-6">
          <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-8">
            {/* Left Side */}

            <div>
              <div
                className="
                  mx-auto
                  flex
                  h-[172px]
                  w-[172px]
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-[#5E588E]
                  bg-gradient-to-b
                  from-[#1D1628]
                  to-[#090F17]
                  shadow-[0_0_70px_rgba(208,188,255,.18)]
                  sm:h-[170px]
                  sm:w-[170px]
                "
              >
                <img
                  src={img}
                  alt="wizard"
                  className="h-[138px] w-[138px] sm:h-[156px] sm:w-[156px] rounded-full object-cover"
                />
              </div>

              <div className="mt-5 flex flex-wrap  gap-2">
                <span
                  className="
                    rounded-full
                    border
                    border-[#D0BCFF4D]
                    bg-[#D0BCFF1A]
                    px-2
                    py-3
                    text-xs
                    text-[#D0BCFF]
                  "
                >
                  Class A Citizen
                </span>

                <span
                  className="
                    rounded-full
                    border
                    border-[#7F6330]
                    bg-[#302413]
                    px-2
                    py-3
                    text-xs
                    text-[#FFB95F]
                  "
                >
                  High Council
                </span>
              </div>
            </div>

            {/* Right Side */}

            <div>
              <div className="rounded-xl bg-[#010F1F66] border border-[#4944541A] p-4 sm:p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-8">
                  <div>
                    <p className="mb-2 text-sm text-[#CBC3D7]">
                      First Name
                    </p>

                    <p className="font-medium text-[#D4E4FA]">
                      Skower
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-[#CBC3D7]">
                      Last Name
                    </p>

                    <p className="font-medium text-[#D4E4FA]">
                      Unknown
                    </p>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-[#CBC3D7]">
                      Registry Status
                    </p>

                    <div className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-[#FFB95F]" />

                      <span className="font-medium text-[#FFB95F]">
                        Active
                      </span>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-sm text-[#CBC3D7]">
                      Primary Specialty
                    </p>

                    <p className="max-w-[220px] leading-7 text-[#D4E4FA]">
                      Domestic Alchemy &
                      Cleaning Charms
                    </p>
                  </div>
                </div>
              </div>

              {/* Elixirs */}

              <div className="mt-8">
                <div className="mb-4 flex items-center gap-2">
                  <Beaker
                    size={18}
                    className="text-[#D0BCFF]"
                  />

                  <h3 className="text-[24px] font-medium text-[#D4E4FA]">
                    Associated Elixirs
                  </h3>
                </div>

                <div className="mb-4 h-px bg-[#16283C]" />

                <div className="space-y-3">
                  <ElixirCard
                    title="Mrs Skower's All-Purpose Magical Mess Remover"
                    inventory="142 Units"
                    
                  />

                  <ElixirCard
                    title="Scouring Solution Grade IV"
                    inventory="12 Units"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}

      <div className="border-t border-[#16283C] px-4 sm:px-8 py-5">
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-3">
            <button
              className="
                h-11
                rounded-lg
                px-6
                text-[#C6CDD6]
                transition
                hover:bg-white/5
                w-full sm:w-auto
                                cursor-pointer

              "
                onClick={() => onOpenChange(false)}

            >
              Close
            </button>

            <button
              className="
                flex
                items-center
                gap-2
                rounded-lg
                font-bold
                bg-[#D0BCFF]
                h-11
                px-8
                py-2.5
                text-[#280C52]
                shadow-[0_0_25px_rgba(208,188,255,.4)]
                w-full sm:w-auto
                cursor-pointer
              "
            >
              <Pencil size={15} />
              Edit Record
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ElixirCard({
  title,
  inventory,
}) {
  return (
    <div
      className="
        flex
        items-center
        justify-between
        rounded-lg
        bg-[#0F2134]
        px-4
        py-4
        text-[#D4E4FA]
      "
    >
      <div className="flex items-center gap-3">
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-md
            bg-[#2E3555]
          "
        >
          <Beaker
            size={16}
            className="text-[#D0BCFF]"
          />
        </div>

        <div>
          <p className="text-sm font-medium text-[#D4E4FA]">
            {title}
          </p>

          <p className="mt-1 text-sm text-[#CBC3D7]">
            Inventory: {inventory}
          </p>
        </div>
      </div>

      <ChevronRight
        size={18}
        className="text-[#98A4B3]"
      />
    </div>
  );
}

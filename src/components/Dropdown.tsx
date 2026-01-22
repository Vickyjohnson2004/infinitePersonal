import { AnimatePresence, motion } from "framer-motion";

interface DropdownProps {
  open: boolean;
  items: (string | { label: string; href?: string })[];
  variant?: "light" | "dark";
  columns?: 1 | 2 | 3;
  center?: boolean;
}

function toLabel(item: string | { label: string; href?: string }) {
  return typeof item === "string" ? item : item.label;
}

function chunkIntoColumns<T>(arr: T[], columns: number): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => []);
  const perCol = Math.ceil(arr.length / columns);
  let col = 0;
  let countInCol = 0;
  for (const it of arr) {
    result[col].push(it);
    countInCol++;
    if (countInCol >= perCol && col < columns - 1) {
      col++;
      countInCol = 0;
    }
  }
  return result;
}

export default function Dropdown({
  open,
  items,
  variant = "dark",
  columns = 3,
  center = false,
}: DropdownProps) {
  const cols = chunkIntoColumns(items, columns);
  const containerClass =
    variant === "light"
      ? "rounded-2xl border border-[#E7ECF6] bg-white/90 backdrop-blur-md shadow-[0_8px_20px_rgba(36,92,255,0.08)] overflow-hidden"
      : "rounded-2xl border border-white/10 bg-black/70 backdrop-blur-xl shadow-[0_12px_24px_rgba(0,0,0,0.4)] overflow-hidden";
  const linkClass =
    variant === "light"
      ? "block text-[#0B1223] hover:text-[#245CFF] font-medium text-sm tracking-tight transition-colors duration-300 ease-[cubic-bezier(0.25,0.1,0.25,1)] py-1.5"
      : "block text-white/80 hover:text-white font-medium text-sm tracking-tight transition-colors py-1.5";
  const gridColsLg =
    columns === 1
      ? "lg:grid-cols-1"
      : columns === 2
      ? "lg:grid-cols-2"
      : "lg:grid-cols-3";
  const gridClass = `grid grid-cols-1 sm:grid-cols-2 ${gridColsLg} gap-x-12 gap-y-4 p-10 ${
    center ? "justify-center" : ""
  }`;
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{
            duration: 0.3,
            ease: [0.25, 0.1, 0.25, 1],
            opacity: { delay: 0.15 },
            y: { delay: 0.15 },
          }}
          className={containerClass}
        >
          <div className={`${gridClass} min-h-56`}>
            {cols.map((colItems, colIdx) => (
              <div
                key={colIdx}
                className={
                  variant === "light"
                    ? `${
                        colIdx < columns - 1
                          ? "lg:border-r lg:border-[#E7ECF6] lg:pr-10"
                          : ""
                      } min-w-48 ${
                        center ? "flex flex-col justify-center" : ""
                      }`
                    : `min-w-48 ${center ? "flex flex-col justify-center" : ""}`
                }
              >
                <ul className="space-y-1">
                  <AnimatePresence>
                    {colItems.map((it, idx) => (
                      <motion.li
                        key={toLabel(it)}
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 6 }}
                        transition={{
                          duration: 0.2,
                          delay: 0.05 * idx,
                          ease: "easeOut",
                        }}
                      >
                        <a
                          href={typeof it === "string" ? "#" : it.href || "#"}
                          className={linkClass}
                        >
                          {toLabel(it)}
                        </a>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

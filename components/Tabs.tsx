"use client";

export type MainTab = "ranking" | "register";

interface TabsProps {
  active: MainTab;
  onChange: (tab: MainTab) => void;
}

const TABS: { id: MainTab; label: string; description: string }[] = [
  {
    id: "ranking",
    label: "Ranking",
    description: "Startups em destaque para investidores",
  },
  {
    id: "register",
    label: "Cadastro",
    description: "Divulgue sua startup",
  },
];

export function Tabs({ active, onChange }: TabsProps) {
  return (
    <nav
      className="mx-auto max-w-6xl px-4 sm:px-6"
      aria-label="Navegação principal"
    >
      <div className="flex gap-1 rounded-xl border border-navy-700 bg-navy-800/50 p-1">
        {TABS.map((tab) => {
          const isActive = active === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => onChange(tab.id)}
              className={`flex-1 rounded-lg px-4 py-3 text-left transition-all ${
                isActive
                  ? "bg-gold text-navy-950 shadow-md shadow-gold/20"
                  : "text-navy-300 hover:bg-navy-700/50 hover:text-white"
              }`}
              aria-selected={isActive}
              role="tab"
            >
              <span className="block text-sm font-semibold">{tab.label}</span>
              <span
                className={`mt-0.5 hidden text-xs sm:block ${
                  isActive ? "text-navy-950/70" : "text-navy-500"
                }`}
              >
                {tab.description}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

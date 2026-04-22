import { Check } from "lucide-react";

type RarityColor = "rarity-common" | "rarity-rare" | "rarity-legendary";

interface PlanCardProps {
  name: React.ReactNode;
  tagline: string;
  price: string;
  period?: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  animationDelay?: string;
  isSelected?: boolean;
  rarityColor?: RarityColor;
  onSelect: () => void;
}

const PlanCard = ({ name, tagline, price, period, features, highlighted, badge, animationDelay = "0ms", isSelected, rarityColor = "rarity-common", onSelect }: PlanCardProps) => {
  return (
    <button
      onClick={onSelect}
      style={{
        animationDelay,
        ...(isSelected && {
          boxShadow: `0 0 0 2.5px hsl(var(--${rarityColor})), 0 0 24px -4px hsl(var(--${rarityColor}) / 0.4)`,
        }),
      }}
      className={`relative w-full rounded-2xl p-5 text-left animate-fade-in opacity-0 [animation-fill-mode:forwards] transition-all duration-500 ease-out ${
        isSelected
          ? "bg-foreground text-card scale-[1.02] hover:scale-[1.04]"
          : "bg-card text-foreground ring-1 ring-border shadow-sm hover:shadow-lg hover:scale-[1.01]"
      }`}
    >
      {badge && (
        <span
          className="absolute -top-3 right-4 rounded-full px-3 py-1 text-xs font-bold text-accent-foreground animate-scale-in transition-colors duration-500"
          style={{
            backgroundColor: isSelected ? `hsl(var(--${rarityColor}))` : `hsl(var(--accent))`,
          }}
        >
          {badge}
        </span>
      )}
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <h3 className="text-lg font-bold">{name}</h3>
          <p className={`mt-0.5 text-sm transition-colors duration-500 ${isSelected ? "opacity-70" : "text-muted-foreground"}`}>
            {tagline}
          </p>
        </div>
        <div className="text-right shrink-0">
          <span className="text-2xl font-extrabold">{price}</span>
          {period && (
            <span className={`block text-xs transition-colors duration-500 ${isSelected ? "opacity-60" : "text-muted-foreground"}`}>
              {period}
            </span>
          )}
        </div>
      </div>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm">
            <Check
              className="h-4 w-4 shrink-0 transition-colors duration-500"
              style={{
                color: isSelected ? `hsl(var(--${rarityColor}))` : `hsl(var(--primary))`,
              }}
            />
            {f}
          </li>
        ))}
      </ul>
    </button>
  );
};

export default PlanCard;

import { cn } from "@/lib/utils";

export type BillingPeriod = "monthly" | "yearly" | "lifetime";

interface PricingToggleProps {
  value: BillingPeriod;
  onChange: (value: BillingPeriod) => void;
}

export function PricingToggle({ value, onChange }: PricingToggleProps) {
  const options: { value: BillingPeriod; label: string; badge?: string }[] = [
    { value: "monthly", label: "Monthly" },
    { value: "yearly", label: "Yearly", badge: "Save 48%" },
    { value: "lifetime", label: "Lifetime", badge: "Best Deal" },
  ];

  return (
    <div className="inline-flex items-center bg-muted rounded-lg p-1 shadow-sm">
      {options.map((option) => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={cn(
            "relative px-4 sm:px-6 py-2 text-xs sm:text-sm font-medium rounded-md transition-all duration-300",
            value === option.value
              ? "bg-ios-blue text-white shadow-lg scale-105"
              : "text-muted-foreground hover:text-foreground hover:bg-background/50"
          )}
          aria-pressed={value === option.value}
        >
          <span className="relative z-10">{option.label}</span>
          {option.badge && value !== option.value && (
            <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-bold text-ios-blue whitespace-nowrap">
              {option.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}

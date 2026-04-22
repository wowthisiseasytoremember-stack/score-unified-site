interface BillingToggleProps {
  selected: "monthly" | "yearly" | "lifetime";
  onChange: (v: "monthly" | "yearly" | "lifetime") => void;
}

const options = [
  { value: "monthly" as const, label: "Monthly" },
  { value: "yearly" as const, label: "Yearly", badge: "Save 25%" },
  { value: "lifetime" as const, label: "Lifetime" },
];

const BillingToggle = ({ selected, onChange }: BillingToggleProps) => {
  return (
    <div className="inline-flex rounded-xl bg-muted p-1 gap-0.5">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`relative rounded-lg px-4 py-2 text-sm font-semibold transition-all ${
            selected === opt.value
              ? "bg-card text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {opt.label}
          {opt.badge && (
            <span className="absolute -top-2 -right-1 rounded-full bg-success px-1.5 py-0.5 text-[10px] font-bold text-success-foreground">
              {opt.badge}
            </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default BillingToggle;

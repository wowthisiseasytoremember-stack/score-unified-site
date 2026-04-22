import { useState } from "react";
import { X, Package } from "lucide-react";
import PlanCard from "@/components/PlanCard";
import BillingToggle from "@/components/BillingToggle";

const pricing = {
  monthly: { score: "$7.99", unlimited: "$14.99" },
  yearly: { score: "$59.99", unlimited: "$109.99" },
  lifetime: { score: "$149.99", unlimited: "$249.99" },
};

const periodLabel = {
  monthly: "/mo",
  yearly: "/yr",
  lifetime: "",
};

const BrandDot = () => (
  <span className="text-accent inline-block animate-pulse">.</span>
);

const BrandBang = () => (
  <span className="text-accent inline-block animate-pulse">!</span>
);

type PlanId = "free" | "pro" | "unlimited";
const rarityColors = {
  free: "rarity-common",
  pro: "rarity-rare",
  unlimited: "rarity-legendary",
} as const;

const Index = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly" | "lifetime">("yearly");
  const [selectedPlan, setSelectedPlan] = useState<PlanId>("pro");

  return (
    <div className="flex min-h-screen items-start justify-center bg-background px-4 py-8">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-6 animate-fade-in">
          <button className="rounded-full p-2 hover:bg-muted transition-colors">
            <X className="h-5 w-5 text-muted-foreground" />
          </button>
          <h1 className="text-lg font-bold">Upgrade your plan</h1>
          <div className="w-9" />
        </div>

        {/* Billing toggle */}
        <div className="flex justify-center mb-6 animate-fade-in" style={{ animationDelay: "50ms" }}>
          <BillingToggle selected={billing} onChange={setBilling} />
        </div>

        {/* Plans */}
        <div className="space-y-4">
          <PlanCard
            name={<>Score<BrandDot /></>}
            tagline="Get started for free"
            price="Free"
            features={["Track up to 15 items", "Basic analytics", "1 trip"]}
            isSelected={selectedPlan === "free"}
            rarityColor={rarityColors.free}
            animationDelay="100ms"
            onSelect={() => setSelectedPlan("free")}
          />

          <PlanCard
            name={<>Score<BrandBang /></>}
            tagline="For serious resellers"
            price={pricing[billing].score}
            period={periodLabel[billing] || "one-time"}
            features={["Up to 250 items", "Unlimited trips", "Full analytics & ROI", "Death pile tracker"]}
            isSelected={selectedPlan === "pro"}
            rarityColor={rarityColors.pro}
            badge="Popular"
            animationDelay="200ms"
            onSelect={() => setSelectedPlan("pro")}
          />

          <PlanCard
            name={<>Score<BrandBang /> Unlimited</>}
            tagline="No limits, ever"
            price={pricing[billing].unlimited}
            period={periodLabel[billing] || "one-time"}
            features={[
              "Unlimited items & trips",
              "Priority support",
              "Advanced reports",
              "Early access to features",
            ]}
            isSelected={selectedPlan === "unlimited"}
            rarityColor={rarityColors.unlimited}
            animationDelay="300ms"
            onSelect={() => setSelectedPlan("unlimited")}
          />
        </div>

        {/* Item Pack add-on */}
        <div 
          className="mt-6 rounded-2xl bg-card ring-1 ring-border p-4 shadow-sm animate-fade-in opacity-0 [animation-fill-mode:forwards] hover:shadow-lg transition-shadow duration-300"
          style={{ animationDelay: "400ms" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold/10">
              <Package className="h-5 w-5 text-gold" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-bold">Item Pack</h3>
              <p className="text-xs text-muted-foreground">+100 items · one-time purchase</p>
            </div>
            <button className="rounded-xl bg-foreground px-4 py-2 text-sm font-bold text-card transition-all hover:opacity-90 hover:scale-105">
              $4.99
            </button>
          </div>
          <p className="mt-2 text-xs text-muted-foreground">
            Need more room on Score<span className="text-accent">!</span>? Add 100 extra item slots instantly.
          </p>
        </div>

        {/* Restore */}
        <button 
          className="mt-6 w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors animate-fade-in opacity-0 [animation-fill-mode:forwards]"
          style={{ animationDelay: "500ms" }}
        >
          Restore purchases
        </button>

        <p 
          className="mt-3 text-center text-[11px] text-muted-foreground leading-relaxed pb-8 animate-fade-in opacity-0 [animation-fill-mode:forwards]"
          style={{ animationDelay: "600ms" }}
        >
          Payment will be charged to your Apple ID account. Subscriptions auto-renew unless cancelled at least 24 hours before the end of the current period.
        </p>
      </div>
    </div>
  );
};

export default Index;

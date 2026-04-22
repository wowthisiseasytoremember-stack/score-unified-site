import { useState } from "react";
import { PricingCard } from "@/components/PricingCard";
import { PricingToggle, type BillingPeriod } from "@/components/PricingToggle";

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("yearly");

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-blue-50/20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in">
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight lg:text-5xl mb-3 sm:mb-4">
            Choose Your Plan
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8">
            Start making money today 💰
          </p>
          
          {/* Billing Period Toggle */}
          <div className="flex justify-center mb-4">
            <PricingToggle value={billingPeriod} onChange={setBillingPeriod} />
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <div className="animate-[fade-in_0.5s_ease-out]">
            <PricingCard tier="free" billingPeriod={billingPeriod} />
          </div>
          <div className="animate-[fade-in_0.5s_ease-out_0.1s] md:scale-105">
            <PricingCard tier="pro" billingPeriod={billingPeriod} isPopular />
          </div>
          <div className="animate-[fade-in_0.5s_ease-out_0.2s]">
            <PricingCard tier="unlimited" billingPeriod={billingPeriod} />
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 sm:mt-12 text-xs sm:text-sm text-muted-foreground animate-fade-in">
          <p>✨ All plans include automatic updates and secure cloud sync</p>
          <p className="mt-2 font-semibold text-ios-blue">Join thousands of successful resellers</p>
        </div>
      </div>
    </div>
  );
}

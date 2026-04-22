import { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Crown, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import type { BillingPeriod } from "./PricingToggle";

interface PricingCardProps {
  tier: "free" | "pro" | "unlimited";
  billingPeriod: BillingPeriod;
  isPopular?: boolean;
}

const tierConfig = {
  free: {
    name: "SCORE.",
    nameAnimated: "SCORE.",
    description: "Perfect for getting started",
    features: [
      "Up to 15 items",
      "Basic recovery tracking",
      "Sourcing trip log",
    ],
    cta: "Start Free",
    ctaVariant: "outline" as const,
  },
  pro: {
    name: "SCORE.",
    nameAnimated: "SCORE!",
    description: "For serious resellers",
    features: [
      "Up to 250 items",
      "All features",
      "Achievements",
      "Mileage & expense tracking",
      "Death pile alerts",
    ],
    cta: "Start Making Money",
    ctaVariant: "default" as const,
  },
  unlimited: {
    name: "SCORE.",
    nameAnimated: "SCORE! UNLIMITED",
    description: "Maximum power & support",
    features: [
      "Unlimited items",
      "Everything in Score!",
      "Priority support",
    ],
    cta: "Unlock Everything Forever",
    ctaVariant: "default" as const,
  },
};

const pricing = {
  free: { monthly: "Free", yearly: "Free", lifetime: "Free" },
  pro: { monthly: "$7.99/mo", yearly: "$49.99/yr", lifetime: "$149.99" },
  unlimited: { monthly: "$24.99/mo", yearly: "$149.99/yr", lifetime: "$399.99" },
};

export function PricingCard({ tier, billingPeriod, isPopular }: PricingCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const config = tierConfig[tier];
  const isPaid = tier !== "free";
  const showBestValue = billingPeriod === "yearly" && isPaid;
  const isLifetimeUnlimited = tier === "unlimited" && billingPeriod === "lifetime";

  return (
    <Card
      className={cn(
        "relative transition-all duration-300 group",
        isPaid && isHovered && "shadow-2xl -translate-y-2 border-ios-blue scale-[1.02]",
        isPopular && "border-ios-blue border-2 shadow-xl",
        isLifetimeUnlimited && "border-gradient-to-br from-purple-500 via-ios-blue to-pink-500 shadow-2xl bg-gradient-to-br from-white via-white to-blue-50/30"
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600 shadow-lg animate-pulse">
            <Zap className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}
      {showBestValue && !isPopular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-ios-blue text-white hover:bg-ios-blue/90 shadow-md">
            Best Value
          </Badge>
        </div>
      )}
      {isLifetimeUnlimited && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
          <Badge className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white shadow-xl animate-[pulse_3s_ease-in-out_infinite]">
            <Crown className="w-3 h-3 mr-1" />
            Ultimate Edition
          </Badge>
        </div>
      )}
      
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold mb-2">
          <span className="relative inline-block">
            {tier === "free" ? (
              config.name
            ) : (
              <>
                <span
                  className={cn(
                    "transition-opacity duration-200",
                    isHovered ? "opacity-0" : "opacity-100"
                  )}
                >
                  {config.name}
                </span>
                <span
                  className={cn(
                    "absolute inset-0 transition-all duration-200",
                    isHovered ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  )}
                >
                  {config.nameAnimated}
                </span>
              </>
            )}
          </span>
        </CardTitle>
        <CardDescription>{config.description}</CardDescription>
      </CardHeader>

      <CardContent className="space-y-6">
        <div className="text-center">
          <div className={cn(
            "text-4xl font-bold transition-all duration-500 ease-in-out",
            isLifetimeUnlimited && "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent animate-[scale-in_0.5s_ease-out]"
          )}>
            {pricing[tier][billingPeriod]}
          </div>
          {tier !== "free" && billingPeriod === "lifetime" && (
            <div className={cn(
              "text-sm mt-1 font-semibold animate-fade-in",
              isLifetimeUnlimited ? "text-purple-600" : "text-muted-foreground"
            )}>
              {isLifetimeUnlimited ? "👑 Own it forever" : "one-time payment"}
            </div>
          )}
        </div>

        <ul className="space-y-3">
          {config.features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check className="h-5 w-5 text-ios-blue shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter>
        <Button
          className={cn(
            "w-full transition-all duration-300 font-semibold text-base",
            config.ctaVariant === "default" && "bg-ios-blue hover:bg-ios-blue/90 hover:scale-105 hover:shadow-xl",
            isLifetimeUnlimited && "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 hover:from-purple-700 hover:via-pink-600 hover:to-orange-600 text-white border-0 shadow-2xl hover:shadow-purple-500/50 hover:scale-110 group-hover:animate-pulse"
          )}
          variant={config.ctaVariant}
          size="lg"
        >
          {isLifetimeUnlimited && <Sparkles className="w-4 h-4 mr-2" />}
          {config.cta}
          {isLifetimeUnlimited && <Sparkles className="w-4 h-4 ml-2" />}
        </Button>
      </CardFooter>
    </Card>
  );
}

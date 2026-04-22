import { AirVent, Droplets, Flame, Microwave, Refrigerator, Utensils, WashingMachine, type LucideIcon } from "lucide-react";
import type { ServiceMeta } from "@/lib/site";
import { cn } from "@/lib/utils";

const map: Record<ServiceMeta["icon"], LucideIcon> = {
  AirVent, Refrigerator, WashingMachine, Droplets, Microwave, Flame, Utensils,
};

export function ServiceIcon({ name, className }: { name: ServiceMeta["icon"]; className?: string }) {
  const Icon = map[name];
  return <Icon className={cn("h-6 w-6", className)} />;
}

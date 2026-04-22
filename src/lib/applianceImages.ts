import ac from "@/assets/appliance-ac.jpg";
import fridge from "@/assets/appliance-fridge.jpg";
import washer from "@/assets/appliance-washer.jpg";
import ro from "@/assets/appliance-ro.jpg";
import microwave from "@/assets/appliance-microwave.jpg";
import geyser from "@/assets/appliance-geyser.jpg";
import dishwasher from "@/assets/appliance-dishwasher.jpg";
import type { ServiceSlug } from "@/lib/site";

export const applianceImages: Record<ServiceSlug, string> = {
  ac,
  refrigerator: fridge,
  "washing-machine": washer,
  "ro-water-purifier": ro,
  "microwave-oven": microwave,
  geyser,
  dishwasher,
};

type ItemType = {
  value: string;
  label: string;
};
export const roomTypes: Array<ItemType> = [
  { value: "Living room", label: "Living room" },
  { value: "Bedroom", label: "Bedroom" },
  { value: "Bathroom", label: "Bathroom" },
  { value: "Attic", label: "Attic" },
  { value: "Kitchen", label: "Kitchen" },
  { value: "Dining Room", label: "Dining Room" },
  { value: "Study Room", label: "Study Room" },
  { value: "Home Office", label: "Home Office" },
  { value: "Gaming Room", label: "Gaming Room" },
  { value: "House Exteriors", label: "House Exteriors" },
  { value: "Outdoor Pool Area", label: "Outdoor Pool Area" },
  { value: "Outdoor Patio", label: "Outdoor Patio" },
  { value: "Outdoor Garden", label: "Outdoor Garden" },
  { value: "Meeting Room", label: "Meeting Room" },
  { value: "Workshop", label: "Workshop" },
  { value: "Fitness Gym", label: "Fitness Gym" },
  { value: "Coffee Shop", label: "Coffee Shop" },
  { value: "Clothing Store", label: "Clothing Store" },
  { value: "Walk In Closet", label: "Walk In Closet" },
  { value: "Toilet", label: "Toilet" },
  { value: "Restaurant", label: "Restaurant" },
  { value: "Office", label: "Office" },
  { value: "Co-Working Space", label: "Co-Working Space" },
  { value: "Hotel Lobby", label: "Hotel Lobby" },
  { value: "Hotel Bathroom", label: "Hotel Bathroom" },
  { value: "Exhibition Space", label: "Exhibition Space" },
  { value: "Onsen", label: "Onsen" },
  { value: "Mudroom", label: "Mudroom" },
  { value: "Drop Zone", label: "Drop Zone" },
];

export const modes: Array<ItemType> = [
  { value: "Interior Design", label: "Interior Design (More Creative, Fast)" },
  { value: "Virtual Staging", label: "Virtual Staging (Locks Walls, Slower)" },
  { value: "Freestyle", label: "Freestyle (no image needed, very fast)" },
  { value: "360° panorama", label: "360° panorama (beta, does not use image)" },
];

export const roomStyles: Array<ItemType> = [
  { value: "Modern", label: "Modern" },
  { value: "Minimalist", label: "Minimalist" },
  { value: "Contemporary", label: "Contemporary" },
  { value: "Scandinavian", label: "Scandinavian" },
  { value: "Interior AI", label: "Interior AI" },
  { value: "Midcentury modern", label: "Midcentury modern" },
  { value: "Zen", label: "Zen" },
  { value: "Tropical", label: "Tropical" },
  { value: "Industrial", label: "Industrial" },
  { value: "Biophilic", label: "Biophilic" },
  { value: "Vintage", label: "Vintage" },
  { value: "Art deco", label: "Art deco" },
  { value: "Farmhouse", label: "Farmhouse" },
  { value: "Rustic", label: "Rustic" },
  { value: "Bohemian", label: "Bohemian" },
  { value: "Japanese design", label: "Japanese design" },
  { value: "Coastal", label: "Coastal" },
  { value: "Cottagecore", label: "Cottagecore" },
  { value: "French country", label: "French country" },
  { value: "Maximalist", label: "Maximalist" },
  { value: "Art nouveau", label: "Art nouveau" },
  { value: "Gaming room", label: "Gaming room" },
  { value: "Baroque", label: "Baroque" },
  { value: "Cyberpunk", label: "Cyberpunk" },
  { value: "Vaporwave", label: "Vaporwave" },
  { value: "Ski chalet", label: "Ski chalet" },
  { value: "Sketch", label: "Sketch" },
  { value: "Tribal", label: "Tribal" },
  { value: "Medieval", label: "Medieval" },
  { value: "Christmas", label: "Christmas" },
  { value: "Easter", label: "Easter" },
  { value: "Chinese New Year", label: "Chinese New Year" },
  { value: "Halloween", label: "Halloween" },
  { value: "Hot pink", label: "Hot pink" },
  { value: "Neoclassic (Pro)", label: "Neoclassic (Pro)" },
];

export const numberOfRenders: Array<ItemType> = [
  { value: "1 render (fast)", label: "1 render (fast)" },
  { value: "3 renders (slower) (Pro)", label: "3 renders (slower) (Pro)" },
  { value: "6 renders (slow) (Pro)", label: "6 renders (slow) (Pro)" },
  { value: "9 renders (very slow) (Pro)", label: "9 renders (very slow) (Pro)" },
];
export const resolution: Array<ItemType> = [
  { value: "High (slow, takes 14s) (Pro)", label: "High (slow, takes 14s) (Pro)" },
  { value: "Low (fast, takes 7s)", label: "Low (fast, takes 7s)" },
];
export const privacy: Array<ItemType> = [
  { value: "Public", label: "Public" },
  { value: "Private", label: "Private" },
];

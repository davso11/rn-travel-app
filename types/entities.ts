export type DestinationCategory = "beach" | "mountain" | "site" | "forest";

export type Destination = {
  id: string;
  name: string;
  category: DestinationCategory;
  location: string;
  image: any;
};

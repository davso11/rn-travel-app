import { Destination } from "@/types/entities";

const DESTINATIONS: Destination[] = [
  {
    id: "1",
    name: "Meeru Island",
    category: "beach",
    location: "Maldives",
    image: require("@/assets/images/beaches/meeru-island.webp"),
  },
  {
    id: "2",
    name: "Kudahuvadhoo Beach",
    category: "beach",
    location: "Maldives",
    image: require("@/assets/images/beaches/kudahuvadhoo.webp"),
  },
  {
    id: "3",
    name: "Tropea",
    category: "beach",
    location: "Italy",
    image: require("@/assets/images/beaches/tropea.webp"),
  },
  {
    id: "4",
    name: "Braie Lake",
    category: "mountain",
    location: "Italy",
    image: require("@/assets/images/mountains/braie-lake.webp"),
  },
  {
    id: "5",
    name: "Santorini",
    category: "mountain",
    location: "Greece",
    image: require("@/assets/images/mountains/santorini.webp"),
  },
  {
    id: "6",
    name: "Uchisar Castle",
    category: "mountain",
    location: "Turkey",
    image: require("@/assets/images/mountains/uchisar-castel.webp"),
  },
];

export function useDestinations() {
  return {
    data: DESTINATIONS,
  };
}

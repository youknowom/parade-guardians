import { MapPin } from "lucide-react";

interface LocationSearchProps {
  onLocationSelect: (location: string) => void;
}

const LocationSearch = ({ onLocationSelect }: LocationSearchProps) => {
  const popularCities = [
    "New York",
    "London",
    "Tokyo",
    "Paris",
    "Mumbai",
    "Sydney",
  ];

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {popularCities.map((city) => (
        <button
          key={city}
          onClick={() => onLocationSelect(city)}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 hover:bg-secondary transition-all text-sm font-medium text-secondary-foreground hover:scale-105"
        >
          <MapPin className="w-3 h-3" />
          {city}
        </button>
      ))}
    </div>
  );
};

export default LocationSearch;

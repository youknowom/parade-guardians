import { useState } from "react";
import { Cloud, CloudRain, Sun, Calendar, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import LocationSearch from "@/components/LocationSearch";
import WeatherCard from "@/components/WeatherCard";
import RainChart from "@/components/RainChart";
import EventPlanner from "@/components/EventPlanner";

const Index = () => {
  const [location, setLocation] = useState("");
  const [showForecast, setShowForecast] = useState(false);

  const handleSearch = () => {
    if (location.trim()) {
      setShowForecast(true);
    }
  };

  return (
    <div className="min-h-screen bg-sky-gradient relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Cloud className="absolute top-20 left-10 w-24 h-24 text-weather-cloud opacity-30 animate-[float_6s_ease-in-out_infinite]" />
        <Cloud className="absolute top-40 right-20 w-32 h-32 text-weather-cloud opacity-20 animate-[float_8s_ease-in-out_infinite_1s]" />
        <Sun className="absolute top-10 right-10 w-20 h-20 text-weather-sunny opacity-40 animate-pulse" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-3 mb-6">
            <CloudRain className="w-12 h-12 text-primary" />
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              Will It Rain On My Parade?
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Plan your outdoor events with confidence. Get accurate rain forecasts powered by NASA data and intelligent weather analytics.
          </p>
        </div>

        {/* Location Search */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="backdrop-blur-md bg-card/70 rounded-3xl shadow-2xl p-8 border border-weather-sky-start/20">
            <div className="flex gap-3 mb-4">
              <div className="relative flex-1">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Enter your city or location..."
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                  className="pl-12 h-14 text-lg bg-background/50 border-primary/20 focus:border-primary rounded-2xl"
                />
              </div>
              <Button
                onClick={handleSearch}
                size="lg"
                className="h-14 px-8 rounded-2xl bg-primary hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all"
              >
                Check Weather
              </Button>
            </div>
            <LocationSearch onLocationSelect={setLocation} />
          </div>
        </div>

        {/* Forecast Display */}
        {showForecast && location && (
          <div className="space-y-8 animate-fade-in">
            <WeatherCard location={location} />
            <RainChart location={location} />
            <EventPlanner location={location} />
          </div>
        )}

        {/* Features Grid */}
        {!showForecast && (
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto animate-fade-in">
            <div className="backdrop-blur-md bg-card/60 p-8 rounded-3xl border border-weather-sky-start/20 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-primary/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Location Intelligence</h3>
              <p className="text-muted-foreground">
                Get hyper-local forecasts for any city worldwide with NASA satellite data
              </p>
            </div>

            <div className="backdrop-blur-md bg-card/60 p-8 rounded-3xl border border-weather-sky-start/20 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-weather-rain/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <CloudRain className="w-8 h-8 text-weather-rain" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Rain Prediction</h3>
              <p className="text-muted-foreground">
                Advanced algorithms predict rain probability with hour-by-hour precision
              </p>
            </div>

            <div className="backdrop-blur-md bg-card/60 p-8 rounded-3xl border border-weather-sky-start/20 hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="bg-accent/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-4">
                <Calendar className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Event Planning</h3>
              <p className="text-muted-foreground">
                Plan ahead with 7-day forecasts and smart recommendations for outdoor events
              </p>
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
      `}</style>
    </div>
  );
};

export default Index;

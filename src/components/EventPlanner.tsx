import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, PartyPopper } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface EventPlannerProps {
  location: string;
}

const EventPlanner = ({ location }: EventPlannerProps) => {
  const [eventDate, setEventDate] = useState("");
  const [eventTime, setEventTime] = useState("");
  const [showRecommendation, setShowRecommendation] = useState(false);

  const handlePlanEvent = () => {
    setShowRecommendation(true);
  };

  // Mock recommendation - would use actual forecast data
  const isGoodWeather = Math.random() > 0.5;
  const rainChance = Math.floor(Math.random() * 100);

  return (
    <Card className="backdrop-blur-md bg-card/80 border-weather-sky-start/30 shadow-xl max-w-4xl mx-auto">
      <CardHeader className="bg-gradient-to-r from-accent/10 to-primary/10 border-b border-weather-sky-start/20">
        <CardTitle className="text-2xl flex items-center gap-3">
          <PartyPopper className="w-6 h-6 text-accent" />
          Event Planning Assistant
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-8">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-foreground">
              When is your event?
            </label>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="pl-11 h-12 bg-background/50 border-primary/20 focus:border-primary rounded-xl"
                />
              </div>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="time"
                  value={eventTime}
                  onChange={(e) => setEventTime(e.target.value)}
                  className="pl-11 h-12 bg-background/50 border-primary/20 focus:border-primary rounded-xl"
                />
              </div>
            </div>
          </div>

          <Button
            onClick={handlePlanEvent}
            disabled={!eventDate || !eventTime}
            size="lg"
            className="w-full h-12 rounded-xl bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all"
          >
            Get Weather Recommendation
          </Button>

          {showRecommendation && (
            <div className="mt-6 p-6 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/20 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  {isGoodWeather ? (
                    <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                      <span className="text-3xl">🌞</span>
                    </div>
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-weather-rain/20 flex items-center justify-center">
                      <span className="text-3xl">☔</span>
                    </div>
                  )}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <h3 className="text-xl font-semibold text-foreground">
                      Weather Forecast for {location}
                    </h3>
                    <Badge variant={isGoodWeather ? "default" : "destructive"}>
                      {rainChance}% Rain
                    </Badge>
                  </div>
                  
                  <p className="text-foreground mb-4">
                    {isGoodWeather ? (
                      <>
                        <strong>Great news!</strong> The weather looks perfect for your event on{" "}
                        {new Date(eventDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric' 
                        })} at {eventTime}.
                        Clear skies and comfortable temperatures expected. Your parade is safe! 🎉
                      </>
                    ) : (
                      <>
                        <strong>Weather Alert!</strong> There's a {rainChance}% chance of rain on{" "}
                        {new Date(eventDate).toLocaleDateString('en-US', { 
                          weekday: 'long', 
                          month: 'long', 
                          day: 'numeric' 
                        })} at {eventTime}.
                        Consider moving your event earlier or having an indoor backup plan. ☔
                      </>
                    )}
                  </p>

                  <div className="grid md:grid-cols-3 gap-3">
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-xs text-muted-foreground mb-1">Best Time</p>
                      <p className="font-semibold text-foreground">
                        {isGoodWeather ? eventTime : "10:00 AM - 2:00 PM"}
                      </p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-xs text-muted-foreground mb-1">Temperature</p>
                      <p className="font-semibold text-foreground">72°F</p>
                    </div>
                    <div className="p-3 rounded-lg bg-background/50">
                      <p className="text-xs text-muted-foreground mb-1">Wind</p>
                      <p className="font-semibold text-foreground">8 mph</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default EventPlanner;

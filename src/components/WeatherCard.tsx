import { CloudRain, Cloud, Sun, Droplets, Wind, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface WeatherCardProps {
  location: string;
}

const WeatherCard = ({ location }: WeatherCardProps) => {
  // Mock data - would be replaced with actual API calls
  const rainProbability = 65;
  const temperature = 72;
  const humidity = 78;
  const windSpeed = 12;
  const visibility = 8;
  const willRain = rainProbability > 50;

  return (
    <Card className="backdrop-blur-md bg-card/80 border-weather-sky-start/30 shadow-2xl max-w-4xl mx-auto overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-primary/10 to-weather-rain/10 border-b border-weather-sky-start/20">
        <div className="flex items-center justify-between">
          <CardTitle className="text-3xl flex items-center gap-3">
            <CloudRain className="w-8 h-8 text-primary" />
            {location}
          </CardTitle>
          <Badge
            variant={willRain ? "destructive" : "default"}
            className="text-lg px-4 py-2 rounded-full"
          >
            {willRain ? "⚠️ Rain Expected" : "✨ Clear Skies"}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="p-8">
        {/* Main forecast */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-weather-rain/20 to-primary/20 mb-4">
            {willRain ? (
              <CloudRain className="w-16 h-16 text-weather-rain" />
            ) : (
              <Sun className="w-16 h-16 text-weather-sunny" />
            )}
          </div>
          <h2 className="text-5xl font-bold text-foreground mb-2">
            {rainProbability}%
          </h2>
          <p className="text-xl text-muted-foreground">
            Chance of Rain
          </p>
          <p className="text-6xl font-bold text-foreground mt-4">
            {temperature}°F
          </p>
        </div>

        {/* Weather details grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-4 rounded-2xl bg-secondary/30">
            <Droplets className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">{humidity}%</p>
            <p className="text-sm text-muted-foreground">Humidity</p>
          </div>

          <div className="text-center p-4 rounded-2xl bg-secondary/30">
            <Wind className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">{windSpeed} mph</p>
            <p className="text-sm text-muted-foreground">Wind Speed</p>
          </div>

          <div className="text-center p-4 rounded-2xl bg-secondary/30">
            <Eye className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">{visibility} mi</p>
            <p className="text-sm text-muted-foreground">Visibility</p>
          </div>

          <div className="text-center p-4 rounded-2xl bg-secondary/30">
            <Cloud className="w-8 h-8 mx-auto mb-2 text-primary" />
            <p className="text-2xl font-bold text-foreground">Cloudy</p>
            <p className="text-sm text-muted-foreground">Conditions</p>
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20">
          <p className="text-lg text-center text-foreground">
            {willRain ? (
              <>
                ☔ <strong>Bring an umbrella!</strong> Rain is likely in the afternoon. 
                Consider rescheduling outdoor events or plan for indoor backup.
              </>
            ) : (
              <>
                🌞 <strong>Perfect parade weather!</strong> Clear skies expected all day. 
                Great conditions for outdoor activities.
              </>
            )}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;

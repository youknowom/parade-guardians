import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { CloudRain } from "lucide-react";

interface RainChartProps {
  location: string;
}

const RainChart = ({ location }: RainChartProps) => {
  // Mock hourly data - would be replaced with actual API
  const hourlyData = [
    { time: "12 AM", rain: 10, temp: 68 },
    { time: "3 AM", rain: 15, temp: 66 },
    { time: "6 AM", rain: 20, temp: 64 },
    { time: "9 AM", rain: 45, temp: 70 },
    { time: "12 PM", rain: 65, temp: 75 },
    { time: "3 PM", rain: 80, temp: 76 },
    { time: "6 PM", rain: 70, temp: 73 },
    { time: "9 PM", rain: 50, temp: 70 },
  ];

  const dailyData = [
    { day: "Mon", rain: 65, temp: 72 },
    { day: "Tue", rain: 40, temp: 74 },
    { day: "Wed", rain: 20, temp: 76 },
    { day: "Thu", rain: 10, temp: 78 },
    { day: "Fri", rain: 30, temp: 75 },
    { day: "Sat", rain: 50, temp: 73 },
    { day: "Sun", rain: 60, temp: 71 },
  ];

  return (
    <div className="space-y-6 max-w-6xl mx-auto">
      {/* 24-Hour Forecast */}
      <Card className="backdrop-blur-md bg-card/80 border-weather-sky-start/30 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <CloudRain className="w-6 h-6 text-primary" />
            24-Hour Rain Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={hourlyData}>
              <defs>
                <linearGradient id="rainGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--rain-blue))" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="hsl(var(--rain-blue))" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
                label={{ value: 'Rain Probability (%)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Area
                type="monotone"
                dataKey="rain"
                stroke="hsl(var(--rain-blue))"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#rainGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 7-Day Forecast */}
      <Card className="backdrop-blur-md bg-card/80 border-weather-sky-start/30 shadow-xl">
        <CardHeader>
          <CardTitle className="text-2xl flex items-center gap-3">
            <CloudRain className="w-6 h-6 text-primary" />
            7-Day Forecast
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={dailyData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" opacity={0.3} />
              <XAxis 
                dataKey="day" 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                style={{ fontSize: '12px' }}
                label={{ value: 'Rain Probability (%)', angle: -90, position: 'insideLeft' }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Bar 
                dataKey="rain" 
                fill="hsl(var(--primary))"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};

export default RainChart;

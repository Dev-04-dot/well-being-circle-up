
import React from "react";
import { 
  Card, 
  CardContent,
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Award, FireIcon, TrendingUp } from "lucide-react";

// Create a custom FireIcon since it's not in the list of available icons
const FireIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>
  </svg>
);

const StatCard = ({ icon: Icon, value, label, color }) => (
  <div className="stat-card">
    <div className={`text-${color} mb-1`}>
      <Icon className="h-6 w-6" />
    </div>
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-muted-foreground">{label}</div>
  </div>
);

const UserStats = () => {
  const [progress, setProgress] = React.useState(68);
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Your Fitness Progress</CardTitle>
        <CardDescription>Track your workout goals and achievements</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="weekly">
          <TabsList className="mb-4">
            <TabsTrigger value="daily">Daily</TabsTrigger>
            <TabsTrigger value="weekly">Weekly</TabsTrigger>
            <TabsTrigger value="monthly">Monthly</TabsTrigger>
          </TabsList>
          
          <TabsContent value="daily" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard 
                icon={TrendingUp} 
                value="2.5k" 
                label="Steps" 
                color="fitConnect-primary" 
              />
              <StatCard 
                icon={FireIcon} 
                value="385" 
                label="Calories" 
                color="fitConnect-accent" 
              />
              <StatCard 
                icon={Award} 
                value="2" 
                label="Workouts" 
                color="fitConnect-secondary" 
              />
              <div className="stat-card">
                <div className="text-green-500 mb-1">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-muted-foreground">Badges</div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Daily Goal Progress</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
            </div>
          </TabsContent>
          
          <TabsContent value="weekly" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard 
                icon={TrendingUp} 
                value="15.2k" 
                label="Steps" 
                color="fitConnect-primary" 
              />
              <StatCard 
                icon={FireIcon} 
                value="2,540" 
                label="Calories" 
                color="fitConnect-accent" 
              />
              <StatCard 
                icon={Award} 
                value="8" 
                label="Workouts" 
                color="fitConnect-secondary" 
              />
              <div className="stat-card">
                <div className="text-green-500 mb-1">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-muted-foreground">Badges</div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Weekly Goal Progress</span>
                <span className="text-sm font-medium">72%</span>
              </div>
              <Progress value={72} className="h-2" />
            </div>
          </TabsContent>
          
          <TabsContent value="monthly" className="space-y-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard 
                icon={TrendingUp} 
                value="62.7k" 
                label="Steps" 
                color="fitConnect-primary" 
              />
              <StatCard 
                icon={FireIcon} 
                value="9,830" 
                label="Calories" 
                color="fitConnect-accent" 
              />
              <StatCard 
                icon={Award} 
                value="24" 
                label="Workouts" 
                color="fitConnect-secondary" 
              />
              <div className="stat-card">
                <div className="text-green-500 mb-1">
                  <Award className="h-6 w-6" />
                </div>
                <div className="text-2xl font-bold">5</div>
                <div className="text-sm text-muted-foreground">Badges</div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium">Monthly Goal Progress</span>
                <span className="text-sm font-medium">85%</span>
              </div>
              <Progress value={85} className="h-2" />
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default UserStats;

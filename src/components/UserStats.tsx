
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
import { Award, TrendingUp, Flame } from "lucide-react";

// Create a custom FireIcon since the Flame icon better represents fire/calories
const FireIcon = () => (
  <Flame className="h-6 w-6" />
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


import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";

const buddies = [
  {
    id: 1,
    name: "Alex Johnson",
    avatar: "",
    initials: "AJ",
    goal: "Build Muscle",
    isOnline: true,
    workoutToday: true,
  },
  {
    id: 2,
    name: "Sarah Williams",
    avatar: "",
    initials: "SW",
    goal: "Weight Loss",
    isOnline: false,
    workoutToday: true,
  },
  {
    id: 3,
    name: "Michael Chen",
    avatar: "",
    initials: "MC",
    goal: "Cardio",
    isOnline: true,
    workoutToday: false,
  },
  {
    id: 4,
    name: "Jessica Lee",
    avatar: "",
    initials: "JL",
    goal: "Flexibility",
    isOnline: false,
    workoutToday: false,
  },
];

const BuddiesSection = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <div>
            <CardTitle>Fitness Buddies</CardTitle>
            <CardDescription>Connect with like-minded fitness enthusiasts</CardDescription>
          </div>
          <Button size="sm" className="gap-1">
            <PlusCircle className="h-4 w-4" />
            <span>Find Buddies</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {buddies.map((buddy) => (
            <div 
              key={buddy.id} 
              className="flex items-center gap-3 p-3 rounded-lg border hover:bg-accent/10 transition-colors"
            >
              <div className="avatar-container">
                <Avatar>
                  <AvatarImage src={buddy.avatar} alt={buddy.name} />
                  <AvatarFallback className="bg-fitConnect-secondary text-white">{buddy.initials}</AvatarFallback>
                </Avatar>
                {buddy.isOnline && <span className="avatar-online-indicator" />}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium truncate">{buddy.name}</p>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {buddy.goal}
                  </Badge>
                  {buddy.workoutToday && (
                    <span className="text-xs text-green-600 font-medium">
                      Workout today
                    </span>
                  )}
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Message
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default BuddiesSection;

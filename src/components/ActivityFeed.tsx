
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const activities = [
  {
    id: 1,
    user: {
      name: "Alex Johnson",
      avatar: "",
      initials: "AJ",
    },
    action: "completed a workout",
    workout: "Upper Body Strength",
    time: "45 min",
    timestamp: "2 hours ago",
  },
  {
    id: 2,
    user: {
      name: "Sarah Williams",
      avatar: "",
      initials: "SW",
    },
    action: "achieved a goal",
    achievement: "10,000 Steps",
    timestamp: "3 hours ago",
  },
  {
    id: 3,
    user: {
      name: "Michael Chen",
      avatar: "",
      initials: "MC",
    },
    action: "shared a workout",
    workout: "HIIT Cardio",
    time: "30 min",
    timestamp: "5 hours ago",
  },
  {
    id: 4,
    user: {
      name: "Jessica Lee",
      avatar: "",
      initials: "JL",
    },
    action: "joined a challenge",
    challenge: "30-Day Core Challenge",
    timestamp: "Yesterday",
  },
];

const ActivityFeed = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Activity Feed</CardTitle>
      </CardHeader>
      <CardContent className="max-h-[500px] overflow-y-auto">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex gap-3 animate-fade-in">
              <Avatar>
                <AvatarImage src={activity.user.avatar} alt={activity.user.name} />
                <AvatarFallback className="bg-fitConnect-accent text-white">
                  {activity.user.initials}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex flex-wrap gap-1 items-center">
                  <span className="font-medium">{activity.user.name}</span>
                  <span className="text-muted-foreground">{activity.action}</span>
                  {activity.workout && (
                    <Badge variant="outline" className="font-normal">
                      {activity.workout} {activity.time && `• ${activity.time}`}
                    </Badge>
                  )}
                  {activity.achievement && (
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200 font-normal">
                      {activity.achievement}
                    </Badge>
                  )}
                  {activity.challenge && (
                    <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 font-normal">
                      {activity.challenge}
                    </Badge>
                  )}
                </div>
                <div className="flex justify-between items-center mt-1">
                  <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                  <div className="flex gap-2">
                    {activity.workout && (
                      <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                        Try workout
                      </Button>
                    )}
                    <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
                      Like
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ActivityFeed;

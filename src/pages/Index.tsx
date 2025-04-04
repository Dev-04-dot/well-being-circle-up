
import React from "react";
import MainLayout from "@/components/MainLayout";
import UserStats from "@/components/UserStats";
import BuddiesSection from "@/components/BuddiesSection";
import ActivityFeed from "@/components/ActivityFeed";
import WorkoutCard from "@/components/WorkoutCard";

const featuredWorkouts = [
  {
    id: 1,
    title: "30-Min Full Body HIIT",
    creator: {
      name: "Alex Johnson",
      initials: "AJ",
    },
    duration: "30 min",
    difficulty: "intermediate",
    tags: ["HIIT", "Full Body", "No Equipment"],
    likes: 124,
    comments: 18,
    saved: true,
  },
  {
    id: 2,
    title: "Beginner Yoga Flow",
    creator: {
      name: "Sarah Williams",
      initials: "SW",
    },
    duration: "25 min",
    difficulty: "beginner",
    tags: ["Yoga", "Flexibility", "Relaxation"],
    likes: 98,
    comments: 12,
  },
  {
    id: 3,
    title: "Advanced Strength Training",
    creator: {
      name: "Michael Chen",
      initials: "MC",
    },
    duration: "45 min",
    difficulty: "advanced",
    tags: ["Strength", "Weights", "Gym"],
    likes: 156,
    comments: 24,
  },
];

const Index = () => {
  return (
    <MainLayout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold tracking-tight">Welcome to FitConnect</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <UserStats />
          </div>
          
          <div className="lg:col-span-1">
            <ActivityFeed />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-4">Featured Workouts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredWorkouts.map((workout) => (
              <WorkoutCard
                key={workout.id}
                title={workout.title}
                creator={workout.creator}
                duration={workout.duration}
                difficulty={workout.difficulty}
                tags={workout.tags}
                likes={workout.likes}
                comments={workout.comments}
                saved={workout.saved}
              />
            ))}
          </div>
        </div>
        
        <BuddiesSection />
      </div>
    </MainLayout>
  );
};

export default Index;

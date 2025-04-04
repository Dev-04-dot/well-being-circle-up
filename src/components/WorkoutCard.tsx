
import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, Share2, MessageSquare, Dumbbell } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface WorkoutCardProps {
  title: string;
  creator: {
    name: string;
    avatar?: string;
    initials: string;
  };
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  likes: number;
  comments: number;
  saved?: boolean;
}

const WorkoutCard = ({
  title,
  creator,
  duration,
  difficulty,
  tags,
  likes,
  comments,
  saved = false,
}: WorkoutCardProps) => {
  const [isLiked, setIsLiked] = React.useState(saved);
  const [likeCount, setLikeCount] = React.useState(likes);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setIsLiked(!isLiked);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-100 text-green-800";
      case "intermediate":
        return "bg-blue-100 text-blue-800";
      case "advanced":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-all duration-200 h-full">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={creator.avatar} alt={creator.name} />
              <AvatarFallback className="bg-fitConnect-primary text-white">
                {creator.initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium leading-none">{creator.name}</p>
              <p className="text-xs text-muted-foreground">Created this workout</p>
            </div>
          </div>
          <Badge variant="outline" className={cn("text-xs", getDifficultyColor(difficulty))}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center gap-2 mb-2">
          <Dumbbell className="h-4 w-4 text-fitConnect-primary" />
          <CardTitle className="text-lg">{title}</CardTitle>
        </div>
        <div className="text-sm text-muted-foreground mb-3">
          Duration: {duration}
        </div>
        <div className="flex flex-wrap gap-1 mb-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-2 border-t">
        <div className="flex gap-3">
          <Button 
            variant="ghost" 
            size="sm" 
            className={cn("flex items-center gap-1 px-2", isLiked && "text-red-500")} 
            onClick={handleLike}
          >
            <Heart className="h-4 w-4" />
            <span className="text-xs">{likeCount}</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex items-center gap-1 px-2">
            <MessageSquare className="h-4 w-4" />
            <span className="text-xs">{comments}</span>
          </Button>
        </div>
        <Button variant="ghost" size="sm" className="px-2">
          <Share2 className="h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default WorkoutCard;

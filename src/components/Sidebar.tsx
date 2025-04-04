
import React from "react";
import { 
  BarChart, 
  Calendar, 
  Dumbbell, 
  HeartPulse, 
  Home, 
  MessageCircle, 
  Settings, 
  Users 
} from "lucide-react";
import { 
  Sidebar as ShadcnSidebar, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuButton, 
  SidebarMenuItem, 
  SidebarGroup,
  SidebarGroupLabel,
  SidebarTrigger 
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Dashboard", active: true },
  { icon: Users, label: "My Buddies", badge: 2 },
  { icon: Dumbbell, label: "Workouts" },
  { icon: Calendar, label: "Schedule" },
  { icon: BarChart, label: "Progress" },
  { icon: MessageCircle, label: "Messages", badge: 3 },
  { icon: HeartPulse, label: "Health" },
  { icon: Settings, label: "Settings" },
];

const Sidebar = () => {
  return (
    <>
      <SidebarTrigger className="fixed bottom-4 right-4 z-40 md:hidden">
        <Button size="sm" variant="outline" className="rounded-full h-10 w-10 p-0 bg-background shadow-md">
          <Dumbbell className="h-5 w-5" />
        </Button>
      </SidebarTrigger>
      
      <ShadcnSidebar className="border-r">
        <SidebarContent className="pt-6">
          <div className="mb-6 px-4">
            <Button className="w-full" size="sm">
              Create Workout
            </Button>
          </div>
          
          <SidebarMenu>
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              {menuItems.map((item, index) => (
                <SidebarMenuItem key={index}>
                  <SidebarMenuButton 
                    className={cn(
                      "flex w-full justify-between items-center",
                      item.active && "bg-primary/10 text-primary"
                    )}
                  >
                    <div className="flex items-center">
                      <item.icon className="mr-2 h-5 w-5" />
                      <span>{item.label}</span>
                    </div>
                    {item.badge && (
                      <div className="h-5 w-5 rounded-full bg-fitConnect-primary flex items-center justify-center text-[10px] font-medium text-white">
                        {item.badge}
                      </div>
                    )}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarGroup>
          </SidebarMenu>
        </SidebarContent>
      </ShadcnSidebar>
    </>
  );
};

export default Sidebar;


import React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { useToast } from "@/components/ui/use-toast";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const { toast } = useToast();

  React.useEffect(() => {
    toast({
      title: "Welcome to FitConnect!",
      description: "Connect with fitness buddies and achieve your goals together.",
    });
  }, []);

  return (
    <SidebarProvider>
      <div className="min-h-screen flex flex-col w-full">
        <Navbar />
        <div className="flex flex-1 w-full">
          <Sidebar />
          <main className="flex-1 p-4 md:p-6 max-w-7xl mx-auto w-full">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default MainLayout;

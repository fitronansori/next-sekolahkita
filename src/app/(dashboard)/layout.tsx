import DashboardHeader from "@/components/layouts/dashboard/DashboardHeader";
import AppSidebar from "@/components/layouts/dashboard/Sidebar/AppSidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <DashboardHeader />
        {children}
      </main>
    </SidebarProvider>
  );
};
export default DashboardLayout;

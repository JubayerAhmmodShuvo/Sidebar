import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/context/ThemeContext";


export default function SidebarLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1 lg:ml-4 transition-all duration-200 ease-in-out pt-16 lg:pt-0">
          {children}
        </main>
      </div>
    </ThemeProvider>
  );
}
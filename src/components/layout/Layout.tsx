import Sidebar from "./Sidebar";
import Header from "./Header";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-0 md:ml-64 transition-all duration-300 overflow-hidden">
        <Header />
        <main className="p-6 bg-zinc-50 flex-1 max-w-full overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;

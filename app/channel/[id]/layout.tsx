import React from "react";
import Header from "@/components/common/Header";
import Sidebar from "@/components/common/Sidebar";

const ChannelLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <Sidebar />

      <main className="pt-14 md:pl-60 w-full">
        <div className="max-w-7xl mx-auto p-4 md:p-6">{children}</div>
      </main>
    </div>
  );
};

export default ChannelLayout;

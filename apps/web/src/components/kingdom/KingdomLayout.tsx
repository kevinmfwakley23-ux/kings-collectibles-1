import { ReactNode } from "react";

import { KingdomHeader } from "./KingdomHeader";
import { KingdomSidebar } from "./KingdomSidebar";
import { MainViewport } from "./MainViewport";

type KingdomLayoutProps = {
  children?: ReactNode;
};

export function KingdomLayout({
  children,
}: KingdomLayoutProps) {
  return (
    <div className="flex h-screen bg-stone-950 text-stone-100">
      <KingdomSidebar />

      <div className="flex flex-1 flex-col">
        <KingdomHeader />

        {children ?? <MainViewport />}
      </div>
    </div>
  );
}

import { Header } from "@/shared/components/header";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";

export const Route = createRootRouteWithContext()({
  component: () => (
    <div className="grid grid-rows-[auto,_1fr] h-full">
      <Header />
      <div className="h-full px-4">
        <Outlet />
      </div>
    </div>
  ),
});

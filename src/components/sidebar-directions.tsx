"use client"
import { TRPCReactProvider } from "@/trpc/client";
import { SidebarDirectionsFragment } from "./sidebar-directions-list";

export const SidebarDirections = () => {
  return (
    <TRPCReactProvider>
      <SidebarDirectionsFragment />
    </TRPCReactProvider>
  );
};

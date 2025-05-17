import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

interface NavbarItem {
  href: string;
  children: React.ReactNode;
}

interface Props {
  items: NavbarItem[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const NavbarSidebar = ({ open, onOpenChange, items }: Props) => {
  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="p-0 transition-none">
        <SheetHeader className="p-4 border-b">
          <div className="flex items-center">
            <SheetTitle>Menu</SheetTitle>
          </div>
        </SheetHeader>
        <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2 ">
          {items.map((item) => (
            <Link
              onClick={() => onOpenChange(false)}
              key={item.href}
              href={item.href}
              className={cn(
                "w-full text-left p-4 text-black bg-white h-12 hover:text-white hover:bg-black flex items-center font-medium text-base"
              )}
            >
              <span>{item.children}</span>
            </Link>
          ))}

          <div className="border-t">
            <Link
              onClick={() => onOpenChange(false)}
              prefetch
              href={"/sign-in"}
              className="w-full text-left p-4 text-black bg-white h-12 hover:text-white hover:bg-black flex items-center font-medium text-base"
            >
              Log in
            </Link>
            <Link
              onClick={() => onOpenChange(false)}
              prefetch
              href={"/sign-up"}
              className="w-full text-left p-4 text-black bg-white h-12 hover:text-white hover:bg-black flex items-center font-medium text-base"
            >
              Start selling
            </Link>
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

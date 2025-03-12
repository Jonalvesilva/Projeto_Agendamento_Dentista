"use client";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarContext,
} from "@/app/_components/shadcn/ui/sidebar";
import { LucideIcon, ChevronRight, Calendar } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "./shadcn/ui/collapsible";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const data = {
  navMain: [
    {
      icon: Calendar,
      title: "Agendamentos",
      url: "#",
      items: [
        {
          title: "Todos",
          url: "/geral",
        },
        {
          title: "Procurar",
          url: "/search",
        },
        {
          title: "Adicionar",
          url: "#",
        },
        {
          title: "Remover",
          url: "#",
        },
      ],
    },
  ],
};

export default function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const open = useContext(SidebarContext)?.open;
  const openMobile = useContext(SidebarContext)?.openMobile;

  return (
    <Sidebar
      collapsible="icon"
      {...props}
      className="overflow-y-auto overflow-x-hidden z-20"
    >
      <div className="flex flex-1 flex-col bg-gradient-to-tr from-orange-50 to-yellow-100 ">
        <SidebarHeader className="flex items-center justify-center my-4">
          <Image
            src="/profile.png"
            alt="profile"
            width={120}
            height={30}
            className="rounded-full"
            aria-label="Profile Picture"
          />

          {(open || openMobile) && (
            <p className="text-lg my-2">Matheus Silveira</p>
          )}
        </SidebarHeader>
        <SidebarContent>
          <NavMain items={data.navMain} />
        </SidebarContent>
        <SidebarFooter className="text-center">
          {(open || openMobile) && <span>Logout</span>}
        </SidebarFooter>
        <SidebarRail />
      </div>
    </Sidebar>
  );
}

function NavMain({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const open = useContext(SidebarContext)!.open;
  const setOpen = useContext(SidebarContext)!.setOpen;
  const setOpenMobile = useContext(SidebarContext)!.setOpenMobile;

  return (
    <SidebarGroup>
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem className="my-2">
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={item.title}>
                  {item.icon && (
                    <item.icon
                      onClick={() => {
                        !open ? setOpen(true) : "";
                      }}
                    />
                  )}
                  <span>{item.title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild>
                        <Link
                          href={subItem.url}
                          onClick={() => setOpenMobile(false)}
                        >
                          <span>{subItem.title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}

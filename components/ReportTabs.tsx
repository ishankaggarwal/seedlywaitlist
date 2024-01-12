"use client";
// import { Tabs, Tab } from "@nextui-org/react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ReactElement, useState } from "react";
import Image from "next/image";
import { 
  UserIcon, 
  BuildingOfficeIcon, 
  BuildingOffice2Icon, 
  ArrowTrendingUpIcon, 
  TableCellsIcon 
} from "@heroicons/react/20/solid"

interface Tab {
  id: string;
  label: string;
  image: string;
  icon: ReactElement;
}

export default function ReportTabs() {
  const iconClasses = "h-5 w-5 shrink-0 text-zinc-700";
  const tabs: Tab[] = [
    {
      id: "founder-profile",
      label: "Founder Profile",
      image: "/founder-profile.png",
      icon: <UserIcon className={iconClasses} />,
    },
    {
      id: "industry-overview",
      label: "Industry Overview",
      image: "/industry-overview.png",
      icon: <ArrowTrendingUpIcon className={iconClasses} />,
    },
    {
      id: "company-profile",
      label: "Company Profile",
      image: "/company-profile.png",
      icon: <BuildingOfficeIcon className={iconClasses} />,
    },
    {
      id: "competitive-landscape",
      label: "Competitive Landscape",
      image: "/competitive-landscape.png",
      icon: <BuildingOffice2Icon className={iconClasses} />,
    },
    {
      id: "public-comparables",
      label: "Public Comparables",
      image: "/public-comparables.png",
      icon: <TableCellsIcon className={iconClasses} />,
    },
  ];

  return (
    <Tabs defaultValue={tabs[0]?.id} className="flex flex-col gap-2 items-center">
      <TabsList className="flex flex-wrap gap-x-2 gap-y-1 h-fit max-w-xl mx-auto">
        {tabs.map((tab) => (
          <TabsTrigger
            value={tab.id}
            className="flex gap-2 py-2 px-3 rounded-md text-zinc-900 font-medium"
          >
            {tab.icon}
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent value={tab.id}>
          <Image
            src={tab.image}
            alt={`Screenshot of the ${tab.label} section Seedly's report`}
            width={2000}
            height={2000}
          />
        </TabsContent>
      ))}
    </Tabs>
  );
}

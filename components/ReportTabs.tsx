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
    <Tabs
      defaultValue={tabs[0]?.id}
      className="flex flex-col gap-2 items-center"
    >
      <TabsList className="w-full flex flex-wrap gap-x-2 gap-y-1 h-fit max-w-xl mx-auto">
        {tabs.map((tab) => (
          <TabsTrigger
            value={tab.id}
            className="relative bg-[#eaeaec] sm:bg-transparent w-full sm:w-auto flex justify-between gap-2 py-2 px-3 rounded-md text-zinc-900 font-medium"
          >
            {tab.icon}
            {/* <span className="text-left absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"> */}
            <span className="absolute sm:static top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 sm:translate-x-0 sm:translate-y-0">
              {tab.label}
            </span>
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

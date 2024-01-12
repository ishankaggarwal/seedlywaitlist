"use client";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { useState } from "react";
import Image from "next/image";

export default function TabsComponent() {
  const [selected, setSelected] = useState("Founder Profile");

  let tabs = [
    {
      id: "Founder Profile",
      label: "Founder Profile",
      content: "/founder-profile.png",
      image: "/founder.svg",
    },
    {
      id: "Company Profile",
      label: "Company Profile",
      content: "/company-profile.png",
      image: "/company-profile.svg",
    },
    {
      id: "Industry Overview",
      label: "Industry Overview",
      content: "/industry-outlook.png",
      image: "/industry.svg",
    },
    {
      id: "Competitive Landscape",
      label: "Competitive Landscape",
      content: "/competitive-landscape.png",
      image: "/competitive.svg",
    },
    {
      id: "Public Comparables",
      label: "Public Comparables",
      content: "/public-comparables.png",
      image: "/comparables.svg",
    },
  ];

  return (
    <div className="flex w-full flex-col">
      <Tabs
        variant="solid"
        selectedKey={selected}
        onSelectionChange={(key) => setSelected(key as string)}
        items={tabs}
        className="w-full mb-4"
      >
        {(item) => (
          <Tab key={item.id} className="flex gap-4 items-center flex-wrap">
            <div className="flex gap-1.5 items-center">
              {getIconComponent(item.id)}
              <span className="font-medium whitespace-nowrap">
                {item.label}
              </span>
            </div>
          </Tab>
        )}
      </Tabs>
      <Card className="w-full">
        <CardBody>
          <Image
            src={tabs.find((tab) => tab.id === selected)?.content || ""}
            alt={`${selected}`}
            width={650}
            height={400}
            className="mx-auto"
          />
        </CardBody>
      </Card>
    </div>
  );
}

function getIconComponent(tabId: any) {
  switch (tabId) {
    case "Founder Profile":
      return <Image src={`/founder.svg`} alt={tabId} width={16} height={16} />;
    case "Company Profile":
      return (
        <Image
          src={`/company-profile.svg`}
          alt={tabId}
          width={16}
          height={16}
        />
      );
    case "Public Comparables":
      return (
        <Image src={`/comparables.svg`} alt={tabId} width={16} height={16} />
      );
    case "Competitive Landscape":
      return (
        <Image src={`/competitive.svg`} alt={tabId} width={16} height={16} />
      );
    case "Industry Overview":
      return <Image src={`/industry.svg`} alt={tabId} width={16} height={16} />;

    default:
      return null;
  }
}

import React from "react";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAnalytics } from "react-icons/md";
import { FiActivity } from "react-icons/fi";

// Mock icon config
const demoCategoriesIcons: Record<string, React.ReactNode> = {
  all: <RxDashboard />,
  ecommerce: <MdOutlineAnalytics />,
  project: <FiActivity />,
  marketing: <span>📢</span>,
  ai: <span>🤖</span>,
  helpCenter: <span>❓</span>,
  apps: <span>📱</span>,
  accounts: <span>👤</span>,
  auth: <span>🔑</span>,
};

const tabList = [
  { id: "all", name: "Dashboard", img: "/assets/about1.jpg" },
  { id: "ecommerce", name: "Analytics", img: "/assets/dashbaord.svg" },
  { id: "project", name: "Action tracker", img: "/assets/dashbaord.svg" },
  {
    id: "marketing",
    name: "Performance tracker",
    img: "/assets/dashbaord.svg",
  },
  { id: "ai", name: "Marketing Tools", img: "/assets/dashbaord.svg" },
  { id: "helpCenter", name: "Support Center", img: "/assets/dashbaord.svg" },
  { id: "apps", name: "Apps", img: "/assets/dashbaord.svg" },
  { id: "accounts", name: "Accounts", img: "/assets/dashbaord.svg" },
  { id: "auth", name: "Auth", img: "/assets/dashbaord.svg" },
];

type TabsProps = {
  selectedTab: string;
  setSelectedTab: (id: string) => void;
};

export const Tabs: React.FC<TabsProps> = ({ selectedTab, setSelectedTab }) => {
  function classNames(...classes: (string | undefined | null | false)[]) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="md:max-w-2xl md:mx-50 mx-24 flex flex-col gap-4">
      {tabList.map((tab) => (
        <button
          key={tab.id}
          className={classNames(
            "font-semibold px-1 rounded-lg flex items-center w-full whitespace-nowrap gap-x-4 transition-colors duration-150 h-12 ",
            tab.id === selectedTab
              ? "text-primary bg-primary-subtle hover:texy-primary hover:bg-primary-subtle"
              : "text-gray-600 dark:text-gray-400 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-100 dark:hover:bg-gray-700"
          )}
          onClick={() => setSelectedTab(tab.id)}
        >
          <span className="text-3xl">{demoCategoriesIcons[tab.id]}</span>
          <span>{tab.name}</span>
        </button>
      ))}
    </div>
  );
};

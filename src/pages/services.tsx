import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineAnalytics } from "react-icons/md";
import { FiActivity } from "react-icons/fi";
import { GitGraph } from 'lucide-react';
import Marketing from "@/components/icons/marketing";
import Support from "@/components/icons/support";
import User from "@/components/icons/user";
import Insurance from "@/components/icons/insurance";

type Mode = "light" | "dark";

// Made mode optional
type DemoProps = {
  mode?: Mode;
};


type DemoItem = {
  id: string;
  name: string;
  path: string;
  img: string;
};

const allDemos: DemoItem[] = [
  {
    id: "dashboard1",
    name: "Dashboard",
    path: "/services",
    img: "/assets/Dp1.PNG",
  },
  {
    id: "ecommerce1",
    name: "Seller Stats",
    path: "/services",
    img: "/assets/dp2.PNG",
  },
];

const projectDemos: DemoItem[] = [
  {
    id: "project1",
    name: "Performance Tracker",
    path: "/services",
    img: "/assets/performce1.PNG",
  },
  {
    id: "project2",
    name: "Performance Tracker",
    path: "/services",
    img: "/assets/performce1.PNG",
  },
];

const ecommerceDemos: DemoItem[] = [
  {
    id: "ecommerce1",
    name: "Analytics",
    path: "/services",
    img: "/assets/an1.PNG",
  },
];

const aiDemos: DemoItem[] = [
  {
    id: "ai1",
    name: "Marketing Tools  ",
    path: "/services",
    img: "/assets/performce3.PNG",
  },
];



const marketingDemos: DemoItem[] = [
  {
    id: "marketing1",
    name: "Page 1 ",
    path: "/services",
    img: "/assets/performce1.PNG",
  },
  {
    id: "marketing2",
    name: "Page 2 ",
    path: "/services",
    img: "/assets/performce2.PNG",
  },
];

const helpCenterDemos: DemoItem[] = [
  {
    id: "helpcenter1",
    name: "Help Center",
    path: "/services",
    img: "/assets/support.PNG",
  },
];

const accountDemos: DemoItem[] = [
  {
    id: "account1",
    name: "User Account",
    path: "/services",
    img: "/assets/dashbaord.svg",
  },
];

const authDemos: DemoItem[] = [
  {
    id: "auth1",
    name: "Authentication",
    path: "/services",
    img: "/assets/dashbaord.svg",
  },
];

const demoList: Record<string, DemoItem[]> = {
  all: allDemos,
  project: projectDemos,
  ecommerce: ecommerceDemos,
  ai: aiDemos,
  marketing: marketingDemos,
  helpCenter: helpCenterDemos,
  accounts: accountDemos,
  auth: authDemos,
};

type TabItem = {
  id: string;
  name: string;
  img: string;
};

const tabList: TabItem[] = [
  {
    id: "all",
    name: "Dashboard",
    img: "/assets/dashbaord.svg",
  },
  {
    id: "ecommerce",
    name: "Analytics",
    img: "/assets/AT1.png",
  },
  {
    id: "project",
    name: "Action Tracker",
    img: "/assets/tracker-icon.jpg",
  },
  {
    id: "marketing",
    name: "Performance Tracker",
    img: "/assets/performance-icon.jpg",
  },
  {
    id: "ai",
    name: "Marketing Tools",
    img: "/assets/marketing-icon.jpg",
  },
  {
    id: "helpCenter",
    name: "Support Center",
    img: "/assets/support.svg",
  },
 
  {
    id: "accounts",
    name: "Accounts",
    img: "/assets/accounts-icon.jpg",
  },
  {
    id: "auth",
    name: "Auth",
    img: "/assets/auth-icon.jpg",
  },
];

const demoCategoriesIcons: Record<string, React.ReactNode> = {
  all: <RxDashboard />,
  ecommerce: <MdOutlineAnalytics />,
  project: <FiActivity />,
  marketing: (
    <span>
      <GitGraph />
    </span>
  ),
  ai: <span><Marketing /></span>,
  helpCenter: <span><Support /></span>,
 
  accounts: <span><User /></span>,
  auth: <span><Insurance /> </span>,
};


const DemoCard: React.FC<{
  id: string;
  name: string;
  path: string;
  img: string;
}> = ({ id, name, path, img }) => {
  return (
    <div className="md:w-96 lg:1/2 justify-center">
      <Link to={path}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="bg-gray-100 rounded-2xl border border-gray-100  shadow-lg  p-6 h-max"
        >
          <div className="rounded-xl   overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.05 }}
              className="-px-2 w-full shadow-lg  h-auto  object-cover"
              src={img}
              alt={name}
              style={{ aspectRatio: "4 / 3" }}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold">{name}</h3>
          </div>
        </motion.div>
      </Link>
    </div>
  );
};

type TabsProps = {
  selectedTab: string;
  setSelectedTab: (id: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ selectedTab, setSelectedTab }) => {
  function classNames(
    ...classes: (string | undefined | null | false)[]
  ): string {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <div className="md:max-w-7xl md:mx-50 mx-4 flex flex-col gap-4 mb-12">
      {tabList.map((tab) => (
        <button
          key={tab.id}
          className={classNames(
            "font-semibold px-4 rounded-lg flex items-center w-full whitespace-nowrap gap-x-4 transition-colors duration-150 h-12 ",
            tab.id === selectedTab
              ? "text-primary bg-primary-subtle hover:texy-primary hover:bg-primary-subtle"
              : "text-gray-600 dark:text-gray-800 hover:text-gray-900 hover:bg-gray-100 dark:hover:text-gray-100 dark:hover:bg-gray-900"
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

const Demos: React.FC<DemoProps> = ({ mode }) => {
  const [selectedTab, setSelectedTab] = useState("all");
  const navigate = useNavigate();

  const handleViewAllDemos = () => {
    navigate("/services");
  };

  return (
    <div id="demos" className="relative z-20 py-10 md:py-40">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, type: "spring", bounce: 0.1 }}
        viewport={{ once: true }}
      >
        <motion.h2 className="my-6 md:text-6xl text-4xl mx-10 md:mx-1 md:-mt-8 mt-12 font-bold">
          Built for Any Amazon Seller, Big or Small Seller
        </motion.h2>
        <motion.p className="mx-2 md:mx-auto md:max-w-7xl max-w-lg text-lg md:text-xl text-gray-600">
          Whether you need to analays your amazon seller data, an interactive
          dashboard, or a track actions and Performamce tracking, Uniq Heights
          is the ultimate solution
        </motion.p>
      </motion.div>
      <div>
        <div className="flex  gap-12">
          <div className="min-w-[250px]  hidden md:block">
            <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
          </div>
          <div className="grid grid-cols-1 mx-auto md:mr-60 md:grid-cols-2 gap-x-28 gap-y-6">
            <AnimatePresence>
              {(demoList[selectedTab] || []).map((demo) => (
                <DemoCard
                  key={demo.id}
                  id={demo.id}
                  name={demo.name}
                  path={demo.path}
                  img={demo.img}
                />
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Demos;

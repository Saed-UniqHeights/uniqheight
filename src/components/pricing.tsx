
"use client"; 
import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const features = [
  {
    category: "Accountability",
    items: [
      "Team Performance Tracking: Identifies which team members' actions drive the most significant results ",
      "Measurable ROI: Provides concrete metrics showing return on investment for each optimization action ",
      "Clear Attribution: Directly connects specific listing changes to performance improvements ",
      "Agency Oversight: Allows brands to hold agencies accountable with clear metrics on what changes actually worked",
    ],
  },
  {
    category: "Scalability",
    items: [
      "Replicable Success Models: Identifies winning strategies that can be applied across the entire product catalog ",
      "Efficient Portfolio Management: Enables managing more SKUs with the same resources by focusing efforts ",
      "Knowledge Transfer: Successful optimization patterns can be documented and taught to new team members ",
      "Cross-Market Application: Proven strategies can be efficiently deployed to new marketplace expansions ",
    ],
  },
  {
    category: "Operational Benefits",
    items: [
      "Reduced Learning Curve: New team members can quickly see what actions historically drove results",
      "Faster Optimization Cycles: Immediate feedback on changes eliminates waiting periods to determine effectiveness",
      "Elimination of Redundant Work: Prevents teams from repeatedly trying strategies that data shows are ineffective ",
      "Budget Protection: Prevents spending on optimization tactics that don't deliver measurable improvements",
    ],
  },
  {
    category: "Management Improvements",
    items: [
      "Data-Driven Decision Making: Replaces guesswork with concrete evidence showing which specific actions drive results ",
      "Resource Optimization: Allows sellers to allocate budget and time only to high-impact optimization activities",
      "Prioritization Framework: Creates clear hierarchies of which listing changes deserve attention first based on ROI",
    ],
  },
  {
    category: "Competitive Advantage",
    items: [
      "Faster Response to Market Changes: Quickly identify which responsive actions are actually working ",
      "Optimization Velocity: Outpace competitors by eliminating trial-and-error approaches to listing improvements",
      "Higher Profit Margins: Maintain better margins by investing only in changes that demonstrably improve performance ",
      "First-Mover Advantage: Find winning strategies before competitors through systematic testing with clear results",
    ],
  },
];

export default function PricingSection() {

    const [selectedSKU, setSelectedSKU] = React.useState<string | null>(null);
    const [isYearly, setIsYearly] = React.useState(false);
    
    const pricing: Record<string, { monthly: number; yearly: number }> = {
      "1-3": { monthly: 49.99, yearly: 399.99 },
      "3-5": { monthly: 79.99, yearly: 459.99 },
      "5-10": { monthly: 110.99, yearly: 799.99 },
      "10-20": { monthly: 139.99, yearly: 999.99 },
      "20-100": { monthly: 149.99, yearly: 1499.99 },
    };

    const getPrice = () => {
      if (!selectedSKU) return null;
      return isYearly
        ? pricing[selectedSKU].yearly
        : pricing[selectedSKU].monthly;
    };

    const getPerSkuPrice = () => {
    if (!selectedSKU) return null;

    const [min, max] = selectedSKU.split("-").map(Number);
    const averageSKU = (min + max) / 2;
    const price = getPrice();
    return price ? (price / averageSKU).toFixed(2) : null;
    };
    
    return (
      <section className="max-w-7xl mx-auto  flex min-h-screen flex-col items-center justify-between">
        <div className="flex flex-col min-h-screen pt-3 md:pt-8 relative overflow-hidde">
          <span className="text-4xl  md:text-4xl lg:text-8xl font-semibold bg-gradient-to-t from-blue-700 to-blue-400 bg-clip-text text-transparent mx-12 md:mx-auto lg:mx-auto text-center mt-4  relative z-20">
            Pricing Based on SKU Count
          </span>
          <span className="text-lg md:text-2xl text-center mt-2 mx-12 md:mx-auto lg:mx-auto md:mt-8 tracking-wider relative z-20">
            Simple, Transparent Pricing Based on Your SKU Count
          </span>

          <div className="mt-8 px-1">
            <Select onValueChange={(value) => setSelectedSKU(value)}>
              <SelectTrigger className="w-full text-base rounded-xl hover:border-blue-500 b bg-white shadow-sm px-4 py-6">
                <SelectValue placeholder="Select based on your SKU count" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="1-3">1-3</SelectItem>
                  <SelectItem value="3-5">3-5</SelectItem>
                  <SelectItem value="5-10">5-10</SelectItem>
                  <SelectItem value="10-20">10-20</SelectItem>
                  <SelectItem value="20-100">20-100</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          {selectedSKU && (
            <div className="mt-4 px-6 mx-1 rounded-xl  shadow-sm text-right text-base hover:border-blue-500 text-black bg-white py-3 ">
              <span className="font-bold">
                {isYearly ? "Yearly" : "Monthly"} Price: £{getPrice()}
              </span>
              <span></span>
            </div>
          )}
          <div className="flex space-x-[157px] md:space-x-[800px] lg:space-x-[960px] lg mt-4 px-4 mx-1 rounded-xl   shadow-sm  text-base hover:border-blue-500 text-gray-500 bg-white py-3 ">
            <span className="text-le text-black ">Choose your plan</span>
            <div className="flex space-x-2 justify-center items-center text-black">
              <Label htmlFor="plan-switch">
                {isYearly ? "Yearly" : "Monthly"}
              </Label>
              <Switch
                id="airplane-mode"
                className="-absolute inset-y-0 right-0 "
                checked={isYearly}
                onCheckedChange={setIsYearly}
              />
            </div>
          </div>

          <div className="bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] p-1 mt-10 md:mt-10 shado  max-w-4xl md:max-w-screen">
            <h2 className="text-3xl font-bold mb-6 text-center ">
              What's Included in Every Plan
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full border rounded-lg overflow-hidden">
                <thead className="bg-blue-500 text-white text-left">
                  <tr>
                    <th className="p-4 w-1/4">Features</th>
                    <th className="p-4">Information</th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr
                      key={feature.category}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-300"}
                    >
                      <td className="p-4 font-semibold align-top">
                        {feature.category}
                      </td>
                      <td className="p-4 space-y-2">
                        {feature.items.map((item, idx) => (
                          <p key={idx} className="text-sm leading-relaxed">
                            {item}
                          </p>
                        ))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <span className="text-sm/8 text-gray-500 mt-6  block text-center">
              All features are included in every plan. No hidden fees or
              By connecting actions directly to performance metrics, UNIQ
              Heights transforms Amazon selling from an intuition-based process
              to a data-driven operation, significantly improving efficiency and
              profitability
            </span>
          </div>
        </div>
      </section>
    );
}

"use client";

import classNames from "classnames";
import { useState } from "react";

const tabs = ["League", "Conference", "Division", "Wildcard"] as const;

interface TabsProps {
  getTable: (tableName: string) => void;
}

export const Tabs = ({ getTable }: TabsProps) => {
  const [isActive, setIsActive] = useState("League");
  return (
    <div className="flex gap-10 text-xl pl-4 pt-6 mb-5 border-b">
      {tabs.map((tab) => (
        <div
          className={classNames(`cursor-pointer font-thin`, {
            "border-b-2 font-medium": isActive === tab,
          })}
          key={tab}
        >
          <h1 className="text-sm">
            <button
              onClick={() => {
                setIsActive(tab);
                getTable(tab);
              }}
            >
              {tab}
            </button>
          </h1>
        </div>
      ))}
    </div>
  );
};

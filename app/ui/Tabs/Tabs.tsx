"use client";

const tabs = ["League", "Conference", "Division", "Wildcard"] as const;

interface TabsProps {
  getTable: (tableName: string) => void;
}

export const Tabs = ({ getTable }: TabsProps) => {
  return (
    <div className="flex gap-10 text-xl py-6">
      {tabs.map((tab) => (
        <div className="cursor-pointer" key={tab}>
          <h1>
            <button onClick={() => getTable(tab)}>{tab}</button>
          </h1>
        </div>
      ))}
    </div>
  );
};

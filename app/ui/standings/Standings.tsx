"use client";
import { useGetStandings } from "@/app/lib/services/teams";
import { Tabs } from "../Tabs";
import { useState } from "react";
import { getTable } from "./utils/getTable";

export const Standings = () => {
  const { data, isLoading, isSuccess } = useGetStandings();

  const [table, setTable] = useState("League");
  const Table = data && getTable(table, data);
  return (
    <div className="w-full">
      <Tabs getTable={setTable} />
      <div className="bg-white rounded-lg">
        {/* <h2 className="text-black text-3xl py-6 px-4 font-bold">{table}</h2> */}
        {Table}
      </div>
    </div>
  );
};

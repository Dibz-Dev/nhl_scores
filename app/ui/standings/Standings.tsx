"use client";
import { useGetStandings } from "@/app/lib/services/teams";
import { Tabs } from "../Tabs";
import { useState } from "react";
import { getTable } from "./utils/getTable";

export const Standings = () => {
  const { data, isLoading, isSuccess } = useGetStandings();

  const [table, setTable] = useState("League");
  const Table = data && getTable(table, data);
  console.log(data);
  return (
    <div className="w-full">
      <Tabs getTable={setTable} />
      <div className="bg-white rounded-lg">{Table}</div>
    </div>
  );
};

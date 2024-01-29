"use-client";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "../../table";
import { standingsColumns } from "../standingsColumns";
import { StandingsColumns } from "@/app/lib/services/teams";
import { WildcardType } from "../utils/wildcardTransformer";

interface WildcardTableProps {
  data: WildcardType["wildcardEast"];
}

export const WildcardTable = ({ data }: WildcardTableProps) => {
  const wildcardColumns: ColumnDef<StandingsColumns>[] = (
    [] as ColumnDef<StandingsColumns>[]
  ).concat(
    {
      header: "Rank",
      accessorKey: "wildcardSequence",
    },
    ...standingsColumns
  );
  return (
    <div className="flex flex-col gap-y-20">
      <h2>Wildcard</h2>
      <Table data={data} columns={wildcardColumns} />
    </div>
  );
};

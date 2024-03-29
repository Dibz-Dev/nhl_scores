"use-client";
import { ColumnDef } from "@tanstack/react-table";
import { Table } from "../../table";
import { standingsColumns } from "../standingsColumns";
import { StandingsColumns } from "@/app/lib/services/teams";
import { WildcardType } from "../utils/wildcardTransformer";
import { divisionColumns } from "../divisionTable/DivisionTable";

interface WildcardTableProps {
  data: WildcardType;
}

export const wildcardColumns: ColumnDef<StandingsColumns>[] = (
  [] as ColumnDef<StandingsColumns>[]
).concat(
  {
    header: "Rank",
    accessorKey: "wildcardSequence",
  },
  ...standingsColumns
);

export const WildcardTable = ({ data }: WildcardTableProps) => {
  return (
    <div className="flex flex-col gap-y-8 text-black">
      <div>
        <h2 className="py-4 px-4 text-2xl">Metropolitan</h2>
        <Table data={data.metropolitan} columns={divisionColumns} />
      </div>

      <div>
        <h2 className="py-4 px-4 text-2xl">Atlantic</h2>
        <Table data={data.atlantic} columns={divisionColumns} />
      </div>

      <div>
        <Table data={data.wildcardEast} columns={wildcardColumns} />
      </div>

      <div>
        <h2 className="py-4 px-4 text-2xl">Pacific </h2>
        <Table data={data.pacific} columns={divisionColumns} />
      </div>

      <div>
        <h2 className="py-4 px-4 text-2xl">Central</h2>
        <Table data={data.central} columns={divisionColumns} />
      </div>
      <div>
        <Table data={data.wildcardWest} columns={wildcardColumns} />
      </div>
    </div>
  );
};

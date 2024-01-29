import { ColumnDef } from "@tanstack/react-table";
import { Table } from "../../table";
import { standingsColumns } from "../standingsColumns";
import { ConferenceType } from "../utils/conferenceTransformer";
import { StandingsColumns } from "@/app/lib/services/teams";

type ConferenceTableProps = {
  data: ConferenceType;
};

export const ConferenceTable = ({ data }: ConferenceTableProps) => {
  const conferenceColumns: ColumnDef<StandingsColumns>[] = (
    [] as ColumnDef<StandingsColumns>[]
  ).concat(
    {
      header: "Rank",
      accessorKey: "conferenceSequence",
    },
    ...standingsColumns
  );
  console.log(conferenceColumns);
  return (
    <div className="flex flex-col gap-y-8 text-black">
      <div>
        <h2 className="py-4 px-4 text-2xl">Eastern Conference</h2>
        <Table data={data.eastern} columns={conferenceColumns} />
      </div>

      <div>
        <h2 className="py-4 px-4 text-2xl">Western Conference</h2>
        <Table data={data.western} columns={conferenceColumns} />
      </div>
    </div>
  );
};

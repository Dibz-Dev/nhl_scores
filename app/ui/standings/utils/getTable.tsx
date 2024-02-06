import { StandingsColumns } from "@/app/lib/services/teams";
import { Table } from "../../table";
import { standingsColumns } from "../standingsColumns";
import { DivisionTable } from "../divisionTable/DivisionTable";
import { divisionTransformer } from "./divisionTransformer";
import { ConferenceTable } from "../conferenceTable/ConferenceTable";
import { conferenceTransformer } from "./conferenceTransformer";
import { WildcardTable } from "../wildcardTable/WildcardTable";
import { wildcardTransformer } from "./wildcardTransformer";
import { ColumnDef } from "@tanstack/react-table";

export const leagueColumns: ColumnDef<StandingsColumns>[] = (
  [] as ColumnDef<StandingsColumns>[]
).concat(
  {
    header: "Rank",
    accessorKey: "leagueSequence",
  },
  ...standingsColumns
);

export const getTable = (
  tableName: string,
  data: StandingsColumns[]
): React.ReactNode => {
  switch (tableName) {
    case "League":
      return <Table data={data} columns={leagueColumns} />;
    case "Division":
      return <DivisionTable data={divisionTransformer(data)} />;
    case "Conference":
      return <ConferenceTable data={conferenceTransformer(data)} />;
    case "Wildcard":
      return <WildcardTable data={wildcardTransformer(data)} />;
    default:
      return <></>;
  }
};

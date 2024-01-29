import { TeamStandings } from "@/app/lib/services/teams";
import { Table } from "../../table";
import { standingsColumns } from "../standingsColumns";
import { DivisionTable } from "../divisionTable/DivisionTable";
import { divisionTransformer } from "./divisionTransformer";
import { ConferenceTable } from "../conferenceTable/ConferenceTable";
import { conferenceTransformer } from "./conferenceTransformer";
import { WildcardTable } from "../wildcardTable/WildcardTable";
import { wildcardTransformer } from "./wildcardTransformer";

export const getTable = (
  tableName: string,
  data: TeamStandings
): React.ReactNode => {
  switch (tableName) {
    case "League":
      return <Table data={data.standings} columns={standingsColumns} />;
    case "Division":
      return <DivisionTable data={divisionTransformer(data)} />;
    case "Conference":
      return <ConferenceTable data={conferenceTransformer(data)} />;
    // case "Wildcard":
    //   return <WildcardTable data={wildcardTransformer(data)} />;
    default:
      return <></>;
  }
};

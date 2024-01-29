import { StandingsColumns, TeamStandings } from "@/app/lib/services/teams";

const divisions = ["metropolitan", "atlantic", "pacific", "central"] as const;
export type DivType = {
  [Property in (typeof divisions)[number]]: StandingsColumns[];
};

export const divisionTransformer = (data: TeamStandings): DivType => {
  return {
    metropolitan: data.standings.filter(
      (div) => div.divisionName === "Metropolitan"
    ),
    atlantic: data.standings.filter((div) => div.divisionName === "Atlantic"),
    pacific: data.standings.filter((div) => div.divisionName === "Pacific"),
    central: data.standings.filter((div) => div.divisionName === "Central"),
  };
};

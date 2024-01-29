import { StandingsColumns, TeamStandings } from "@/app/lib/services/teams";
import { DivType } from "./divisionTransformer";

const sections = ["wildcardEast", "wildcardWest"] as const;
export type WildcardType = DivType & {
  [Property in (typeof sections)[number]]: StandingsColumns[];
};

export const wildcardTransformer = (data: TeamStandings): WildcardType => {
  return {
    metropolitan: data.standings.filter(
      (div) => div.divisionName === "Metropolitan" && div.divisionSequence <= 3
    ),
    atlantic: data.standings.filter(
      (div) => div.divisionName === "Atlantic" && div.divisionSequence <= 3
    ),
    wildcardEast: data.standings.filter(
      (div) => div.conferenceName === "Eastern" && div.wildcardSequence
    ),
    pacific: data.standings.filter(
      (div) => div.divisionName === "Pacific" && div.divisionSequence <= 3
    ),
    central: data.standings.filter(
      (div) => div.divisionName === "Central" && div.divisionSequence <= 3
    ),
    wildcardWest: data.standings.filter(
      (div) => div.conferenceName === "Western" && div.wildcardSequence
    ),
  };
};

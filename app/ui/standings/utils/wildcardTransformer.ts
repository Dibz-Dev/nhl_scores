import { StandingsColumns, TeamStandings } from "@/app/lib/services/teams";

const sections = ["wildcardEast", "wildcardWest"] as const;
export type WildcardType = {
  [Property in (typeof sections)[number]]: StandingsColumns[];
};

export const wildcardTransformer = (data: TeamStandings): WildcardType => {
  return {
    wildcardEast: data.standings.filter(
      (div) => div.conferenceName === "Eastern" && div.wildcardSequence
    ),

    wildcardWest: data.standings.filter(
      (div) => div.conferenceName === "Western" && div.wildcardSequence
    ),
  };
};

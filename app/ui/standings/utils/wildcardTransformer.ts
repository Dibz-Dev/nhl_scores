import { StandingsColumns } from "@/app/lib/services/teams";
import { DivType } from "./divisionTransformer";

const sections = ["wildcardEast", "wildcardWest"] as const;
export type WildcardType = DivType & {
  [Property in (typeof sections)[number]]: StandingsColumns[];
};

export const wildcardTransformer = (data: StandingsColumns[]): WildcardType => {
  return {
    metropolitan: data.filter(
      (div) => div.divisionName === "Metropolitan" && div.divisionSequence <= 3
    ),
    atlantic: data.filter(
      (div) => div.divisionName === "Atlantic" && div.divisionSequence <= 3
    ),
    wildcardEast: data.filter(
      (div) => div.conferenceName === "Eastern" && div.wildcardSequence
    ),
    pacific: data.filter(
      (div) => div.divisionName === "Pacific" && div.divisionSequence <= 3
    ),
    central: data.filter(
      (div) => div.divisionName === "Central" && div.divisionSequence <= 3
    ),
    wildcardWest: data.filter(
      (div) => div.conferenceName === "Western" && div.wildcardSequence
    ),
  };
};

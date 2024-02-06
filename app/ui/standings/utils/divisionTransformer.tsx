import { StandingsColumns } from "@/app/lib/services/teams";

const divisions = ["metropolitan", "atlantic", "pacific", "central"] as const;
export type DivType = {
  [Property in (typeof divisions)[number]]: StandingsColumns[];
};

export const divisionTransformer = (data: StandingsColumns[]): DivType => {
  return {
    metropolitan: data.filter((div) => div.divisionName === "Metropolitan"),
    atlantic: data.filter((div) => div.divisionName === "Atlantic"),
    pacific: data.filter((div) => div.divisionName === "Pacific"),
    central: data.filter((div) => div.divisionName === "Central"),
  };
};

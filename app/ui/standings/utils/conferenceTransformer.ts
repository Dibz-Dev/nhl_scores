import { StandingsColumns } from "@/app/lib/services/teams";

export interface ConferenceType {
  eastern: StandingsColumns[];
  western: StandingsColumns[];
}

export const conferenceTransformer = (
  data: StandingsColumns[]
): ConferenceType => {
  return {
    eastern: data.filter((team) => team.conferenceName === "Eastern"),
    western: data.filter((team) => team.conferenceName === "Western"),
  };
};

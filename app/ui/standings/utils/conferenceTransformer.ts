import { StandingsColumns, TeamStandings } from "@/app/lib/services/teams";

export interface ConferenceType {
  eastern: StandingsColumns[];
  western: StandingsColumns[];
}

export const conferenceTransformer = (data: TeamStandings): ConferenceType => {
  return {
    eastern: data.standings.filter((team) => team.conferenceName === "Eastern"),
    western: data.standings.filter((team) => team.conferenceName === "Western"),
  };
};

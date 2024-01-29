import axios, { AxiosError, AxiosResponse } from "axios";
import {
  UseQueryOptions,
  UseQueryResult,
  useQuery,
} from "@tanstack/react-query";
import { Standings } from "@/app/ui/standings";
const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export interface UseAxiosQueryOptions<TData>
  extends UseQueryOptions<TData, Error> {
  delay?: number;
}
export type StandingsColumns = TeamStandings["standings"][0];
export interface TeamStandings {
  standings: [
    {
      conferenceAbbrev: string;
      conferenceHomeSequence: number;
      conferenceL10Sequence: number;
      conferenceName: string;
      conferenceRoadSequence: number;
      conferenceSequence: number;
      date: string;
      divisionAbbrev: string;
      divisionHomeSequence: number;
      divisionL10Sequence: number;
      divisionName: string;
      divisionRoadSequence: number;
      divisionSequence: number;
      gameTypeId: number;
      gamesPlayed: number;
      goalAgainst: number;
      goalDifferential: number;
      goalDifferentialPctg: number;
      goalFor: number;
      goalsForPctg: number;
      homeGamesPlayed: number;
      homeGoalDifferential: number;
      homeGoalsAgainst: number;
      homeGoalsFor: number;
      homeLosses: number;
      homeOtLosses: number;
      homePoints: number;
      homeRegulationPlusOtWins: number;
      homeRegulationWins: number;
      homeTies: number;
      homeWins: number;
      l10GamesPlayed: number;
      l10GoalDifferential: number;
      l10GoalsAgainst: number;
      l10GoalsFor: number;
      l10Losses: number;
      l10OtLosses: number;
      l10Points: number;
      l10RegulationPlusOtWins: number;
      l10RegulationWins: number;
      l10Ties: number;
      l10Wins: number;
      leagueHomeSequence: number;
      leagueL10Sequence: number;
      leagueRoadSequence: number;
      leagueSequence: number;
      losses: number;
      otLosses: number;
      placeName: { default: string };
      pointPctg: number;
      points: number;
      regulationPlusOtWinPctg: number;
      regulationPlusOtWins: number;
      regulationWinPctg: number;
      regulationWins: number;
      roadGamesPlayed: number;
      roadGoalDifferential: number;
      roadGoalsAgainst: number;
      roadGoalsFor: number;
      roadLosses: number;
      roadOtLosses: number;
      roadPoints: number;
      roadRegulationPlusOtWins: number;
      roadRegulationWins: number;
      roadTies: number;
      roadWins: number;
      seasonId: number;
      shootoutLosses: number;
      shootoutWins: number;
      streakCode: string;
      streakCount: number;
      teamAbbrev: { default: string };
      teamCommonName: { default: string };
      teamLogo: string;
      teamName: {
        default: string;
        fr: string;
      };
      ties: number;
      waiversSequence: number;
      wildcardSequence: number;
      winPctg: number;
      wins: number;
    }
  ];
  wildCardIndicator: boolean;
}

const teamsApi = {
  getStandings: async (): Promise<TeamStandings> => {
    const res: AxiosResponse<TeamStandings> = await axios.get(
      `${baseUrl}/teams/standings`
    );
    return res.data;
  },
};

export const useGetStandings = (): UseQueryResult<
  TeamStandings,
  AxiosError
> => {
  return useQuery<TeamStandings, AxiosError>({
    queryKey: ["standings"],
    queryFn: () => teamsApi.getStandings(),
  });
};

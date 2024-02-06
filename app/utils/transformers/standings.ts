import { TeamStandings } from "@/app/lib/services/teams";

export const getColumnData = (data: TeamStandings) => {
  const standings = [];

  return data.standings.map((item) => {
    standings.push({
      leagueSequence: item.leagueSequence,
      conferenceSequence: item.conferenceSequence,
      divisionSequence: item.divisionSequence,
      wildcardSequence: item.wildcardSequence,
      team: item.teamName.default,
      gamesPlayed: item.gamesPlayed,
      wins: item.wins,
      losses: item.losses,
      ot: item.otLosses,
      points: item.points,
      pointsPctg: item.pointPctg,
      regulationWins: item.regulationWins,
      reulationOtWins: item.regulationPlusOtWins,
      goalsFor: item.goalFor,
      goalsAgainst: item.goalAgainst,
      goalDiff: item.goalDifferential,
      home: `${item.homeWins}-${item.homeLosses}-${item.homeOtLosses}`,
      away: `${item.roadWins}-${item.roadLosses}-${item.roadOtLosses}`,
      so: `${item.shootoutWins}-${item.shootoutLosses}`,
      l10: `${item.l10Wins}-${item.l10Losses}-${item.l10OtLosses}`,
      strk: `${item.streakCode}${item.streakCount}`,
    });
  });
};

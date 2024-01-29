import { StandingsColumns, TeamStandings } from "@/app/lib/services/teams";
import { Row, createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper<StandingsColumns>();
export const standingsColumns = [
  columnHelper.display({
    header: "Team",
    cell: (props) => <div>{props.row.original.teamName.default}</div>,
  }),
  {
    header: "GP",
    accessorKey: "gamesPlayed",
  },
  {
    header: "W",
    accessorKey: "wins",
  },
  {
    header: "L",
    accessorKey: "losses",
  },
  {
    header: "OT",
    accessorKey: "otLosses",
  },
  {
    header: "PTS",
    accessorKey: "points",
  },
  {
    header: "P%",
    accessorKey: "pointPctg",
  },
  {
    header: "RW",
    accessorKey: "regulationWins",
  },
  {
    header: "ROW",
    accessorKey: "regulationPlusOtWins",
  },
  {
    header: "GF",
    accessorKey: "goalFor",
  },
  {
    header: "GA",
    accessorKey: "goalAgainst",
  },
  {
    header: "Diff",
    accessorKey: "goalDifferential",
  },
  {
    header: "Home",
    accessorKey: "homeWins",
  },
  {
    header: "Away",
    accessorKey: "roadWins",
  },
  {
    header: "S/O",
    accessorKey: "shootoutWins",
  },
  {
    header: "L10",
    accessorKey: "l10Wins", //Update with l10 transformer
  },
  {
    header: "Strk",
    accessorKey: "streakCount", //update with streakCount + streakCode
  },
];

import { StandingsColumns } from "@/app/lib/services/teams";
import { createColumnHelper } from "@tanstack/react-table";
import classNames from "classnames";

const columnHelper = createColumnHelper<StandingsColumns>();
export const standingsColumns = [
  {
    header: "Team",
    accessorKey: "teamName",
  },
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
    accessorKey: "pointsPctg",
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
    accessorKey: "goalsFor",
  },
  {
    header: "GA",
    accessorKey: "goalsAgainst",
  },
  columnHelper.display({
    header: "Diff",
    cell: (props) => {
      const diff = props.row.original.goalDiff;
      return (
        <div
          className={classNames("text-green-600", { "text-red-600": diff < 0 })}
        >
          {props.row.original.goalDiff}
        </div>
      );
    },
  }),
  {
    header: "Home",
    accessorKey: "homeRecordl10",
  },
  {
    header: "Away",
    accessorKey: "roadRecordl10",
  },
  {
    header: "S/O",
    accessorKey: "so",
  },
  {
    header: "L10",
    accessorKey: "l10",
  },
  {
    header: "Strk",
    accessorKey: "strk",
  },
];

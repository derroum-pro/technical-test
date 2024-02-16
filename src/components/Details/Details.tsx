import { Match } from "../../utils/types";
import { ExpandableCard } from "./ExpandableCard";

interface DetailsProps {
  timePlayed: number;
  wins: Partial<Match>[];
  losses: Partial<Match>[];
  playerId: string;
}

export const Details = ({
  playerId,
  wins,
  losses,
  timePlayed,
}: DetailsProps) => {
  return (
    <div>
      <p className="">{`Played: ${wins.length + losses.length} games`}</p>
      <p className="">{`Time Played: ${timePlayed} hours`}</p>
      <ExpandableCard type="wins" details={wins} playerId={playerId} />
      <ExpandableCard type="losses" details={losses} playerId={playerId} />
    </div>
  );
};

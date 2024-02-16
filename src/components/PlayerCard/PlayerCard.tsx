import { PlayerWithDetails } from "../../utils/types";
import { CardHeader } from "../CardHeader/CardHeader";
import { StatsCard } from "../StatsCard/StatsCard";
import { Details } from "../Details/Details";

interface PlayerCardProps {
  player: PlayerWithDetails;
}

export const PlayerCard = ({ player }: PlayerCardProps) => {
  return (
    <div
      className="m-5 w-80 p-5 shadow-md rounded-md "
      data-testid={`player-${player.id}`}
    >
      <CardHeader
        name={player.firstname + " " + player.lastname}
        shortName={player.shortname}
        sex={player.sex}
        country={player.country}
        pictureUrl={player.picture.url}
      />
      <StatsCard stats={player.stats} />
      <Details
        playerId={player.id}
        wins={player.wins}
        losses={player.loses}
        timePlayed={Math.round(player.timePlayed / (3600 * 60))}
      />
    </div>
  );
};

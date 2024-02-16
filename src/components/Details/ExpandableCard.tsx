import { useState } from "react";
import { Match } from "../../utils/types";
import { GameDetails } from "./GameDetails";

interface ExpandableCardProps {
  playerId: string;
  type: "wins" | "losses";
  details: Partial<Match>[];
}
export const ExpandableCard = ({
  playerId,
  type,
  details,
}: ExpandableCardProps) => {
  const [showDetails, setShowDetails] = useState(false);

  const getOpponent = (game: Partial<Match>) => {
    let opponent = game.players?.find((player) =>
      type === "wins"
        ? player.id !== game.winner?.id
        : player.id === game.winner?.id
    );
    return `${opponent?.firstname} ${opponent?.lastname}`;
  };

  return (
    <div
      className={`${
        type === "losses" ? "bg-red-200" : "bg-green-200"
      } pb-1 px-2 mt-2 rounded-md`}
      data-testid={`player-${playerId}-${type}`}
    >
      <div className="flex justify-between py-1  align-middle items-center">
        <p>{`${type}: ${details.length || 0}`}</p>
        <button
          type="button"
          className="text-2xl"
          onClick={() => setShowDetails((prev) => !prev)}
          data-testId={`expand-player-${playerId}-${type}`}
        >
          {showDetails ? <span>&times;</span> : <span>&rsaquo;</span>}
        </button>
      </div>
      {showDetails ? (
        <div
          className="overflow-scroll max-h-40"
          data-testid={`expand-player-${playerId}-${type}-details`}
        >
          {details.map((game) => {
            return (
              <GameDetails
                key={game.id}
                vs={getOpponent(game)}
                start={new Date(game.startTime!)}
                end={new Date(game.endTime!)}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

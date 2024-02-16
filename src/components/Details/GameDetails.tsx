import { formatDate, formatTime } from "../../utils/formatter";

interface GameDetailsProps {
  vs: string;
  start: Date;
  end: Date;
}

export const GameDetails = ({ vs, start, end }: GameDetailsProps) => {
  return (
    <div className="flex flex-col bg-white px-2 py-1 my-2 rounded-sm text-sm gap-1">
      <p>{`VS : ${vs}`}</p>
      <p>{`Date: ${formatDate(start)}`}</p>
      <div className="flex justify-between">
        <p>{`Start: ${formatTime(start)}`}</p>
        <p>{`End: ${formatTime(end)}`}</p>
      </div>
    </div>
  );
};

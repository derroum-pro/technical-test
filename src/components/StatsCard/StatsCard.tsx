import { Stats } from "../../utils/types";
import { StatsCardItem } from "./StatsCardItem";

interface StatsCardProps {
  stats: Stats;
}

export const StatsCard = ({ stats }: StatsCardProps) => {
  return (
    <div className=" flex flex-row border p-2 my-3 justify-between">
      <StatsCardItem type="age" value={stats.age} />
      <StatsCardItem type="points" value={stats.points} />
      <StatsCardItem type="height" value={stats.height} />
      <StatsCardItem type="weight" value={stats.weight} />
      <StatsCardItem type="rank" value={stats.rank} />
    </div>
  );
};

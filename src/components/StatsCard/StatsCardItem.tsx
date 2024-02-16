import { Stats } from "../../utils/types";

interface StatsCardItemProps {
  type: keyof Stats;
  value: number;
}

export const StatsCardItem = ({ type, value }: StatsCardItemProps) => {
  const getValue = () => {
    switch (type) {
      case "height":
        return `${value} cm`;
      case "weight":
        return `${value / 1000} kg`;
      case "points":
      case "rank":
      case "age":
        return value;
      default:
        return null;
    }
  };
  return (
    <div className="flex flex-col items-center justify-center text-sm ">
      <h1 className="capitalize">{type}</h1>
      <p className="font-bold">{getValue()}</p>
    </div>
  );
};

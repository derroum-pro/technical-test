import { Country, Sex } from "../../utils/types";

export interface CardHeaderProps {
  name: string;
  shortName: string;
  sex: Sex;
  pictureUrl: string;
  country: Country;
}

export const CardHeader = ({
  name,
  shortName,
  sex,
  pictureUrl,
  country,
}: CardHeaderProps) => {
  return (
    <div className="flex flex-row">
      <img src={pictureUrl} alt={name} className="rounded-full h-20 w-20" />
      <div className="px-5">
        <h1 className="font-bold">{`${name} (${shortName})`}</h1>
        <h1>{sex}</h1>
        <div className="flex flex-row items-center font-bold">
          <img
            src={country.picture.url}
            alt={country.code}
            className="h-5 mr-2"
          />
          <p>{country.code}</p>
        </div>
      </div>
    </div>
  );
};

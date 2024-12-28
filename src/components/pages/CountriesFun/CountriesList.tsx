import { CountriesData } from "./CountriesData.type";
import CountriesDetail from "./CountriesDetail";
import "./CountriesFun.styles.scss";

export default function CountriesList({
  countries,
}: {
  countries: CountriesData[];
}) {
  const countriesFound = countries.length;
  return (
    <div className="row">
      <div className="col-md-12 text-end bg-secondary results-count p-1">
        Countries Found: {countriesFound}
      </div>
      <div className=" col-md-12 countries-list">
        <div className="row">
          {countries.map((country) => (
            <CountriesDetail country={country} key={country.name.official} />
          ))}
        </div>
      </div>
    </div>
  );
}

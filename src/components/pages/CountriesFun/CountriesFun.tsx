import { useEffect, useMemo, useState } from "react";
import CountriesSearch from "./CountriesSearch";
import { CountriesData } from "./CountriesData.type";
import CountriesList from "./CountriesList";
import CountriesEmpty from "./CountriesEmpty";

export default function CountriesFun() {
  const [countries, setCountries] = useState<CountriesData[]>([]);
  const [countriesSearchTerm, setCountriesSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("default");

  useEffect(() => {
    if (countriesSearchTerm !== "") {
      const abortController = new AbortController();
      const signal = abortController.signal;
      fetch(`https://restcountries.com/v3.1/name/${countriesSearchTerm}`, {
        signal,
      })
        .then((res: Response) => res.json())
        .then((countriesList: CountriesData[]) => {
          if (countriesList) {
            setCountries(countriesList);
          } else {
            setCountries(countriesList);
          }
        })
        .catch((err) => {
          if (err.type === "AbortError") {
            console.log("Fetch Aborted");
          }
        });

      return function cancel() {
        abortController.abort();
      };
    } else {
      setCountries([]);
    }
  }, [countriesSearchTerm]);

  const sortedCountryList = useMemo(
    () => getSortedList(countries, sortOrder),
    [sortOrder, countries]
  );

  function handleSearchTermChange(searchString: string) {
    setCountriesSearchTerm(searchString);
  }

  function handleResetSearchTerm() {
    setCountriesSearchTerm("");
  }

  function handleUpdateSortOrder(order: string) {
    setSortOrder(order);
  }

  return (
    <div className="row">
      <div className="col-md-12">
        <h2>Fun with Countries</h2>
        <CountriesSearch
          searchStringHandler={handleSearchTermChange}
          resetSearchTerm={handleResetSearchTerm}
          sortOrder={sortOrder}
          sortCountries={handleUpdateSortOrder}
        />
        {countries.length > 0 ? (
          <CountriesList countries={sortedCountryList} />
        ) : (
          <CountriesEmpty />
        )}
      </div>
    </div>
  );
}

function getSortedList(countries: CountriesData[], order: string) {
  switch (order) {
    case "name":
      return countries.sort((a, b) =>
        a.name.common
          .toLocaleLowerCase()
          .localeCompare(b.name.common.toLocaleLowerCase())
      );
    case "popAsc":
      return countries.sort((a, b) => a.population - b.population);
    case "popDesc":
      return countries.sort((a, b) => b.population - a.population);
    default:
      return countries;
  }
}

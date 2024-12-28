import { useRef } from "react";
import "./CountriesFun.styles.scss";
import { useHomeCountryContext } from "./HomeCountryContext";
export default function CountriesSearch({
  searchStringHandler,
  resetSearchTerm,
  sortOrder,
  sortCountries,
}: {
  searchStringHandler: (s: string) => void;
  resetSearchTerm: () => void;
  sortOrder: string;
  sortCountries: (s: string) => void;
}) {
  const searchInputRef = useRef<HTMLInputElement | null>(null);

  const { homeCountry } = useHomeCountryContext();

  function resetSearchTermClick() {
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
    resetSearchTerm();
  }

  return (
    <div className="row countries-search">
      <div className="col-md-12 text-center">
        <input
          ref={searchInputRef}
          type="text"
          name="countrySearch"
          id="countrySearch"
          placeholder="Search for countries"
          onChange={(event) => searchStringHandler(event?.target.value)}
        />
        <button
          className="btn btn-secondary btn-large"
          onClick={() => resetSearchTermClick()}
        >
          Reset
        </button>
        &nbsp; Sort:
        <select
          onChange={(event) => sortCountries(event.target.value)}
          value={sortOrder}
        >
          <option value="default">Default</option>
          <option value="name">Name</option>
          <option value="popDesc">Greater Population</option>
          <option value="popAsc">Lower Population</option>
        </select>
        {homeCountry !== "" && <strong>Home Country: {homeCountry}</strong>}
      </div>
    </div>
  );
}

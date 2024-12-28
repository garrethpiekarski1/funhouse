import { CountriesData, Currency } from "./CountriesData.type";
import "./CountriesFun.styles.scss";
import { useHomeCountryContext } from "./HomeCountryContext";

export default function CountriesDetail({
  country,
}: {
  country: CountriesData;
}) {
  const { homeCountry, setHomeCountry } = useHomeCountryContext();

  return (
    <div className="col-md-4 g-2 countries-detail">
      <div className="card">
        <div className="card-header">
          {country.name.common}{" "}
          {homeCountry === country.name.common && (
            <span>&nbsp; MY COUNTRY</span>
          )}
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-4 flag-container">
              <img src={country.flags.svg} alt={country.flags.alt} />
            </div>
            <div className="col-md-8">
              <dl>
                <dt>Official Name</dt>
                <dd>{country.name.official}</dd>
                <dt>Native Names</dt>
                <dd>{getNativeNames(country)}</dd>
              </dl>
            </div>
            <div className="col-md-12">
              <dl>
                <dt>Population</dt>
                <dd>{country.population.toLocaleString()}</dd>
                {getDemonyms(country)}
                <dt>Continents</dt>
                <dd>{country.continents.join(", ")}</dd>
                {country.capital && (
                  <>
                    <dt>Capital(s)</dt>
                    <dd>{country.capital.join(", ")}</dd>
                  </>
                )}
                {getCurrencies(country)}
              </dl>
            </div>
            {country.coatOfArms?.png && (
              <div className="col-md-6">
                <div className="crest-container">
                  <img src={country.coatOfArms.png} alt="Coat of Arms" />
                </div>
              </div>
            )}
            <div className="col-md-6">
              <a
                href={country.maps.googleMaps}
                target="blank"
                className="small-link"
              >
                See on Google Maps
              </a>
              <p>
                <button
                  className="btn btn-secondary"
                  onClick={() => setHomeCountry(country.name.common)}
                >
                  Set as home country
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getNativeNames(country: CountriesData) {
  const nativeNames: string[] = [];
  for (const lang in country.name.nativeName) {
    nativeNames.push(
      country.name.nativeName[lang].official,
      country.name.nativeName[lang].common
    );
  }
  return nativeNames.join(", ");
}

function getDemonyms(country: CountriesData) {
  if (!country.demonyms) {
    return <></>;
  }

  return (
    <>
      <dt>What the people are called</dt>
      <dd>
        {country.demonyms.eng.m !== country.demonyms.eng.f ? (
          <>
            {country.demonyms.eng.m}(m) / {country.demonyms.eng.f}(f)
          </>
        ) : (
          <>{country.demonyms.eng.m} </>
        )}
      </dd>
    </>
  );
}

function getCurrencies(country: CountriesData) {
  const currencies: Currency[] = [];
  for (const money in country.currencies) {
    currencies.push({
      name: country.currencies[money].name,
      code: money,
      symbol: country.currencies[money].symbol,
    });
  }

  if (currencies.length < 1) {
    return <></>;
  }

  return (
    <>
      <dt>Currencies</dt>
      <dd>
        <ul>
          {currencies.map((currency) => (
            <li key={currency.code}>
              {currency.name} ({currency.code} - {currency.symbol})
            </li>
          ))}
        </ul>
      </dd>
    </>
  );
}

export type CountriesData = {
  name: {
    common: string;
    official: string;
    nativeName: {
      [key: string]: {
        official: string;
        common: string;
      };
    };
  };
  capital: string[];
  latlng: number[];
  landlocked: boolean;
  borders: string;
  area: number;
  demonyms: {
    eng: {
      f: string;
      m: string;
    };
  };
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };
  population: number;
  gini: {
    "2018": number;
  };
  fifa: string;
  car: {
    signs: string[];
    side: string;
  };
  timezones: string[];
  continents: string[];
  flags: {
    png: string;
    svg: string;
    alt: string;
  };
  coatOfArms: {
    png: string;
    svg: string;
  };
  startOfWeek: string;
  capitalInfo: {
    latlng: number;
  };
  postalCode: {
    format: string;
    regex: string;
  };
  currencies: {
    [key: string]: {
      name: string;
      symbol: string;
    };
  };
};

export type Currency = {
  name: string;
  code: string;
  symbol: string;
};

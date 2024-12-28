import { createContext, useContext } from "react";

export type HomeCountryContextType = {
  homeCountry: string;
  setHomeCountry: (stringVal: string) => void;
};

export const HomeCountryContext = createContext<
  HomeCountryContextType | undefined
>(undefined);

export function useHomeCountryContext() {
  const homeCountry = useContext(HomeCountryContext);

  if (homeCountry === undefined) {
    throw "Did not use context wrapper";
  }

  return homeCountry;
}

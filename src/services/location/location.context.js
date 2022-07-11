import React, { createContext, useEffect, useState } from "react";
import { locationRequest, locationTrasnform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("Chicago");
  const [location, setLocation] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchLocation = (searchKeyword) => {
    setLoading(true);
    setKeyword(searchKeyword);
  };

  useEffect(() => {
    locationRequest(keyword.toLowerCase())
      .then(locationTrasnform)
      .then((result) => {
        setLoading(false);
        setLocation(result);
        //console.log("result   ", result);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
      });
  }, [keyword]);

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, setSearch: searchLocation, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};

import React, { createContext, useState } from "react";
import { locationRequest, locationTrasnform } from "./location.service";

export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchLocation = (searchKeyword) => {
    setLoading(true);
    setKeyword(searchKeyword);
    locationRequest(searchKeyword.toLowerCase())
      .then(locationTrasnform)
      .then((result) => {
        setLoading(false);
        setLocation(result);
        console.log(searchKeyword);
      })
      .catch((err) => {
        setLoading(false);
        setError(err);
        console.log("Erro: ", err);
      });
  };

  return (
    <LocationContext.Provider
      value={{ isLoading, error, location, search: searchLocation, keyword }}
    >
      {children}
    </LocationContext.Provider>
  );
};

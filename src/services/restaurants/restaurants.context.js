import React, { createContext, useContext, useEffect, useState } from "react";
import { restaurantsTransform, resturantsRequest } from "./restaurants.service";
import { LocationContext } from "../location/location.context";

export const RestuarntContext = createContext();

export const RestuarntContextProvider = ({ children }) => {
  const [restuarants, setRestaurants] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const { location } = useContext(LocationContext);
  const retriveResturants = (loc) => {
    setLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      resturantsRequest(loc)
        .then(restaurantsTransform)
        .then((results) => {
          setLoading(false);
          setRestaurants(results);
        })
        .catch(() => {
          setLoading(false);
          setError(true);
        });
    }, 2000);
  };

  useEffect(() => {
    console.log("Location: ", location);
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retriveResturants(locationString);
    }
  }, [location]);

  return (
    <RestuarntContext.Provider value={{ restuarants, isLoading, error }}>
      {children}
    </RestuarntContext.Provider>
  );
};

import camelize from "camelize";
import { locations } from "./location.mock";

export const locationRequest = (searchTerm) => {
  //console.log("searchTerm   ", searchTerm);
  return new Promise((resolve, reject) => {
    const locationMock = locations[searchTerm];
    if (!locationMock) {
      reject("Not found!!");
    }
    resolve(locationMock);
    //console.log("Location   ", locationMock);
  });
};
export const locationTrasnform = (result) => {
  const formatedResponse = camelize(result);
  const { geometry = {} } = formatedResponse.results[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};

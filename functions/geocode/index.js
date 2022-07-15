const { locations: locationsMock } = require("./location.mock");
const url = require("url");

module.exports.geocodeRequest = (request, response) => {
  const { city } = url.parse(request.url, true).query;
  const locationMock = locationsMock[city.toLowerCase()];
  response.json(locationMock);
};

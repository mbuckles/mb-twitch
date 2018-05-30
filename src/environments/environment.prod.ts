export const environment = {
  production: true,
  // current api
  WEATHER_APIKEY: "&appid=691c1e153351f780c9a6e0268402a27b",
  WEATHER_CITY: "https://api.openweathermap.org/data/2.5/weather?q=",
  WEATHER_ZIP: "https://api.openweathermap.org/data/2.5/weather?zip=",
  WEATHER_POS: "https://api.openweathermap.org/data/2.5/weather?",
  //  LOCATION_URL: 'http://ip-api.com/json',
  LOCATION_URL: "https://ipinfo.io/json",
  CURRENT_URL: "https://api.openweathermap.org/data/2.5/weather?lat=",

  // forecast api
  FORECAST_CITY: "https://api.openweathermap.org/data/2.5/forecast?q=",
  FORECAST_ZIP: "https://api.openweathermap.org/data/2.5/forecast?zip=",

  // Twitch API
  TWITCH_DEFAULT:
    "https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/?client_id=mssotqkdlyd4modmq3uso9jri3n2j7g",
  TWITCH_URL1: "https://api.twitch.tv/kraken/users/",
  TWITCH_URL2: "/follows/channels/?client_id=",
  TWITCH_APIKEY: "mssotqkdlyd4modmq3uso9jri3n2j7g"

  //  http://api.openweathermap.org/data/2.5/forecast?q=atlanta&units=imperial&appid=691c1e153351f780c9a6e0268402a27b;
  // 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=691c1e153351f780c9a6e0268402a27b';
  // 'https://api.twitch.tv/kraken/users/freecodecamp/follows/channels/?client_id=mssotqkdlyd4modmq3uso9jri3n2j7g'
};

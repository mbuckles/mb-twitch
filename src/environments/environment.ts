// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
   // current api
   WEATHER_APIKEY: '&appid=691c1e153351f780c9a6e0268402a27b',
   WEATHER_CITY: 'http://api.openweathermap.org/data/2.5/weather?q=',
   WEATHER_ZIP: 'http://api.openweathermap.org/data/2.5/weather?zip=',
  //  LOCATION_URL: 'http://ip-api.com/json',
   LOCATION_URL: 'https://ipinfo.io/json',
   CURRENT_URL: 'http://api.openweathermap.org/data/2.5/weather?lat=',

   // forecast api
   FORECAST_CITY: 'http://api.openweathermap.org/data/2.5/forecast?q=',
   FORECAST_ZIP: 'http://api.openweathermap.org/data/2.5/forecast?zip='

  //  http://api.openweathermap.org/data/2.5/forecast?q=atlanta&units=imperial&appid=691c1e153351f780c9a6e0268402a27b;
  // 'http://api.openweathermap.org/data/2.5/weather?q=London&appid=691c1e153351f780c9a6e0268402a27b';
};

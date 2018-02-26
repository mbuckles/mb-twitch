import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class WeatherService {
    // current weather
    public query: string;
    public WEATHER_APIKEY: string = environment.WEATHER_APIKEY;
    public WEATHER_CITY: string = environment.WEATHER_CITY;
    public WEATHER_ZIP: string = environment.WEATHER_ZIP;
    // public WEATHER_POS: string = environment.WEATHER_POS;
    public imperial: string = '&units=imperial';
    public count: string = '&cnt=40';

    // forecast weather
    public FORECAST_CITY: string = environment.FORECAST_CITY;
    public FORECAST_ZIP: string = environment.FORECAST_ZIP;

    constructor(public http: HttpClient) { }

    // Current API
    public getCityWeatherImp(query) {
    return this.http.get(this.WEATHER_CITY + query + this.imperial + this.WEATHER_APIKEY);
    }

    public getZipWeatherImp(query) {
    return this.http.get(this.WEATHER_ZIP + query + this.imperial + this.WEATHER_APIKEY);
    }


    // Forecast API
    public getCityForecastImp(query) {
    return this.http.get(this.FORECAST_CITY + query + this.count + this.imperial + this.WEATHER_APIKEY);
    }
    public getZipForecastImp(query) {
    return this.http.get(this.FORECAST_ZIP + query  + this.count + this.imperial + this.WEATHER_APIKEY);
    }

}

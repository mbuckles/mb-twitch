import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather.service';
import { LocationService } from '../services/location.service';
import { City } from '../models/location.class';
import { Name } from '../models/city.class';
import { Forecast } from '../models/forecast.class';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  // temps: any[];
  tempsFound = false;
  searching = false;
  public dateVal: Date = new Date();
  public city = new City('', '', '', '', '', '', '', '', '', '', '');
  public forecast = new Forecast('', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '');
  public currentLocation = new Name ('', '');
  public currentZip: string;
  public currentCity: string;
  public searchCityQuery: string;
  public searchZipQuery: string;
  // define forecasts
  public searchCityForecastQuery: string;
  public searchZipForecastQuery: string;

  handleSuccess(data) {
    this.tempsFound = true;
    this.city.name = data.name;
    this.city.country = data.sys.country;
    this.city.icon = data.weather[0].icon;
    this.city.description = data.weather[0].description;
    this.city.temp = data.main.temp;
    this.city.pressure = data.main.pressure;
    this.city.speed = data.wind.speed;
    this.city.deg = data.wind.deg;
    this.city.humidity = data.main.humidity;
    this.city.lon = data.coord.lon;
    this.city.lat = data.coord.lat;
  //  console.log(data);
  }


  handleError(error) {
    // console.log(error);
  }
  // Forecast only
  handleSuccessForecast(data) {
          this.tempsFound = true;
          this.forecast.name = data.city.name;
          this.forecast.country = data.city.country;
          this.forecast.icon1 = data.list[4].weather[0].icon;
          this.forecast.description1 = data.list[4].weather[0].description;
          this.forecast.temp1 = data.list[4].main.temp;
          this.forecast.icon2 = data.list[12].weather[0].icon;
          this.forecast.description2 = data.list[12].weather[0].description;
          this.forecast.temp2 = data.list[12].main.temp;
          this.forecast.icon3 = data.list[20].weather[0].icon;
          this.forecast.description3 = data.list[20].weather[0].description;
          this.forecast.temp3 = data.list[20].main.temp;
          this.forecast.icon4 = data.list[28].weather[0].icon;
          this.forecast.description4 = data.list[28].weather[0].description;
          this.forecast.temp4 = data.list[28].main.temp;
          this.forecast.icon5 = data.list[36].weather[0].icon;
          this.forecast.description5 = data.list[36].weather[0].description;
          this.forecast.temp5 = data.list[36].main.temp;
          // console.log(data);
        }

  handleErrorForecast(error) {
    // console.log(error);
  }

  constructor( public weatherService: WeatherService, public locationService: LocationService) {
  }

  ngOnInit() {
    // get local current data on init
    this.getCity();
    // get local forecast on init
    this.getCityForecast();
  }
  // Current weather
  public getCity() {
    this.locationService.getLocation().subscribe((data: Name) => {
      // console.log(data);
      return this.searchCityImp(data.city);
      // return this.currentLocation = new Name(data.city, data.zip);
    });
  }

  searchCityImp(query: string) {
    this.searching = true;
    return this.weatherService.getCityWeatherImp(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    );
  }

  public searchZipImp(query: string) {
    this.searching = true;
    return this.weatherService.getCityWeatherImp(query).subscribe(
      data => this.handleSuccess(data),
      error => this.handleError(error),
      () => this.searching = false
    );
  }

  // Forecast weather
  public getCityForecast() {
    this.locationService.getLocation().subscribe((data: Name) => {
      // return this.searchZipForecastImp(data.zip);  // original location api
      return this.searchCityForecastImp(data.city);
    });
  }

  searchCityForecastImp(query: string) {
    this.searching = true;
    return this.weatherService.getCityForecastImp(query).subscribe(
      data => this.handleSuccessForecast(data),
      error => this.handleErrorForecast(error),
      () => this.searching = false
    );
  }

  public searchZipForecastImp(query: string) {
    this.searching = true;
    return this.weatherService.getZipForecastImp(query).subscribe(
      data => this.handleSuccessForecast(data),
      error => this.handleErrorForecast(error),
      () => this.searching = false
    );
  }
}

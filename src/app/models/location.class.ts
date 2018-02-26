export class City {

  public name: string;
  public country: string;
  public icon: string;
  public description: string;
  public temp: string;
  public pressure: string;
  public speed: string;
  public deg: string;
  public humidity: string;
  public lon: string;
  public lat: string;


  constructor( name: string,
            country: string,
            icon: string,
            description: string,
            temp: string,
            pressure: string,
            speed: string,
            deg: string,
            humidity: string,
            lon: string,
            lat: string
           ) {

    this.name = name;
    this.country = country;
    this.icon = icon;
    this.description = description;
    this.temp = temp;
    this.pressure = pressure;
    this.speed = speed;
    this.deg = deg;
    this.humidity = humidity;
    this.lon = lon;
    }
}

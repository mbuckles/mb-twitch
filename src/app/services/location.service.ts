import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class LocationService {

  public LOCATION_URL: string = environment.LOCATION_URL;

  constructor(public http: HttpClient) { }

  // location only
  public getLocation() {
    return this.http.get(this.LOCATION_URL);
  }
}

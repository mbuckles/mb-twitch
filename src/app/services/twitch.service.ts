import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class TwitchService {

  public query: string;
  public TWITCH_DEFAULT: string = environment.TWITCH_DEFAULT;
  public TWITCH_URL1: string = environment.TWITCH_URL1;
  public TWITCH_URL2: string = environment.TWITCH_URL2;
  public TWITCH_APIKEY: string = environment.TWITCH_APIKEY;

  constructor(public http: HttpClient) { }

  // location only
  public getTwitch() {
    return this.http.get(this.TWITCH_DEFAULT);
  }


 // Current Twitch
    public getTwitch2(query) {
    return this.http.get(this.TWITCH_URL1 + query + this.TWITCH_URL2 + this.TWITCH_APIKEY);
    }
}

import { Component, OnInit } from "@angular/core";
import { TwitchService } from "../services/twitch.service";
import { Twitch } from "../models/twitch.class";

@Component({
  selector: "app-twitch",
  templateUrl: "./twitch.component.html",
  styleUrls: ["./twitch.component.css"]
})
export class TwitchComponent implements OnInit {
  // temps: any[];
  tempsFound = false;
  searching = false;
  public twitch = new Twitch("", "", "", "", "", "", "");
  public dateVal: Date = new Date();
  public searchTwitchQuery: string;

  handleSuccess(data) {
    this.tempsFound = true;
    this.twitch.follows = data.follows;
    this.twitch.logo = data.follows[0].channel.logo;
    this.twitch.name = data.follows[0].channel.name;
    this.twitch.url = data.follows[0].channel.url;
    this.twitch.status = data.follows[0].channel.status;
    this.twitch.views = data.follows[0].channel.views;
    this.twitch.followers = data.follows[0].channel.followers;
    console.log(data);
  }

  handleError(error) {
    console.log(error);
  }

  constructor(public twitchService: TwitchService) {}

  ngOnInit() {
    // get twitch current data on init
    this.getDefaultTwitch();
  }

  // default twitch channel
  public getDefaultTwitch() {
    this.twitchService.getTwitch().subscribe((data: Twitch) => {
      return this.searchTwitch("freecodecamp");
    });
  }

  searchTwitch(query: string) {
    this.searching = true;
    return this.twitchService.getTwitch2(query).subscribe(
        data => this.handleSuccess(data),
        error => this.handleError(error),
        () => (this.searching = false)
      );
  }
}

export class Twitch {
  public follows: string;
  public logo: string;
  public name: string;
  public url: string;
  public status: string;
  public views: string;
  public followers: string;

  constructor(follows: string, logo: string, name:string, url: string, status:string, views: string, followers:string) {
    this.follows = follows;
    this.logo = logo;
    this.name = name;
    this.url = url;
    this.status = status;
    this.followers = followers;
    this.views = views;
  }
}

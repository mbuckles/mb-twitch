import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http'; // add this for api
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { appRoutes } from '../routes';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { WeatherService } from './services/weather.service';
import { LocationService } from './services/location.service';
import { WeatherComponent } from './weather/weather.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './/app-routing.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    HeaderComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    HttpClientModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    environment.production ? ServiceWorkerModule.register('/ngsw-worker.js') : [],
    AppRoutingModule,
    RouterModule,
  ],
  providers: [WeatherService, LocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }

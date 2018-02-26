import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WeatherComponent } from '../app/weather/weather.component';
import { SearchComponent } from '../app/search/search.component';
// import { ServicesComponent } from '../app/services/weather.service';
// import { ServicesComponent } from '../app/services/location.service';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  { path: 'weather', component: WeatherComponent },
  { path: 'search', component: SearchComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  // { path: '**', redirectTo: '/home', pathMatch: 'full' },
  { path: '', component: WeatherComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule { }

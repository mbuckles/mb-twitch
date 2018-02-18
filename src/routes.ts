import { Routes } from '@angular/router';
import { WeatherComponent } from './app/weather/weather.component';
import { HeaderComponent } from './app/header/header.component';
import { SearchComponent } from './app/search/search.component';



export const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'search', component: SearchComponent},
  { path: 'weather', component: WeatherComponent },
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', redirectTo: '/weather', pathMatch: 'full' }
];

import { Routes } from '@angular/router';
import { HeaderComponent } from './app/header/header.component';

export const appRoutes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: '', redirectTo: '/weather', pathMatch: 'full' },
  { path: '**', redirectTo: '/weather', pathMatch: 'full' }
];

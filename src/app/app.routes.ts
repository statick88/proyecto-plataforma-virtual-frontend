import { Routes } from '@angular/router';
import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent }
];




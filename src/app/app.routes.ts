import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent),
        children: [
            {
                path: 'home',
                loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
            },
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'home',
    }

];


import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
    },
    {
        path: 'done',
        loadComponent: () => import('./pages/done/done').then(m => m.Done),
    },
    {
        path: '**',
        redirectTo: '',
    },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./pages/home/home').then(m => m.Home),
        title: 'DigitalBond — Premium Digital Solutions',
        data: {
            description: 'DigitalBond delivers cutting-edge digital experiences — web development, UI/UX design, and digital transformation services.'
        }
    },
    {
        path: 'done',
        loadComponent: () => import('./pages/done/done').then(m => m.Done),
        title: 'Thank You | DigitalBond',
        data: {
            description: 'Thank you for contacting DigitalBond. We will get back to you shortly regarding your digital project inquiries.'
        }
    },
    {
        path: '**',
        redirectTo: '',
    },
];

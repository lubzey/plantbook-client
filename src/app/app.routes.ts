import { Routes } from '@angular/router';
import { HomePage } from './features/home/pages/home/home.page';

export const routes: Routes = [
    {
        path: '',
        component: HomePage,
    },
    {
        path: 'species',
        loadChildren: () => import('./features/species/species.routes').then(m => m.SPECIES_ROUTES)
    },
    {
        path: 'varieties',
        loadComponent: () => import('./features/varieties/pages/varieties-list/varieties-list.page').then(m => m.VarietiesListPage)
    },
    {
        path: 'gardens',
        loadComponent: () => import('./features/gardens/pages/gardens-list/gardens-list.page').then(m => m.GardensListPage)
    },
    {
        path: 'nurseries',
        loadComponent: () => import('./features/nurseries/pages/nurseries-list/nurseries-list.page').then(m => m.NurseriesListPage)
    },
    {
        path: '**',
        redirectTo: '',
    }
];

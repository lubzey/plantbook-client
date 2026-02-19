import { Routes } from '@angular/router';
import { SpeciesListPage } from './pages/species-list/species-list.page';

export const SPECIES_ROUTES: Routes = [
  {
    path: '',
    component: SpeciesListPage
  },
//  {
//   path: ':id',
//   loadComponent: () =>
//     import('./pages/species-details/species-details.page')
//       .then(m => m.SpeciesDetailsPage)
// },
//   {
//     path: ':id/edit',
//     loadComponent: () =>
//       import('./pages/species-edit/species-edit.page')
//         .then(m => m.SpeciesEditPage)
//   },
//   {
//     path: 'create',
//     loadComponent: () =>
//       import('./pages/species-create/species-create.page')
//         .then(m => m.SpeciesCreatePage)
//   }
];
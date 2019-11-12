import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SSTPage } from './SST.page';

const routes: Routes = [
  {
    path: 'SST',
    component: SSTPage,
    children: [
      {
        path: 'Cours',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Cours/Cours.module').then(m => m.CoursPageModule)
          }
        ]
      },
      {
        path: 'Accueil',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Accueil/Accueil.module').then(m => m.AccueilPageModule)
          }
        ]
      },
      {
        path: 'Gestes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../Gestes/Gestes.module').then(m => m.GestesPageModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/SST/Accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/SST/Accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SSTPageRoutingModule {}

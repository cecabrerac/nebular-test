import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'general',
    loadChildren: () =>
      import('./pages/general/general.module').then((m) => m.GeneralModule),
  },

  {
    path: '**',
    redirectTo: 'general',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

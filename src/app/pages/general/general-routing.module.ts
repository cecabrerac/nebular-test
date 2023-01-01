import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { GraficasComponent } from './graficas/graficas.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { UnsuscribeComponent } from './unsuscribe/unsuscribe.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralComponent,
    children: [
      { path: 'select', component: SelectBoxComponent },
      { path: 'graficas', component: GraficasComponent },
      { path: 'unsuscribe', component: UnsuscribeComponent },
      // { path: 'select', redirectTo: 'select', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}

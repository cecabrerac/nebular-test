import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralComponent } from './general.component';
import { GraficasComponent } from './graficas/graficas.component';
import { SelectBoxComponent } from './select-box/select-box.component';
import { UnsuscribeComponent } from './unsuscribe/unsuscribe.component';
import { PaymentComponent } from './payment/payment.component';
import { PaymentVisaComponent } from './payment-visa/payment-visa.component';
import { MessagesComponent } from './messages/messages.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'select', component: SelectBoxComponent },
      { path: 'graficas', component: GraficasComponent },
      { path: 'unsuscribe', component: UnsuscribeComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'visa', component: PaymentVisaComponent },
      { path: 'messages', component: MessagesComponent },
      // { path: 'select', redirectTo: 'select', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}

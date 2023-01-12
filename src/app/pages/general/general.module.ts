import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbSpinnerModule,
  NbUserModule,
  NbRadioModule,
  NbAlertModule,
  NbDialogModule,
  // NbDialogService,
} from '@nebular/theme';
import { UnsuscribeComponent } from './unsuscribe/unsuscribe.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [UnsuscribeComponent, PaymentComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NbCardModule,
    NbSpinnerModule,
    NbUserModule,
    NbCheckboxModule,
    NbInputModule,
    NbButtonModule,
    NbRadioModule,
    NbButtonModule,
    NbAlertModule,
    NbDialogModule.forRoot(),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GeneralModule {}

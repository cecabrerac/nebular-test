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
} from '@nebular/theme';
import { UnsuscribeComponent } from './unsuscribe/unsuscribe.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UnsuscribeComponent],
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GeneralModule {}

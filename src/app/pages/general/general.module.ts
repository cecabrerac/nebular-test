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
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [UnsuscribeComponent],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    NbCardModule,
    NbSpinnerModule,
    NbUserModule,
    NbCheckboxModule,
    NbInputModule,
    FormsModule,
    NbButtonModule,
    NbRadioModule,
    NbButtonModule,
    NbAlertModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GeneralModule {}

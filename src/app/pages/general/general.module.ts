import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { NbCardModule, NbSpinnerModule, NbUserModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GeneralRoutingModule,
    NbCardModule,
    NbSpinnerModule,
    NbUserModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GeneralModule {}

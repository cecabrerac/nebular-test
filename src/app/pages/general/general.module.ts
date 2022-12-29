import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralRoutingModule } from './general-routing.module';
import { NbSelectModule } from '@nebular/theme';

@NgModule({
  declarations: [],
  imports: [CommonModule, GeneralRoutingModule, NbSelectModule],
})
export class GeneralModule {}

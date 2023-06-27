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
} from '@nebular/theme';
import { UnsuscribeComponent } from './unsuscribe/unsuscribe.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PaymentComponent } from './payment/payment.component';

// Translation imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// import { SwitchLangComponent } from './switch-lang/switch-lang.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
}

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
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GeneralModule {}

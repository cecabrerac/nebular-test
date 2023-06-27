import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSelectModule,
  NbTooltipModule,
  NbCardModule,
  NbSpinnerModule,
  NbUserModule,
  NbListModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule,
  NbButtonModule,
  NbAlertModule,
  // NbDialogService,
  NbDialogModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GeneralComponent } from './pages/general/general.component';
import { SelectBoxComponent } from './pages/general/select-box/select-box.component';
import { GraficasComponent } from './pages/general/graficas/graficas.component';
import { UserDetailsComponent } from './pages/general/user-details/user-details.component';
import { PaymentVisaComponent } from './pages/general/payment-visa/payment-visa.component';
import { MessagesComponent } from './pages/general/messages/messages.component';

// Translation imports
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslationHttpLoader } from './translation-http-loader';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslationHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    SelectBoxComponent,
    GraficasComponent,
    UserDetailsComponent,
    PaymentVisaComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSelectModule,
    NbTooltipModule,
    NbCardModule,
    NbSpinnerModule,
    NbUserModule,
    NbListModule,
    NbCheckboxModule,
    NbInputModule,
    NbRadioModule,
    NbButtonModule,
    NbAlertModule,
    // NbDialogService,
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
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

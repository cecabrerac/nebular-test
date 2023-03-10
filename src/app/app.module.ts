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
  NbDialogService,
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

@NgModule({
  declarations: [
    AppComponent,
    GeneralComponent,
    SelectBoxComponent,
    GraficasComponent,
    UserDetailsComponent,
    PaymentVisaComponent,
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
    NbDialogModule.forRoot(),
  ],
  exports: [FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

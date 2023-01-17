import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

// IMPORT FORMBUILDER AND VALIDATORS:
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-visa',
  templateUrl: './payment-visa.component.html',
  styleUrls: ['./payment-visa.component.scss'],
})
export class PaymentVisaComponent implements OnInit {
  // CODE TO HAVE A REACTIVE FORM:
  ///////////////////////////////////////
  stringifiedData: any;
  submitted = false;
  formData = this.fb.group({
    cardHolderName: ['', Validators.required],
    cardNumber: ['', Validators.required],
    expDate: ['', Validators.required],
    cvv: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
    ],
  });
  ///////////////////////////////////////

  constructor(
    protected ref: NbDialogRef<PaymentVisaComponent>,
    private fb: FormBuilder
  ) {} //private fb: FormBuilder is part of the reactive form

  cancel() {
    this.ref.close();
  }

  submit(datum) {
    this.submitted = true;
    // Transforma información en formato JSON:
    this.stringifiedData = JSON.stringify(this.formData.value);
    console.log(this.stringifiedData); // Prueba de salida de datos json por consola.

    this.ref.close(datum);
  }

  //GETTERS:
  //////////////////////////////////////
  get cardHolderName() {
    return this.formData.get('cardHolderName');
  }
  get cardNumber() {
    return this.formData.get('cardNumber');
  }
  get expDate() {
    return this.formData.get('expDate');
  }
  get cvv() {
    return this.formData.get('cvv');
  }

  ngOnInit(): void {}
}

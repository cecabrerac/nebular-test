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
    cardHolderName: [
      '',
      [Validators.required, Validators.minLength(4), Validators.maxLength(24)],
    ],
    cardNumber: ['', [Validators.required, Validators.minLength(19)]],
    expDate: ['', [Validators.required, Validators.minLength(5)]],
    cvv: [
      '',
      [Validators.required, Validators.minLength(3), Validators.maxLength(4)],
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

  ////////////////////////////////////////////////
  numberAutoFormat() {
    let valueNumber = this.cardNumber.value;
    // if white space change to ''. If is not a number between 0-9 change to ''
    let v = valueNumber.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    // the value got min of 4 digits and max of 16
    let matches = v.match(/\d{4,16}/g);
    let match = (matches && matches[0]) || '';
    let parts = [];

    for (let i = 0; i < match.length; i += 4) {
      // after 4 digits add a new element to the Array
      // e.g. "4510023" -> [4510, 023]
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      // add a white space after 4 digits
      this.cardNumber.setValue(parts.join(' '));
      return parts.join(' ');
    } else {
      this.cardNumber.setValue(valueNumber);
      return valueNumber;
    }
  }
  ////////////////////////////////////////////////////////

  isNotDate(element) {
    let actualDate = new Date();
    let month = actualDate.getMonth() + 1; // start january 0 we need to add + 1
    let year = Number(actualDate.getFullYear().toString().substr(-2)); // 2022 -> 22
    let dateNumber = element.value.match(/\d{2,4}/g);
    let monthNumber = Number(dateNumber[0]);
    let yearNumber = Number(dateNumber[1]);

    if (
      element.value === '' ||
      monthNumber < 1 ||
      monthNumber > 12 ||
      yearNumber < year ||
      (monthNumber <= month && yearNumber === year)
    ) {
      return true;
    } else {
      return false;
    }
  }

  dateAutoFormat() {
    let dateValue = this.expDate.value;
    // if white space -> change to ''. If is not a number between 0-9 -> change to ''
    let v = dateValue.replace(/\s+/g, '').replace(/[^0-9]/gi, '');

    // min of 2 digits and max of 4
    let matches = v.match(/\d{2,4}/g);
    let match = (matches && matches[0]) || '';
    let parts = [];

    for (let i = 0; i < match.length; i += 2) {
      // after 4 digits add a new element to the Array
      // e.g. "4510023" -> [4510, 023]
      parts.push(match.substring(i, i + 2));
    }

    if (parts.length) {
      // add a white space after 4 digits
      this.expDate.setValue(parts.join('/'));
      return parts.join('/');
    } else {
      this.expDate.setValue(dateValue);
      return dateValue;
    }
  }

  ////////////////////////////////////

  /* CHECK IF KEY PRESSED IS A NUMBER (input of card number, date and cvv) */
  isNumeric(event) {
    if ((event.keyCode < 48 || event.keyCode > 57) && event.keyCode > 31) {
      return false;
    }
  }

  ngOnInit(): void {}
}

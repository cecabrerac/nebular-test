import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import * as $ from 'jquery';

@Component({
  selector: 'app-payment-visa',
  templateUrl: './payment-visa.component.html',
  styleUrls: ['./payment-visa.component.scss'],
})
export class PaymentVisaComponent implements OnInit {
  constructor(protected ref: NbDialogRef<PaymentVisaComponent>) {}

  cancel() {
    this.ref.close();
  }

  submit(name) {
    this.ref.close(name);
  }

  ngOnInit(): void {
    this.codePen();
  }

  codePen() {
    //the JavaScript CodePen code goes here
  }
}

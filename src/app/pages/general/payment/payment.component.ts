// import { Component, OnInit } from '@angular/core';
// import { NbDialogService } from '@nebular/theme';
// import { PaymentVisaComponent } from '../payment-visa/payment-visa.component';

// @Component({
//   selector: 'app-payment',
//   templateUrl: './payment.component.html',
//   styleUrls: ['./payment.component.scss'],
// })
// export class PaymentComponent implements OnInit {
//   constructor(private dialogService: NbDialogService) {}
//   openVisa() {
//     this.dialogService.open(PaymentVisaComponent);
//   }
//   ngOnInit(): void {}
// }

import { Component, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { PaymentVisaComponent } from '../payment-visa/payment-visa.component';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  names: string[] = [];

  constructor(private dialogService: NbDialogService) {}

  openVisa() {
    this.dialogService
      .open(PaymentVisaComponent)
      .onClose.subscribe((name) => name && this.names.push(name));
  }
}

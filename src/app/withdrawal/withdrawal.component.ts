import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-withdrawal',
  templateUrl: './withdrawal.component.html',
  styleUrls: ['./withdrawal.component.scss'],
})
export class WithdrawalComponent implements OnInit {
  stringifiedData: any;
  submitted = false;
  valueMax: number = 200;
  formData = this.fb.group({
    walletName: [
      '',
      [Validators.required, Validators.minLength(10), Validators.maxLength(50)],
    ],
    withdrawalValue: [
      '',
      [Validators.required, Validators.min(20), Validators.max(this.valueMax)],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  cancel() {
    // GO TO MAIN MENU
  }

  submit(datum) {
    this.submitted = true;
    // Transforma información en formato JSON:
    this.stringifiedData = JSON.stringify(this.formData.value);
    console.log(JSON.stringify(this.formData.value));
  }

  //GETTERS:
  get wallet() {
    return this.formData.get('walletName');
  }
  get withdrawalValue() {
    return this.formData.get('withdrawalValue');
  }
}

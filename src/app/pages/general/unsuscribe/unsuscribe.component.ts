import { Component, OnInit } from '@angular/core';

import { ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unsuscribe',
  templateUrl: './unsuscribe.component.html',
  styleUrls: ['./unsuscribe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UnsuscribeComponent implements OnInit {
  loading = true;
  stringifiedData: any;

  appUser = 'jperez'; //Aqui va el nombre de usuario correspondiente
  ngModelValue1 = '0';
  ngModelValue2 = '0';
  ngModelValue3 = '0';
  textareaItemNgModel = '';

  username = 'appUser';
  pregunta1 = 0;
  pregunta2 = 0;
  pregunta3 = 0;
  comentario = '';

  constructor() {}
  ngOnInit(): void {
    this.loading = false;
  }

  // Object Data
  formData: any;

  guardarSalir() {
    this.formData = {
      username: this.appUser,
      pregunta1: this.ngModelValue1,
      pregunta2: this.ngModelValue2,
      pregunta3: this.ngModelValue3,
      comentario: this.textareaItemNgModel,
    };
    this.stringifiedData = JSON.stringify(this.formData);
    window.alert(
      'Prueba de desarrollo: datos a enviar en formato JSON: \n ' +
        this.stringifiedData
    );
    console.log('With Stringify :', this.stringifiedData);
  }
}

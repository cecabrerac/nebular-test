import { Component } from '@angular/core';
import { Answers } from './answers';

@Component({
  selector: 'app-unsuscribe',
  templateUrl: './unsuscribe.component.html',
  styleUrls: ['./unsuscribe.component.scss'],
})
export class UnsuscribeComponent {
  loading = true;
  stringifiedData: any;

  model = new Answers('', '', '', '');

  submitted = false;

  onSubmit() {
    this.submitted = true;

    //Transforma información en formato JSON:
    this.stringifiedData = JSON.stringify(this.model);
    console.log(this.stringifiedData); // Prueba de salida de datos json por consola.
  }

  constructor() {}
  ngOnInit(): void {
    this.loading = false;
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-unsuscribe',
  templateUrl: './unsuscribe.component.html',
  styleUrls: ['./unsuscribe.component.scss'],
})
export class UnsuscribeComponent implements OnInit {
  loading = true;
  stringifiedData: any;

  submitted = false;

  answersForm = this.fb.group({
    pregunta1: ['', Validators.required],
    pregunta2: ['', Validators.required],
    pregunta3: ['', Validators.required],
    comentario: ['', [Validators.required, Validators.minLength(7)]],
  });

  onSubmit() {
    this.submitted = true;

    // Transforma información en formato JSON:
    this.stringifiedData = JSON.stringify(this.answersForm.value);
    console.log(this.stringifiedData); // Prueba de salida de datos json por consola.
  }

  get pregunta1() {
    return this.answersForm.get('pregunta1');
  }

  get pregunta2() {
    return this.answersForm.get('pregunta2');
  }

  get pregunta3() {
    return this.answersForm.get('pregunta3');
  }

  get comentario() {
    return this.answersForm.get('comentario');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.loading = false;
  }
}

import {
  Component,
  OnInit,
  Renderer2,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Pie } from '@antv/g2plot';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css'],
})
export class GraficasComponent implements OnInit, AfterViewInit {
  @ViewChild('demo') demoDom: ElementRef;

  constructor(private el: ElementRef, private renderer: Renderer2) {}
  data = [
    { type: 'Grupo 1', value: 27 },
    { type: 'Grupo 2', value: 25 },
    { type: 'Grupo 3', value: 18 },
    { type: 'Grupo 4', value: 15 },
    { type: 'Grupo 5', value: 10 },
    { type: 'Grupo 6', value: 5 },
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const piePlot: Pie = new Pie(this.demoDom.nativeElement, {
      appendPadding: 10,
      data: this.data,
      angleField: 'value',
      colorField: 'type',
      radius: 0.75,
      label: {
        type: 'spider',
        labelHeight: 28,
        content: '{name}\n{percentage}',
      },
      interactions: [{ type: 'element-selected' }, { type: 'element-active' }],
    });

    piePlot.render();
  }
}

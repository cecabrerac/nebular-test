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

  ngModelValue1 = '1';
  ngModelValue2 = '1';
  ngModelValue3 = '1';
  textareaItemNgModel = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.loading = false;
  }

  goToPage(pageName: string) {
    this.router.navigate([`${pageName}`]);
  }
}

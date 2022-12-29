import { Component, OnInit } from '@angular/core';

import { appUsers } from './appUsers';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent implements OnInit {
  appUsers = appUsers;

  onOptionsSelected(value: string) {
    console.log('Selection has change to ' + value);
    window.alert('Selection has change to ' + value);
  }

  constructor() {
    console.log(appUsers[0]);
  }

  ngOnInit(): void {}
}

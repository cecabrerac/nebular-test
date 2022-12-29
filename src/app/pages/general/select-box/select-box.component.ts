import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { appUsers } from './appUsers';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent implements OnInit {
  appUsers = appUsers;

  constructor() {
    console.log(appUsers[0]);
  }

  ngOnInit(): void {}
}

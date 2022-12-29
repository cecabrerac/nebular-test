import { Component, OnInit } from '@angular/core';

import { appUsers } from './appUsers';

@Component({
  selector: 'app-select-box',
  templateUrl: './select-box.component.html',
  styleUrls: ['./select-box.component.scss'],
})
export class SelectBoxComponent implements OnInit {
  appUsers = appUsers;
  userSelected: {
    id: number;
    username: string;
    name: string;
    operation: string;
    gain: string;
  };
  public selectedUser = '';
  onChange(event) {
    const selectedUser = event;
    console.log(selectedUser);
    console.log('selection has changed');

    const userSelected = appUsers.find(
      (userSelected) => userSelected.id === selectedUser
    );
    console.log(userSelected);
    return userSelected;
  }

  constructor() {
    console.log(appUsers[0]);
  }

  ngOnInit(): void {}
}

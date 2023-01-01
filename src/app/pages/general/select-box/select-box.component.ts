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
    email: string;
    carros: [];
  };
  // public selectedUser = '';
  // onChange(event) {
  //   const selectedUser = event;
  //   const userSelected = appUsers.find(
  //     (userSelected) => userSelected.id === selectedUser
  //   );
  // }

  selectedUser;
  type;
  nameUser;
  nameEmail;

  onChange(event) {
    const selectedUserId = event;
    this.selectedUser = appUsers.find((u) => u.id === selectedUserId);
  }

  loading = true;

  constructor() {}

  ngOnInit(): void {
    this.loading = false;
  }

  getUser(event) {
    const selectedUsername = event;
    console.log(selectedUsername);
    this.findElement(selectedUsername);
  }
  findElement(username) {
    for (let i = 0; i < this.appUsers.length; i++) {
      const element = this.appUsers[i].username;
      if (element === username) {
        this.nameUser = this.appUsers[i].name;
        this.nameEmail = this.appUsers[i].email;
        this.selectedUser = this.appUsers[i].carros;
      }
    }
  }
}

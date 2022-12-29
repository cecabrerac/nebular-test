import { Component, OnInit } from '@angular/core';
import { SelectBoxComponent } from '../select-box/select-box.component';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss'],
})
export class UserDetailsComponent implements OnInit {
  // callingClass = new SelectBoxComponent();
  // selectedUser = this.callingClass.selectedUser;

  constructor() {}

  ngOnInit(): void {}
}

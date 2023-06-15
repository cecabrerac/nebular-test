import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WebSocketService } from '../../../web-socket.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent implements OnInit, AfterViewInit {
  title = 'Messages';
  messages = [];
  newMessage: string;
  formMessage: string;

  constructor(private WebSoCketService: WebSocketService) {}

  ngOnInit() {
    // here we want to listen to an event from the sockect.io server
    // this.WebSoCketService.listen('message').subscribe((data) => {
    //   console.log(data);
    // });
  }

  ngAfterViewInit() {
    // here we want to listen to an event from the sockect.io server
    this.WebSoCketService.listen('message').subscribe((data) => {
      // console.log(data);
      this.messages.push(data);
      console.log(this.newMessage);
    });
  }
  sendMessage(): void {
    this.newMessage = this.formMessage;
    this.formMessage = '';
    this.WebSoCketService.emit('message', this.newMessage);
  }
}

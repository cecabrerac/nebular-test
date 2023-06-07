import { Component, OnInit, AfterViewInit } from '@angular/core';
import { WebSocketService } from './web-socket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nebular-test';

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
      console.log(data);
    });
  }
}

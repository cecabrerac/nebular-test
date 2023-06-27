import { Component, OnInit, AfterViewInit, isDevMode } from '@angular/core';
import { WebSocketService } from './web-socket.service';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'nebular-test';

  constructor(
    private WebSoCketService: WebSocketService,
    public translate: TranslateService
  ) {
    translate.addLangs(['es', 'en']);
    const lang = translate.getBrowserLang();
    if (lang !== 'es' && lang !== 'en') {
      translate.setDefaultLang('en');
      translate.use('en');
    } else {
      translate.use('es');
    }
  }

  ngOnInit() {
    // here we want to listen to an event from the sockect.io server
    // this.WebSoCketService.listen('message').subscribe((data) => {
    //   console.log(data);
    // });

    if (isDevMode()) {
      console.log('Development!');
    } else {
      console.log('Production!');
    }
  }

  ngAfterViewInit() {
    // here we want to listen to an event from the sockect.io server
    this.WebSoCketService.listen('message').subscribe((data) => {
      console.log(data);
    });
  }
}

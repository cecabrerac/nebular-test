import { Injectable } from '@angular/core';
import { Observable, Subscriber, observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  socket: any;
  readonly uri: string = environment.serverURL;
  // readonly uri: string = 'https://apptrial.herokuapp.com/';

  constructor() {
    this.socket = io(this.uri, {
      withCredentials: true,
    });
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data) => subscriber.next(data));
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}

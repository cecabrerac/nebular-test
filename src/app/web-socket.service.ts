import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { io } from 'socket.io-client';
import { environment } from 'src/environments/environment';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  socket: any;
  readonly uri: string = environment.serverURL;

  constructor() {
    this.socket = io(this.uri, {
      transports: ['websocket'],
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

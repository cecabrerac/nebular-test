import { Injectable } from '@angular/core';
import { Observable, Subscriber, observable } from 'rxjs';
import { io } from 'socket.io-client';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class WebSocketService {
  socket: any;
  readonly uri: string = 'ws://localhost:3000';

  constructor() {
    this.socket = io(this.uri);
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
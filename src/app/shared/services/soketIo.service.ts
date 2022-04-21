import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Observable, Subscriber } from 'rxjs';

@Injectable({ providedIn: "root" })
export class SocketService {

    socket: any;

    constructor() {
    }

    setupSocketConnection(user:any):any {
        this.socket = io('http://localhost:3000');
        this.socket.on('From db', (data: any) => {
            return data;
            
        });
    }
}
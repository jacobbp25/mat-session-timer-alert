import { Injectable } from '@angular/core';
import { SessionInteruptService } from 'session-timer-alert';
import { HttpClient } from '@angular/common/http';
// import { SessionInteruptService } from 'projects/session-timer-alert/src/public_api';

@Injectable()
export class AppSessionInteruptService extends SessionInteruptService {
  constructor(private readonly httpClient: HttpClient) {
    super();
  }
  continueSession() {
    console.log(`I issue an API request to server.`);
  }
  stopSession() {
    console.log(`I logout.`);
  }
}

import {Injectable} from '@angular/core';
import * as Pusher from 'pusher-js';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class PusherService {

  pusher: any;
  channel: any;

  constructor(private http: HttpClient) {
    this.pusher = new Pusher(environment.pusher.key, {
      cluster: environment.pusher.cluster,
      encrypted: true
    });

    this.channel = this.pusher.subscribe('events-channel');
  }

  // like( num_likes ) {
  //   his.http.post('http://localhost:3120/update', {'likes': num_likes})
  //     .subscribe(data => {});
  // }
}

import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserPictureService {

  constructor(private http: Http) {
  }


  getUserPictureUrl() {
    return this.http.get('https://randomuser.me/api/').map(result => {
      return JSON.parse(result['_body'])['results'][0]['picture']['large'];
    })
  }
}

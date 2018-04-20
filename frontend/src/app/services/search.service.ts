import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class SearchService {

  private _isSearching: BehaviorSubject<boolean>;
  private _queryString: BehaviorSubject<string>;


  constructor(private httpClient: HttpClient) {
    this._isSearching = new BehaviorSubject(false);
    this._queryString = new BehaviorSubject('');
  }

  getIsSearching(): Observable<boolean> {
    return this._isSearching.asObservable();
  }

  setIsSearching(value: boolean): void {
    this._isSearching.next(value);
  }

  getQueryString(): Observable<string> {
    return this._queryString.asObservable();
  }

  setQueryString(value: string): void {
    this._queryString.next(value);
  }


  searchByLastName(lastName): Observable<any[]> {
    return this.httpClient.get<any[]>(`/api/employees/search?lastName=${lastName}`)
  }

}

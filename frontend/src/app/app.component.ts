import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import * as Rx from 'rxjs/Rx'
import {SearchService} from './services/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Employee App';
  searchForm: FormGroup;
  searching = false;
  private lastNameSearch = new Rx.Subject<string>();

  constructor(private _fb: FormBuilder, private searchService: SearchService) {
    this.lastNameSearch.debounceTime(700).distinctUntilChanged().subscribe(term => {
      console.log('q', term);
      this.searchService.setQueryString(term);
    });

    this.searchService.getIsSearching().subscribe(isSearch => {
      this.searching = isSearch;
    })
  }

  ngOnInit() {
    this.searchForm = this._fb.group({
      search: [''],
    });
  }

  onSearchTyped(value) {
    console.log(value);
    this.searchService.setIsSearching(true);
    this.lastNameSearch.next(value);
  }
}

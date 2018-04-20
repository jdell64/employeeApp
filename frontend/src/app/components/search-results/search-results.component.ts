import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {

  // private searchUpdated: BehaviorSubject<string> = new BehaviorSubject('');
  // @Output() searchChangeEmitter: EventEmitter<any> = new EventEmitter<any>();  // This is an output component that tells the rest of the world that the user has entered a valid text

  constructor(private route: ActivatedRoute) {
    // this.searchChangeEmitter = <any>this.searchUpdate.asObservable()
    //   .debounceTime(200)
    //   .distinctUntilChanged();
  }

  ngOnInit() {
    // this.route.queryParamMap.subscribe(qParams => {

    // })
  }

  onSearchTyped(value) {
    // this.searchUpdated.next(value)
  }

}

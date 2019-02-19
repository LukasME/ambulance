import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import { WaitingListEntry } from '../store/waiting-list-entry/waiting-list-entry.model';
import { Store, select } from '@ngrx/store';
import { State, selectWaitingList } from '../store';
import * as fromWaitingList from '../store/waiting-list-entry/waiting-list-entry.reducer';

@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.css']
})
export class AngularListComponent implements OnInit {

  private static readonly MINUTE = 60 * 1000;
  public readonly waitingList: Observable<WaitingListEntry[]>;

  constructor(private store: Store<State>) {
    this.waitingList = store.pipe(
      select(selectWaitingList),
      select(fromWaitingList.adapter.getSelectors().selectAll)
    );
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, selectWaitingList } from './../store/index';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { WaitingListEntry } from '../store/waiting-list-entry/waiting-list-entry.model';
import * as fromWaitingList from '../store/waiting-list-entry/waiting-list-entry.reducer';

@Component({
  selector: 'app-waiting-entry-editor',
  templateUrl: './waiting-entry-editor.component.html',
  styleUrls: ['./waiting-entry-editor.component.css']
})
export class WaitingEntryEditorComponent implements OnInit {

  private static newEntryPlaceholder: WaitingListEntry = {
    id: undefined,
    name: '',
    patientId: '',
    since: new Date(Date.now()),
    estimated: undefined,
    estimatedDurationMinutes: 20,
    condition: 'Nevolnost'
  };

  public readonly knownConditions$: Observable< { concept: string, display: string}[] >;
  public data$: Observable<WaitingListEntry>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly store: Store<State>
  ) { 
    this.knownConditions$ = of([
      {concept: 'followup', display: 'Kontrola'},
      {concept: 'nausea', display: 'Nevolnosť'},
      {concept: 'fever', display: 'Vysoké teploty'}
    ]);
  }

  ngOnInit() {
    this.data$ = this.route.paramMap.pipe(
      map( paramMap => paramMap.get('id')),
      switchMap(
        id => (id === 'new')
          ? of(WaitingEntryEditorComponent.newEntryPlaceholder)
          : this.store.pipe(
            select(selectWaitingList), 
            select(fromWaitingList.adapter.getSelectors().selectEntities),
            select(entities => entities[id])
          )
      )
    )
  }

}

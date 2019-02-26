import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State, selectWaitingList } from './../store/index';
import { ActivatedRoute } from '@angular/router';
import { of, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { WaitingListEntry } from '../store/waiting-list-entry/waiting-list-entry.model';
import * as fromWaitingList from '../store/waiting-list-entry/waiting-list-entry.reducer';

@Component({
  selector: 'app-waiting-entry',
  templateUrl: './waiting-entry.component.html',
  styleUrls: ['./waiting-entry.component.css']
})
export class WaitingEntryComponent implements OnInit {

  @Input() data: WaitingListEntry;

  @Output() public delete = new EventEmitter<WaitingListEntry>();

  constructor() { }

  ngOnInit() {
  }

}


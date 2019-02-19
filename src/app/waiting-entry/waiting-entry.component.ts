import { Component, OnInit, Input } from '@angular/core';
import { WaitingListEntry } from '../model/waiting-list-entry';

@Component({
  selector: 'app-waiting-entry',
  templateUrl: './waiting-entry.component.html',
  styleUrls: ['./waiting-entry.component.css']
})
export class WaitingEntryComponent implements OnInit {

  @Input() data: WaitingListEntry;

  constructor() { }

  ngOnInit() {
  }

}


import { Component, OnInit } from '@angular/core';
import { Observable, of} from 'rxjs';
import { WaitingListEntry } from '../model/waiting-list-entry';


@Component({
  selector: 'app-angular-list',
  templateUrl: './angular-list.component.html',
  styleUrls: ['./angular-list.component.css']
})
export class AngularListComponent implements OnInit {

  public readonly waitingList: Observable<WaitingListEntry[]>;
  private static readonly MINUTE = 60 * 1000;

  constructor() {
    this.waitingList = of([
      {
        name: 'Janko',
        patientId: '123',
        since: new Date(Date.now() - 30 * AngularListComponent.MINUTE),
        estimated: new Date(Date.now() - 30 * AngularListComponent.MINUTE),
        estimatedDurationMinutes: 15,
        condition: 'Nadcha'
      },
      {
        name: 'Andrejko',
        patientId: '124',
        since: new Date(Date.now() - 30 * AngularListComponent.MINUTE),
        estimated: new Date(Date.now() - 30 * AngularListComponent.MINUTE),
        estimatedDurationMinutes: 35,
        condition: 'Ja neviem uš'
      }
    ]);
  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { Actions, Effect, ROOT_EFFECTS_INIT, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { LoadWaitingListEntrys } from '../store/waiting-list-entry/waiting-list-entry.actions';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';





@Injectable()
export class AppEffects {

  private static readonly MINUTE = 60 * 1000;

  constructor(private actions$: Actions) {}

  @Effect()
  init$: Observable<Action> = this.actions$.pipe(
    ofType(ROOT_EFFECTS_INIT),
    map( _ => new LoadWaitingListEntrys({
      waitingListEntrys:[
        {
          id:'54q4wr8',
          name: 'Janko',
          patientId: '123',
          since: new Date(Date.now() - 30 * AppEffects.MINUTE),
          estimated: new Date(Date.now() - 30 * AppEffects.MINUTE),
          estimatedDurationMinutes: 15,
          condition: 'Nadcha'
        },
        {
          id:'54qw5e4',
          name: 'Andrejko',
          patientId: '124',
          since: new Date(Date.now() - 30 * AppEffects.MINUTE),
          estimated: new Date(Date.now() - 30 * AppEffects.MINUTE),
          estimatedDurationMinutes: 35,
          condition: 'Ja neviem uš'
        }
      ]
    }))

  )
}

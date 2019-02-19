import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromWaitingListEntry from './waiting-list-entry/waiting-list-entry.reducer';

export const selectWaitingList = (state: State) => state.waitingListEntry;

export interface State {

  waitingListEntry: fromWaitingListEntry.State;
}

export const reducers: ActionReducerMap<State> = {

  waitingListEntry: fromWaitingListEntry.reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

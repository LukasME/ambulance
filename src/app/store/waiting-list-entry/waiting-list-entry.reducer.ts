import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { WaitingListEntry } from './waiting-list-entry.model';
import { WaitingListEntryActions, WaitingListEntryActionTypes } from './waiting-list-entry.actions';

export interface State extends EntityState<WaitingListEntry> {
  // additional entities state properties
}

export const adapter: EntityAdapter<WaitingListEntry> = createEntityAdapter<WaitingListEntry>();

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
});

export function reducer(
  state = initialState,
  action: WaitingListEntryActions
): State {
  switch (action.type) {
    case WaitingListEntryActionTypes.AddWaitingListEntry: {
      return adapter.addOne(action.payload.waitingListEntry, state);
    }

    case WaitingListEntryActionTypes.UpsertWaitingListEntry: {
      return adapter.upsertOne(action.payload.waitingListEntry, state);
    }

    case WaitingListEntryActionTypes.AddWaitingListEntrys: {
      return adapter.addMany(action.payload.waitingListEntrys, state);
    }

    case WaitingListEntryActionTypes.UpsertWaitingListEntrys: {
      return adapter.upsertMany(action.payload.waitingListEntrys, state);
    }

    case WaitingListEntryActionTypes.UpdateWaitingListEntry: {
      return adapter.updateOne(action.payload.waitingListEntry, state);
    }

    case WaitingListEntryActionTypes.UpdateWaitingListEntrys: {
      return adapter.updateMany(action.payload.waitingListEntrys, state);
    }

    case WaitingListEntryActionTypes.DeleteWaitingListEntry: {
      return adapter.removeOne(action.payload.id, state);
    }

    case WaitingListEntryActionTypes.DeleteWaitingListEntrys: {
      return adapter.removeMany(action.payload.ids, state);
    }

    case WaitingListEntryActionTypes.LoadWaitingListEntrys: {
      return adapter.addAll(action.payload.waitingListEntrys, state);
    }

    case WaitingListEntryActionTypes.ClearWaitingListEntrys: {
      return adapter.removeAll(state);
    }

    default: {
      return state;
    }
  }
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

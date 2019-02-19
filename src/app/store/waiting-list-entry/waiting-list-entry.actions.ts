import { Action } from '@ngrx/store';
import { Update } from '@ngrx/entity';
import { WaitingListEntry } from './waiting-list-entry.model';

export enum WaitingListEntryActionTypes {
  LoadWaitingListEntrys = '[WaitingListEntry] Load WaitingListEntrys',
  AddWaitingListEntry = '[WaitingListEntry] Add WaitingListEntry',
  UpsertWaitingListEntry = '[WaitingListEntry] Upsert WaitingListEntry',
  AddWaitingListEntrys = '[WaitingListEntry] Add WaitingListEntrys',
  UpsertWaitingListEntrys = '[WaitingListEntry] Upsert WaitingListEntrys',
  UpdateWaitingListEntry = '[WaitingListEntry] Update WaitingListEntry',
  UpdateWaitingListEntrys = '[WaitingListEntry] Update WaitingListEntrys',
  DeleteWaitingListEntry = '[WaitingListEntry] Delete WaitingListEntry',
  DeleteWaitingListEntrys = '[WaitingListEntry] Delete WaitingListEntrys',
  ClearWaitingListEntrys = '[WaitingListEntry] Clear WaitingListEntrys'
}

export class LoadWaitingListEntrys implements Action {
  readonly type = WaitingListEntryActionTypes.LoadWaitingListEntrys;

  constructor(public payload: { waitingListEntrys: WaitingListEntry[] }) {}
}

export class AddWaitingListEntry implements Action {
  readonly type = WaitingListEntryActionTypes.AddWaitingListEntry;

  constructor(public payload: { waitingListEntry: WaitingListEntry }) {}
}

export class UpsertWaitingListEntry implements Action {
  readonly type = WaitingListEntryActionTypes.UpsertWaitingListEntry;

  constructor(public payload: { waitingListEntry: WaitingListEntry }) {}
}

export class AddWaitingListEntrys implements Action {
  readonly type = WaitingListEntryActionTypes.AddWaitingListEntrys;

  constructor(public payload: { waitingListEntrys: WaitingListEntry[] }) {}
}

export class UpsertWaitingListEntrys implements Action {
  readonly type = WaitingListEntryActionTypes.UpsertWaitingListEntrys;

  constructor(public payload: { waitingListEntrys: WaitingListEntry[] }) {}
}

export class UpdateWaitingListEntry implements Action {
  readonly type = WaitingListEntryActionTypes.UpdateWaitingListEntry;

  constructor(public payload: { waitingListEntry: Update<WaitingListEntry> }) {}
}

export class UpdateWaitingListEntrys implements Action {
  readonly type = WaitingListEntryActionTypes.UpdateWaitingListEntrys;

  constructor(public payload: { waitingListEntrys: Update<WaitingListEntry>[] }) {}
}

export class DeleteWaitingListEntry implements Action {
  readonly type = WaitingListEntryActionTypes.DeleteWaitingListEntry;

  constructor(public payload: { id: string }) {}
}

export class DeleteWaitingListEntrys implements Action {
  readonly type = WaitingListEntryActionTypes.DeleteWaitingListEntrys;

  constructor(public payload: { ids: string[] }) {}
}

export class ClearWaitingListEntrys implements Action {
  readonly type = WaitingListEntryActionTypes.ClearWaitingListEntrys;
}

export type WaitingListEntryActions =
 LoadWaitingListEntrys
 | AddWaitingListEntry
 | UpsertWaitingListEntry
 | AddWaitingListEntrys
 | UpsertWaitingListEntrys
 | UpdateWaitingListEntry
 | UpdateWaitingListEntrys
 | DeleteWaitingListEntry
 | DeleteWaitingListEntrys
 | ClearWaitingListEntrys;

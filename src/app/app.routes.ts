import { WaitingEntryEditorComponent } from './waiting-entry-editor/waiting-entry-editor.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { Routes } from '@angular/router';


export const routes: Routes = [
    { path: 'waiting-list', component: AngularListComponent },
    { path: 'waiting-list/:id', component: WaitingEntryEditorComponent },
    {
        path: '',
        redirectTo: 'waiting-list',
        pathMatch: 'full'
    }


]
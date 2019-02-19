import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularListComponent } from './angular-list/angular-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatExpansionModule, MatFormFieldModule, MatInputModule } from '@angular/material';
import { WaitingEntryComponent } from './waiting-entry/waiting-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    AngularListComponent,
    WaitingEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

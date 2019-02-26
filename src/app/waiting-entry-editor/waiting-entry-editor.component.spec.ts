import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingEntryEditorComponent } from './waiting-entry-editor.component';

describe('WaitingEntryEditorComponent', () => {
  let component: WaitingEntryEditorComponent;
  let fixture: ComponentFixture<WaitingEntryEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingEntryEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingEntryEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

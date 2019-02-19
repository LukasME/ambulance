import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WaitingEntryComponent } from './waiting-entry.component';

describe('WaitingEntryComponent', () => {
  let component: WaitingEntryComponent;
  let fixture: ComponentFixture<WaitingEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WaitingEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WaitingEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

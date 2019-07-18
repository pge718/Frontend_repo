import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedprofileComponent } from './completedprofile.component';

describe('CompletedprofileComponent', () => {
  let component: CompletedprofileComponent;
  let fixture: ComponentFixture<CompletedprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

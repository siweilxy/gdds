import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationSubsComponent } from './relation-subs.component';

describe('RelationSubsComponent', () => {
  let component: RelationSubsComponent;
  let fixture: ComponentFixture<RelationSubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationSubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationSubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

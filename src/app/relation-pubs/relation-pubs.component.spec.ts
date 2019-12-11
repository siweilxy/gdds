import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelationPubsComponent } from './relation-pubs.component';

describe('RelationPubsComponent', () => {
  let component: RelationPubsComponent;
  let fixture: ComponentFixture<RelationPubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelationPubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelationPubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

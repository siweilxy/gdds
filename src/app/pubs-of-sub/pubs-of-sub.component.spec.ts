import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubsOfSubComponent } from './pubs-of-sub.component';

describe('PubsOfSubComponent', () => {
  let component: PubsOfSubComponent;
  let fixture: ComponentFixture<PubsOfSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubsOfSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubsOfSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

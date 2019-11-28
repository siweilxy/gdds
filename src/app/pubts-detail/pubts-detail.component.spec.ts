import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubtsDetailComponent } from './pubts-detail.component';

describe('PubtsDetailComponent', () => {
  let component: PubtsDetailComponent;
  let fixture: ComponentFixture<PubtsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubtsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubtsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubinfoDetailComponent } from './pubinfo-detail.component';

describe('PubinfoDetailComponent', () => {
  let component: PubinfoDetailComponent;
  let fixture: ComponentFixture<PubinfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubinfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubinfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinfoDetailComponent } from './apinfo-detail.component';

describe('ApinfoDetailComponent', () => {
  let component: ApinfoDetailComponent;
  let fixture: ComponentFixture<ApinfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApinfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

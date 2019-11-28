import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubinfoDetailComponent } from './subinfo-detail.component';

describe('SubinfoDetailComponent', () => {
  let component: SubinfoDetailComponent;
  let fixture: ComponentFixture<SubinfoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubinfoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubinfoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

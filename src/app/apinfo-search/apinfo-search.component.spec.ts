import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApinfoSearchComponent } from './apinfo-search.component';

describe('ApinfoSearchComponent', () => {
  let component: ApinfoSearchComponent;
  let fixture: ComponentFixture<ApinfoSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApinfoSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApinfoSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

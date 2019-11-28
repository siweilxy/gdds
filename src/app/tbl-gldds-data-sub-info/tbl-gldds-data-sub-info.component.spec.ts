import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblGlddsDataSubInfoComponent } from './tbl-gldds-data-sub-info.component';

describe('TblGlddsDataSubInfoComponent', () => {
  let component: TblGlddsDataSubInfoComponent;
  let fixture: ComponentFixture<TblGlddsDataSubInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblGlddsDataSubInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblGlddsDataSubInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

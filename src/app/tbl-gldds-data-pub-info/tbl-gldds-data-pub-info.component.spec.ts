import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblGlddsDataPubInfoComponent } from './tbl-gldds-data-pub-info.component';

describe('TblGlddsDataPubInfoComponent', () => {
  let component: TblGlddsDataPubInfoComponent;
  let fixture: ComponentFixture<TblGlddsDataPubInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblGlddsDataPubInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblGlddsDataPubInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

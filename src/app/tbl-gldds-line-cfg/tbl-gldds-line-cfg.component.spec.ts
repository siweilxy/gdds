import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblGlddsLineCfgComponent } from './tbl-gldds-line-cfg.component';

describe('TblGlddsLineCfgComponent', () => {
  let component: TblGlddsLineCfgComponent;
  let fixture: ComponentFixture<TblGlddsLineCfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblGlddsLineCfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblGlddsLineCfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblGlddsApInfoComponent } from './tbl-gldds-ap-info.component';

describe('TblGlddsApInfoComponent', () => {
  let component: TblGlddsApInfoComponent;
  let fixture: ComponentFixture<TblGlddsApInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblGlddsApInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblGlddsApInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

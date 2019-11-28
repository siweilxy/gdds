import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblGlddsSubTsComponent } from './tbl-gldds-sub-ts.component';

describe('TblGlddsSubTsComponent', () => {
  let component: TblGlddsSubTsComponent;
  let fixture: ComponentFixture<TblGlddsSubTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblGlddsSubTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblGlddsSubTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

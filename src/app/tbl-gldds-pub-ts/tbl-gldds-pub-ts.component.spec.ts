import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TblGlddsPubTsComponent } from './tbl-gldds-pub-ts.component';

describe('TblGlddsPubTsComponent', () => {
  let component: TblGlddsPubTsComponent;
  let fixture: ComponentFixture<TblGlddsPubTsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TblGlddsPubTsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TblGlddsPubTsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

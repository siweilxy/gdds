import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinecfgDetailComponent } from './linecfg-detail.component';

describe('LinecfgDetailComponent', () => {
  let component: LinecfgDetailComponent;
  let fixture: ComponentFixture<LinecfgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinecfgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinecfgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubcfgDetailComponent } from './subcfg-detail.component';

describe('SubcfgDetailComponent', () => {
  let component: SubcfgDetailComponent;
  let fixture: ComponentFixture<SubcfgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubcfgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubcfgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PubcfgDetailComponent } from './pubcfg-detail.component';

describe('PubcfgDetailComponent', () => {
  let component: PubcfgDetailComponent;
  let fixture: ComponentFixture<PubcfgDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PubcfgDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PubcfgDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

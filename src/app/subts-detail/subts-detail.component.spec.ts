import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubtsDetailComponent } from './subts-detail.component';

describe('SubtsDetailComponent', () => {
  let component: SubtsDetailComponent;
  let fixture: ComponentFixture<SubtsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubtsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubtsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

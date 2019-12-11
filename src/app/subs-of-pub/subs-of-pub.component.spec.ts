import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsOfPubComponent } from './subs-of-pub.component';

describe('SubsOfPubComponent', () => {
  let component: SubsOfPubComponent;
  let fixture: ComponentFixture<SubsOfPubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubsOfPubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubsOfPubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

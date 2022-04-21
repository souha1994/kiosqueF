import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavitaillementComponent } from './ravitaillement.component';

describe('RavitaillementComponent', () => {
  let component: RavitaillementComponent;
  let fixture: ComponentFixture<RavitaillementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavitaillementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavitaillementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

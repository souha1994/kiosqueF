import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RavitaillementModalComponent } from './ravitaillement-modal.component';

describe('RavitaillementModalComponent', () => {
  let component: RavitaillementModalComponent;
  let fixture: ComponentFixture<RavitaillementModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RavitaillementModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RavitaillementModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

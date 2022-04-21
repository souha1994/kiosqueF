import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PistoletModalComponent } from './pistolet-modal.component';

describe('PistoletModalComponent', () => {
  let component: PistoletModalComponent;
  let fixture: ComponentFixture<PistoletModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PistoletModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PistoletModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

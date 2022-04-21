import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PompeModalComponent } from './pompe-modal.component';

describe('PompeModalComponent', () => {
  let component: PompeModalComponent;
  let fixture: ComponentFixture<PompeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PompeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PompeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

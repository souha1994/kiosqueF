import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PistoletHistoryComponent } from './pistolet-history.component';

describe('PistoletHistoryComponent', () => {
  let component: PistoletHistoryComponent;
  let fixture: ComponentFixture<PistoletHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PistoletHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PistoletHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

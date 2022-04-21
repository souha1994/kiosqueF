import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteStatisticComponent } from './vente-statistic.component';

describe('VenteStatisticComponent', () => {
  let component: VenteStatisticComponent;
  let fixture: ComponentFixture<VenteStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

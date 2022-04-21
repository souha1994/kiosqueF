import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VenteHistoriqueStatisticComponent } from './vente-historique-statistic.component';

describe('VenteHistoriqueStatisticComponent', () => {
  let component: VenteHistoriqueStatisticComponent;
  let fixture: ComponentFixture<VenteHistoriqueStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VenteHistoriqueStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenteHistoriqueStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

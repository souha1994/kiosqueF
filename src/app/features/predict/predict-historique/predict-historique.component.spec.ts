import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictHistoriqueComponent } from './predict-historique.component';

describe('PredictHistoriqueComponent', () => {
  let component: PredictHistoriqueComponent;
  let fixture: ComponentFixture<PredictHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PredictHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PredictHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

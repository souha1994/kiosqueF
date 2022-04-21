import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationTanksStatisticComponent } from './station-tanks-statistic.component';

describe('StationTanksStatisticComponent', () => {
  let component: StationTanksStatisticComponent;
  let fixture: ComponentFixture<StationTanksStatisticComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationTanksStatisticComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationTanksStatisticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StationTanksComponent } from './station-tanks.component';

describe('StationTanksComponent', () => {
  let component: StationTanksComponent;
  let fixture: ComponentFixture<StationTanksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StationTanksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StationTanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeListStationComponent } from './employe-list-station.component';

describe('EmployeListStationComponent', () => {
  let component: EmployeListStationComponent;
  let fixture: ComponentFixture<EmployeListStationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeListStationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeListStationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

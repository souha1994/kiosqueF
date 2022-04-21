import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PompesListComponent } from './pompes-list.component';

describe('PompesListComponent', () => {
  let component: PompesListComponent;
  let fixture: ComponentFixture<PompesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PompesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PompesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

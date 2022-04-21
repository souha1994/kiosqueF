import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPompesComponent } from './list-pompes.component';

describe('ListPompesComponent', () => {
  let component: ListPompesComponent;
  let fixture: ComponentFixture<ListPompesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPompesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPompesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

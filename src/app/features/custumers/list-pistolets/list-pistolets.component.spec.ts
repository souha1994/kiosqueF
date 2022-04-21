import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPistoletsComponent } from './list-pistolets.component';

describe('ListPistoletsComponent', () => {
  let component: ListPistoletsComponent;
  let fixture: ComponentFixture<ListPistoletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPistoletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPistoletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

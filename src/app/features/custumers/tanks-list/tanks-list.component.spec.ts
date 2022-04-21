import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TanksListComponent } from './tanks-list.component';


describe('TankListComponent', () => {
  let component: TanksListComponent;
  let fixture: ComponentFixture<TanksListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TanksListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TanksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

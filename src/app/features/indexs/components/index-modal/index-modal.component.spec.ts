import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexModalComponent } from './index-modal.component';

describe('IndexModalComponent', () => {
  let component: IndexModalComponent;
  let fixture: ComponentFixture<IndexModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndexModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAddedComponent } from './modal-added.component';

describe('ModalAddedComponent', () => {
  let component: ModalAddedComponent;
  let fixture: ComponentFixture<ModalAddedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAddedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAddedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

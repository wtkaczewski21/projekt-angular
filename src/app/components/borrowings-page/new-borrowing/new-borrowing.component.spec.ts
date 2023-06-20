import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBorrowingComponent } from './new-borrowing.component';

describe('NewBorrowingComponent', () => {
  let component: NewBorrowingComponent;
  let fixture: ComponentFixture<NewBorrowingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewBorrowingComponent]
    });
    fixture = TestBed.createComponent(NewBorrowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

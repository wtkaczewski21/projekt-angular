import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBorrowingsComponent } from './customer-borrowings.component';

describe('CustomerBorrowingsComponent', () => {
  let component: CustomerBorrowingsComponent;
  let fixture: ComponentFixture<CustomerBorrowingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerBorrowingsComponent]
    });
    fixture = TestBed.createComponent(CustomerBorrowingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

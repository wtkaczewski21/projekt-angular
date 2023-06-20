import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsListComponent } from './borrowings-list.component';

describe('BorrowingsListComponent', () => {
  let component: BorrowingsListComponent;
  let fixture: ComponentFixture<BorrowingsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowingsListComponent]
    });
    fixture = TestBed.createComponent(BorrowingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

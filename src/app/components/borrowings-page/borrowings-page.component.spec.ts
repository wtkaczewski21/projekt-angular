import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowingsPageComponent } from './borrowings-page.component';

describe('BorrowingsPageComponent', () => {
  let component: BorrowingsPageComponent;
  let fixture: ComponentFixture<BorrowingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BorrowingsPageComponent]
    });
    fixture = TestBed.createComponent(BorrowingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteBookComponent } from './favorite-book.component';

describe('FavoriteBookComponent', () => {
  let component: FavoriteBookComponent;
  let fixture: ComponentFixture<FavoriteBookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteBookComponent]
    });
    fixture = TestBed.createComponent(FavoriteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

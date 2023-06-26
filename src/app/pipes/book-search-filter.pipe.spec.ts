import { BookSearchFilterPipe } from './book-search-filter.pipe';

describe('SearchFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new BookSearchFilterPipe();
    expect(pipe).toBeTruthy();
  });
});

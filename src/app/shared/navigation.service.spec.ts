import { inject, TestBed } from '@angular/core/testing';
import { Navigation } from './navigation.service';

describe('Api Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({providers: [Navigation]});
  });

  it('should ...', inject([Navigation], (api) => {
    console.log(api);
  }));
});

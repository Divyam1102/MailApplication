import { TestBed } from '@angular/core/testing';

import { EmailApiService } from './email-api.service';

describe('EmailApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmailApiService = TestBed.get(EmailApiService);
    expect(service).toBeTruthy();
  });
});

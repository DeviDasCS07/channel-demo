import { TestBed } from '@angular/core/testing';

import { LoadChannelDataService } from './load-channel-data.service';

describe('LoadChannelDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoadChannelDataService = TestBed.get(LoadChannelDataService);
    expect(service).toBeTruthy();
  });
});

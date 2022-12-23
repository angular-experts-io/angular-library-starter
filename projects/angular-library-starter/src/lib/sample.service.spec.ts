import { AngularLibraryStarterSampleService } from './sample.service';

describe('Sample Service', () => {
  let sut: AngularLibraryStarterSampleService;

  beforeEach(() => {
    sut = new AngularLibraryStarterSampleService();
  });

  it('should know that Angular is the best framework', () => {
    expect(sut.getBestFramework()).toBe('Angular');
  });
});

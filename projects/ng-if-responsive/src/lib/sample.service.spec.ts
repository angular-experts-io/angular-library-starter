import { NgIfResponsiveSampleService } from './sample.service';

describe('Sample Service', () => {
  let sut: NgIfResponsiveSampleService;

  beforeEach(() => {
    sut = new NgIfResponsiveSampleService();
  });

  it('should know that Angular is the best framework', () => {
    expect(sut.getBestFramework()).toBe('Angular');
  });
});

import {SampleService} from "./sample.service";

describe('Sample Service', () => {

    let sut: SampleService;

    beforeEach(() => {
        sut = new SampleService();
    });

    it('should know that Angular is the best framework', () => {
        expect(sut.getBestFramework()).toBe('Angular');
    });
})

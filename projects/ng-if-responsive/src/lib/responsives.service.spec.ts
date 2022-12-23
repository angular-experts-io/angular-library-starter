import { TestScheduler } from 'rxjs/testing';
import { of } from 'rxjs';

import { ResponsiveService } from './responsive.service';

describe('Responsive Service', () => {
  let sut: ResponsiveService;
  let scheduler: TestScheduler;
  const viewPortRulerMock = {
    change: () => of(1),
    getViewportSize: jest.fn(),
  } as any;

  beforeEach(() => {
    sut = new ResponsiveService(viewPortRulerMock);
    scheduler = new TestScheduler((actual, expected) =>
      expect(actual).toEqual(expected)
    );
  });

  afterEach(() => jest.restoreAllMocks());

  it('should return true if the screen is bigger than the breakpoint', () => {
    const breakPointWidth = 640;
    const screenWidth = 1000;
    viewPortRulerMock.getViewportSize = () => ({
      width: screenWidth,
    });

    scheduler.run(({ expectObservable }) => {
      expectObservable(sut.isScreenBiggerThanBreakpoint(breakPointWidth)).toBe(
        '(a|)',
        { a: true }
      );
    });
  });

  it('should return false if the screen is small than the breakpoint', () => {
    const breakPointWidth = 1000;
    const screenWidth = 640;
    viewPortRulerMock.getViewportSize = () => ({
      width: screenWidth,
    });

    scheduler.run(({ expectObservable }) => {
      expectObservable(sut.isScreenBiggerThanBreakpoint(breakPointWidth)).toBe(
        '(a|)',
        { a: false }
      );
    });
  });
});

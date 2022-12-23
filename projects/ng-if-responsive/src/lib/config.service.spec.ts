import { ConfigService } from './config.service';

describe('ConfigService', () => {
  let sut: ConfigService;

  beforeEach(() => {
    sut = new ConfigService();
  });

  afterEach(() => jest.restoreAllMocks());

  it('should return a number if we pass in a number', function () {
    const breakPoint = 640;
    expect(sut.getBreakPointFromConfig(null, breakPoint)).toBe(breakPoint);
  });

  it('should return null and log an error message if we pass a key but no config', function () {
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn());
    expect(sut.getBreakPointFromConfig(null, 'lg')).toBeNull();
    expect(console.error).toHaveBeenCalledWith(
      'Please provide a breakpoint configuration via the RESPONSIVE_NG_IF_CONFIG injection token'
    );
  });

  it('should return null and log an error message if we pass a key that does not exist in the config', function () {
    const breakPoint = 'lg';
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

    expect(sut.getBreakPointFromConfig({ sm: 640 }, breakPoint)).toBeNull();
    expect(console.error).toHaveBeenCalledWith(
      `Couldn't find a breakpoint named ${breakPoint} in the configuration provided via the RESPONSIVE_NG_IF_CONFIG injecton token`
    );
  });

  it('should return the config value if the key matches the config', function () {
    const breakPoint = 'sm';
    const breakPointValue = 640;
    jest.spyOn(console, 'error').mockImplementation(() => jest.fn());

    expect(
      sut.getBreakPointFromConfig({ sm: breakPointValue }, breakPoint)
    ).toBe(breakPointValue);
  });
});

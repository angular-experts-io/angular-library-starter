import { of } from 'rxjs';
import * as angularCore from '@angular/core';

import { NgIfResponsiveRemoveDirective } from './ng-if-responsive-remove.directive';

describe('ResponsiveRemoveDirective', () => {
  let sut: NgIfResponsiveRemoveDirective;
  const responsiveServiceMock = {
    isScreenBiggerThanBreakpoint: () => of(1),
  } as any;
  const configServiceMock = {
    getBreakPointFromConfig: () => 640,
  } as any;
  const viewMock = {
    clear: jest.fn(),
    createEmbeddedView: jest.fn(),
  } as any;
  const templateMock = {
    clear: jest.fn(),
    createEmbeddedView: jest.fn(),
  } as any;

  jest.spyOn(angularCore, 'inject').mockImplementation(() => {});

  beforeEach(() => {
    sut = new NgIfResponsiveRemoveDirective(
      responsiveServiceMock,
      configServiceMock,
      viewMock,
      templateMock
    );
  });

  afterEach(() => jest.resetAllMocks());

  it('should return if the config service does not return a breakpoint', function () {
    configServiceMock.getBreakPointFromConfig = () => null;
    jest.spyOn(responsiveServiceMock, 'isScreenBiggerThanBreakpoint');

    sut.ngOnInit();
    expect(
      responsiveServiceMock.isScreenBiggerThanBreakpoint
    ).not.toHaveBeenCalled();
  });

  it('should remove the host from the ViewContainer if the screen is bigger than the breakpoint', function () {
    responsiveServiceMock.isScreenBiggerThanBreakpoint = () => of(true);
    configServiceMock.getBreakPointFromConfig = () => 640;

    sut.ngOnInit();
    expect(viewMock.clear).toHaveBeenCalled();
  });

  it('should create an embedded view on the ViewContainer if the screen is smaller than the breakpoint', function () {
    responsiveServiceMock.isScreenBiggerThanBreakpoint = () => of(false);
    configServiceMock.getBreakPointFromConfig = () => 640;

    sut.ngOnInit();
    expect(viewMock.createEmbeddedView).toHaveBeenCalledWith(templateMock);
  });
});

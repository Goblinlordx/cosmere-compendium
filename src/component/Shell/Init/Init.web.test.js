import React from 'react';
import { mount } from 'enzyme';
import InitShell, { BasicUninitialized } from './Init.web';

describe('InitShell', () => {
  it('should render without crashing with no props', () => {
    const mounted = mount(<InitShell />);
    expect(mounted.length).toBe(1);
  });
  it('should render uninitialized component when init is false', () => {
    const props = {
      init: false,
    };
    const mounted = mount(<InitShell {...props} />);
    const ele = mounted.find(BasicUninitialized);
    expect(ele.length).toBe(1);
  });
  it('should not render children when init is false', () => {
    const props = {
      init: false,
    };
    const TestComponent = () => <div />;
    const mounted = mount(<InitShell {...props}><TestComponent /></InitShell>);
    const ele = mounted.find(TestComponent);
    expect(ele.length).toBe(0);
  });
  it('should render custom uninitialized component when init is false', () => {
    const props = {
      init: false,
    };
    const TestComponent = () => <div />;
    const mounted = mount(<InitShell {...props} uninit={TestComponent} />);
    const ele = mounted.find(TestComponent);
    expect(ele.length).toBe(1);
  });
  it('should not render custom uninitialized component when init is false', () => {
    const props = {
      init: true,
    };
    const TestComponent = () => <div />;
    const mounted = mount(<InitShell {...props} uninit={TestComponent} />);
    const ele = mounted.find(TestComponent);
    expect(ele.length).toBe(0);
  });
  it('should not render uninitialized component when init is true', () => {
    const props = {
      init: true,
    };
    const mounted = mount(<InitShell {...props} />);
    const ele = mounted.find(BasicUninitialized);
    expect(ele.length).toBe(0);
  });
  it('should render children when init is true', () => {
    const props = {
      init: true,
    };
    const TestComponent = () => <div />;
    const mounted = mount(<InitShell {...props}><TestComponent /></InitShell>);
    const ele = mounted.find(TestComponent);
    expect(ele.length).toBe(1);
  });
});

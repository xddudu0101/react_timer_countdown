import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import { shallow } from 'enzyme';
import CountDown from '../../components/CountDown';

it('renders without crashing', () => {
   shallow(<CountDown />);
});

jest.useFakeTimers();

it('should set state to started and countdown', () => {
    const countDown = TestUtils.renderIntoDocument(<CountDown />);
    const fn = countDown.handleSetCountDown(2);
    expect(countDown.state.count).toBe(2);
    expect(countDown.state.status).toBe('started');
});


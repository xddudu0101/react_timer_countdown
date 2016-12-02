import React from 'react';
import ReactDOM from 'react-dom';
import Clock from '../../components/Clock';
import TestUtils from 'react-addons-test-utils';

import $ from 'jquery';

import { shallow } from 'enzyme';

it('renders without crashing', () => {
   shallow(<Clock />);
});

it('render clock to output', () => {
    const clock = TestUtils.renderIntoDocument(<Clock totalSeconds={62} />);
    const $el = $(ReactDOM.findDOMNode(clock));
    const actualText = $el.find('.clock-text').text();
    expect(actualText)
        .toBe('01:02');
});

it('formatSeconds', () => {
    const clock = TestUtils.renderIntoDocument(<Clock />);
    const seconds = 615;
    const expected = '10:15';
    const actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
});

it('formatSeconds', () => {
    const clock = TestUtils.renderIntoDocument(<Clock />);
    const seconds = 61;
    const expected = '01:01';
    const actual = clock.formatSeconds(seconds);
    expect(actual).toBe(expected);
});
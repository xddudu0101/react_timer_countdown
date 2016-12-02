import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import TestUtils from 'react-addons-test-utils';
import $ from 'jquery';
import { shallow } from 'enzyme';
import CountDownForm from '../../components/CountDownForm';

it('renders without crashing', () => {
   shallow(<CountDownForm />);
});

it('should call onSetCountDown if valid seconds entered', () =>{
    const onSetCountDown = jest.fn();
    const countDownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={onSetCountDown} />);
    const $el = $(ReactDOM.findDOMNode(countDownForm));
    $el.find('input').val('109');
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(onSetCountDown).toHaveBeenCalledWith(109);
});

it('should not call onSetCountDown if invalid seconds entered', () =>{
    const onSetCountDown = jest.fn();
    const countDownForm = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown={onSetCountDown} />);
    const $el = $(ReactDOM.findDOMNode(countDownForm));
    $el.find('input').val('109q');
    TestUtils.Simulate.submit($el.find('form')[0]);
    expect(onSetCountDown).not.toHaveBeenCalled();
});

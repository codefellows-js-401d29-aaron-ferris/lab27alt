'use strict';
import React from 'react';
import renderer from 'react-test-renderer';
import Counter from '../../../../components/counter/counter.js';

describe('<Counter />', () => {
  it('will run with stable DOM', () => {
    const tree = renderer.create(<Counter />).toJSON();
    expect(tree).toMatchSnapshot();
  });

});
describe('Down Event', () => {
  it('will change state.counter on a click', () => {
    let app = mount(<Counter />);
    let a = app.find('.down');
    let number = app.state('count');
    a.simulate('click');
    expect(app.state('count')).toEqual(number - 1);
  });

  it('will transfer state to the DOM', () => {
    let app = mount(<Counter />);
    let a = app.find('.down');
    let number = app.state('count');
    a.simulate('click');
    expect(app.find('span').text()).toContain(number - 1);
  });

});
describe('Up Event', () => {
  it('will change state.counter by +1', () => {
    let app = mount(<Counter />);
    let a = app.find('.up');
    let number = app.state('count');
    a.simulate('click');
    expect(app.state('count')).toEqual(number + 1);    
  });

  it('will transfer state to the DOM', () => {
    let app = mount(<Counter />);
    let a = app.find('.up');
    let number = app.state('count');
    a.simulate('click');
    expect(app.find('span').text()).toContain(number + 1);
  });

});




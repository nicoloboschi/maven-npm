import React from 'react';
import SimpleList from './SimpleList.js';
import {shallow} from 'enzyme';


test('List title is good', () => {
    const ELEMENTS = [{First: 'Milk'}, {Second: 'Cheerios'}];
    const simplelist = shallow(
            <SimpleList elements={ELEMENTS} />
            );
    expect(simplelist.find('h1').text()).toEqual('Simple list of 2');
});
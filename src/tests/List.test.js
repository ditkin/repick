import React from 'react';
import List from '../components/List';
import ReactTestUtils from "react-addons-test-utils";

const shallowRenderer = ReactTestUtils.createRenderer();

it('renders without crashing', () => {
  const div = document.createElement('div');
    shallowRenderer.render(<List />, div);

    //console.log(shallowRenderer.getRenderOutput());
    let result = shallowRenderer.getRenderOutput();
    expect(result.type).toBe('tr');

});


import React from 'react';
import ReactDOM from 'react-dom';
import {Skeleton} from '../src';

// TODO: To write all the test cases  of the component

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Skeleton />, div);
  ReactDOM.unmountComponentAtNode(div);
});

import React from 'react';
import ReactDOM from 'react-dom';
import LoadingSpinner from './LoadingSpinner';

import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


afterEach(cleanup);
it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<LoadingSpinner />, div)
});

it('renders LoadingSpinner correctly', () => {
  const elem = render(<LoadingSpinner message='Hello User' />);
  expect(elem.getByTestId('LoadingMessage')).toHaveTextContent('Hello User')
});

it('renders LoadingSpinner correctly', () => {
  const elem = render(<LoadingSpinner message='Goodbye User' />);
  expect(elem.getByTestId('LoadingMessage')).toHaveTextContent('Goodbye User')
});

// SnapShot Testing
import renderer from 'react-test-renderer';

it('matches snapshot 1', () => {
  const tree = renderer.create(<LoadingSpinner message='Testing Snapshot' />).toJSON();
  expect(tree).toMatchSnapshot();
})
it('matches snapshot 2', () => {
  const tree = renderer.create(<LoadingSpinner message='I am Not A Button, So Dont Push Me' />).toJSON();
  expect(tree).toMatchSnapshot();
})
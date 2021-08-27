//import { render, screen } from '@testing-library/react';
import {shallow, ShallowWrapper } from 'enzyme';
import { findByTestAttr } from './test/testUtils';
import App from './App';

/**
 * Set functionfor App component
 * @returns {ShallowWrapper}
 */

const setup = () => {
  return shallow(<App/>); 
};


test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr( wrapper, 'component-app');
  expect(appComponent).toHaveLength(1);
});

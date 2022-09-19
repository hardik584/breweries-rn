import renderer from 'react-test-renderer';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen, fireEvent} from '@testing-library/react-native';

import App from './App';

it(`Checking App Rendering`, () => {
  const tree = renderer.create(<App> </App>);
  expect(tree).toMatchSnapshot();
});

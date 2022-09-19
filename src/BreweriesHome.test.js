import BreweriesHome from './BreweriesHome';
import renderer from 'react-test-renderer';
import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {render, screen, fireEvent} from '@testing-library/react-native';

import AppNavigator from '../App';



describe('Checking Breweries Home Rendering', () => {
  const fakeNavigation = {
    navigate: jest.fn(),
    goBack: jest.fn(),
  };

  it(`Checking Breweries Home Rendering`, () => {
    fetch = jest.fn(() => Promise.resolve());
    const tree = renderer.create(<BreweriesHome> </BreweriesHome>);
    expect(tree).toMatchSnapshot();
  });

  it(`Checking Breweries Home with fakeNavigation Rendering`, () => {
    const tree = renderer
      .create(<BreweriesHome navigation={fakeNavigation}> </BreweriesHome>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

//   test('Enter search text to search', () => {
//     global.fetch = jest.fn();
//     fetch.mockResponseIsSuccess = (body) => {
//       fetch.mockImplementationForOnce (
//         () => Promise.resolve({json: () => Promise.resolve(JSON.parse(body))})
//       );
//     };
//     const { getByPlaceholderText, getByText, getAllByText, findBy } = render(
//       <BreweriesHome />
//     );
  
//     fireEvent.changeText(getByPlaceholderText('Search Here'),'USA');
//   // fireEvent.press(getByText('Add Item'));

//   // fireEvent.changeText(getByPlaceholderText('Enter grocery item'),'Mango');
//   // fireEvent.press(getByText('Add Item'));

//   const searchList = getAllByText('USA');
  
//   expect(groceryList).toHaveLength(1); 
// });


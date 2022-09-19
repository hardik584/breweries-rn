import BreweriesDetails from './BreweriesDetails';
import renderer from 'react-test-renderer';
import * as React from 'react';

it(`Checking Breweries Details Rendering`, () => {
  let data = {"id":"alphabet-city-brewing-co-new-york","name":"Alphabet City Brewing Co","brewery_type":"contract","street":"96 Avenue C Frnt 4","address_2":null,"address_3":null,"city":"New York","state":"New York","county_province":null,"postal_code":"10009-7055","country":"United States","longitude":null,"latitude":null,"phone":"9143566809","website_url":"http://www.acbnyc.com","updated_at":"2022-08-20T02:56:08.975Z","created_at":"2022-08-20T02:56:08.975Z"};
  // const tree = renderer.create(<BreweriesDetails route={{"params":{"breweriesItem":data}}}> </BreweriesDetails>);
  const tree = renderer.create(<BreweriesDetails route={{"params":{"breweriesItem":data}}}> </BreweriesDetails>);

  expect(tree).toMatchSnapshot();
});

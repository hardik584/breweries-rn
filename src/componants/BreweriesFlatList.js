import React from "react";
import {
    FlatList,
    Text,
    View,
    TouchableOpacity,
  } from 'react-native';

import CustomStyle from '../CustomStyle';

const BreweriesFlatList = (props) => {
  return (
    <FlatList
    data={props.data}
    keyExtractor={({id}, index) => index}
    renderItem={({item, index}) => (
      <TouchableOpacity
        onPress={() =>
            props.navigation.navigate('BreweriesDetails', {
            breweriesItem: item,
          })
        }>
        <View
          style={[
            CustomStyle.detailsBackgroundStyle,
            {backgroundColor: index % 2 == 0 ? '#ddd' : 'white'},
          ]}>
          <View style={CustomStyle.viewRowStyle}>
            <View style={CustomStyle.circleShape}>
              <Text style={{align: 'center'}}> {index + 1} </Text>
            </View>
            <Text style={CustomStyle.baseText}>{item.name} 👆</Text>

          </View>
          <Text>
            {item.street}
            {item.city}, {item.state}, {item.country},{' '}
            {item.postal_code}
          </Text>
        </View>
      </TouchableOpacity>
    )}
  />
  );
}
export default BreweriesFlatList;

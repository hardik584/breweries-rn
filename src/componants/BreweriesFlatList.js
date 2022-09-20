import React from 'react';
import {FlatList, Text, View, TouchableOpacity, Image} from 'react-native';

import CustomStyle from '../CustomStyle';

const BreweriesFlatList = props => {
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
            <View
              style={[
                CustomStyle.viewRowStyle,
                {justifyContent: 'space-between', width: '100%'},
              ]}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <View style={CustomStyle.circleShape}>
                  <Text style={{align: 'center'}}> {index + 1} </Text>
                </View>
                <Text style={CustomStyle.baseText}>{item.name}</Text>
              </View>
              <Image
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2990/2990159.png',
                }}
                style={[CustomStyle.imageStyle, {tintColor: '#38b6ba'}]}
              />
            </View>
            <Text>
              {item.street}
              {item.city}, {item.state}, {item.country}, {item.postal_code}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};
export default BreweriesFlatList;

import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Linking,
} from 'react-native';
import CustomStyle from './CustomStyle';

export default BreweriesDetails = props => {
  const {breweriesItem} = props.route.params;
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        {
          <View>
            {Object.keys(breweriesItem).map((key, index) => {
              return (
                <View
                  key={key}
                  style={[
                    CustomStyle.detailsBackgroundStyle,
                    {backgroundColor: index % 2 == 0 ? '#ddd' : 'white'},
                  ]}>
                  <Text style={CustomStyle.baseText}>
                    {key.charAt(0).toUpperCase() + key.slice(1)}:
                    <Text style={    CustomStyle.innerText}>
                      {} {breweriesItem[key] ?? '-'}{' '}
                    </Text>
                  </Text>
                </View>
              );
            })}
          </View>
        }
      </ScrollView>
    </SafeAreaView>
  );
};

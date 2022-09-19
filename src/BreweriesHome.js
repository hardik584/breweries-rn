import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import DelayInput from 'react-native-debounce-input';
import CustomStyle from './CustomStyle';
import BreweriesFlatList from './componants/BreweriesFlatList';


export default BreweriesHome = ({navigation}) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');

  const getBreweries = async () => {
    try {
      setLoading(true);
      var formattedUrl = 'https://api.openbrewerydb.org/breweries';
      if (searchKeyword !== '') {
        formattedUrl += '?by_city=' + searchKeyword;
      }
      console.log(formattedUrl);
      const response = await fetch(formattedUrl);
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBreweries();
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={CustomStyle.viewColumnStyle}>
        <View style={CustomStyle.viewRowStyle}>
          <TextInput
            style={CustomStyle.textInputStyle}
            placeholder={'Search Here'}
            onChangeText={text => {
              setSearchKeyword(text);
            }}
          />

          <TouchableOpacity
            style={CustomStyle.buttonStyle}
            activeOpacity={1}
            onPress={() => {
              getBreweries();
            }}>
            <Image
              source={{uri: 'https://img.icons8.com/ios-glyphs/344/search.png'}}
              style={CustomStyle.imageStyle}
            />
          </TouchableOpacity>
        </View>
        {isLoading ? (
          <ActivityIndicator />
        ) : data.length == 0 ? (
          <Text style={[CustomStyle.baseText, {textAlign: 'center'}]}>
            {' '}
            No record found!{' '}
          </Text>
        ) : (
          <BreweriesFlatList data={data} navigation={navigation} />
        )}
      </View>
    </SafeAreaView>
  );
};

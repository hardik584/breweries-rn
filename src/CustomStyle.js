import {StyleSheet} from 'react-native';

const CustomStyle = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  innerText: {
    fontSize: 15,
    color: 'grey',
  },
  detailsBackgroundStyle: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 10,
  },
  textInputStyle: {
    flex: 1,
    borderColor: '#000000',
    borderWidth: 1,
    borderRadius: 5,
    height: 50,
    padding: 10,
  },
  buttonStyle: {
    padding: 15,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor: '#38b6ba',
    borderRadius: 5,
    marginLeft: 5,
  },
  imageStyle: {width: 20, height: 20},
  viewRowStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  viewColumnStyle: {flex: 1, padding: 5, flexDirection: 'column'},
  circleShape: {
    width: 30,
    height: 30,
    borderRadius: 150 / 2,
    backgroundColor: '#38b6ba',
    marginRight: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomStyle;

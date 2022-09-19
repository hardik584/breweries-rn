/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import BreweriesHome from './src/BreweriesHome';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
// npm run test -- --coverage --watchAll=false
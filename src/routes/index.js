import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';

export default createAppContainer(
  createStackNavigator({
    Login: {
      screen: Login,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      }
    },
  })
);

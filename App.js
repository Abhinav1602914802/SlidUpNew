import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/IndexScreen'
import SlideUpScreen from './src/screens/SlideUpScreen';

const navigator = createStackNavigator({
  Index: IndexScreen,
  SlideUp: SlideUpScreen
},
{
  initialRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Action Sheet',
  }
});

export default createAppContainer(navigator);
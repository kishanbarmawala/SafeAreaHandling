import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import First from '../screens/First';
import Second from '../screens/Second';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const tabData = [
  {
    name: 'First',
    index: 0,
    comp: First,
  },
  {
    name: 'Second',
    index: 1,
    comp: Second,
  },
];

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
      }}
      tabBar={({ state, navigation }) => (
        <View style={{ flexDirection: 'row' }}>
          {tabData.map((item, index) => (
            <CustomTabBar
              key={item.name}
              label={item.name}
              onPress={() => navigation.navigate(item.name)}
              isFocused={state.index === index}
            />
          ))}
        </View>
      )}>
      {tabData.map((item) => {
        return (
          <Tab.Screen key={item.name} name={item.name} component={item.comp} />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

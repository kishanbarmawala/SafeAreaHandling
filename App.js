import { NavigationContainer } from '@react-navigation/native';
import { useState } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import BottomTabNavigator from './src/components/BottomTabNavigator';
import { StatusbarContext } from './src/contexts/StatusbarContext';

export default function App() {
  const [color, setColor] = useState('');

  return (
    <StatusbarContext.Provider value={{ color, setColor }}>
      <SafeAreaView style={{ flex: 0, backgroundColor: color }} />
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar
          backgroundColor={color}
          barStyle={color === 'red' ? 'light-content' : 'dark-content'}
        />
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </StatusbarContext.Provider>
  );
}

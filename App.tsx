import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

// 📌 Home ve Settings ekranlarını içe aktar
import HomeScreen from './src/Screens/Home';
import SettingsScreen from './src/Screens/Settings';

// Tab Navigator oluştur
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'tomato', // Seçili sekme rengi
          tabBarInactiveTintColor: 'gray', // Seçili olmayan sekme rengi
        }}
      >
        <Tab.Screen
          name="Ana Sayfa" // İsmi değiştirdik
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Ayarlar" // İsmi değiştirdik
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="cog" size={size} color={color} />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

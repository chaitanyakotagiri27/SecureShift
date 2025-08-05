import React, { useState } from 'react';
import { StatusBar, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <HomeScreen isDarkMode={isDarkMode} toggleTheme={() => setIsDarkMode(!isDarkMode)} />
    </View>
  );
}
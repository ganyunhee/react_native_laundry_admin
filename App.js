import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
/* Tamagui Config */
import config from './tamagui.config';
import { TamaguiProvider, Theme } from 'tamagui';
/* Screens */
import Login from './screens/Login';
import MainMenu from './screens/MainMenu';
import DailyReport from './screens/DailyReport';

export default function App() {
  const [isThemeToggled, setIsThemeToggled] = useState(false);
  
  const handleThemeChange = (newTheme) => {
    setIsThemeToggled(newTheme);
  };  

  const themeName = isThemeToggled ? "dark_blue" : "light_blue";

  /* Load Fonts */
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  })

  if (!loaded) {
    return null;
  }
  /*-----*/

  return (
    <TamaguiProvider config={config}>
      <Theme name={themeName}>
        <View style={styles.container}>
          {/*<Login isThemeToggled={isThemeToggled} onThemeChange={handleThemeChange} />*/}
          {/*<MainMenu />*/}
          <DailyReport />
        </View> 
      </Theme>
    </TamaguiProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

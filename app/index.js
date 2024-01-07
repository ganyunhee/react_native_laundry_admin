import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';

/* Tamagui Config */
import config from '../tamagui.config';
import { TamaguiProvider, Theme } from 'tamagui';

import { useRouter, Link } from 'expo-router';

export default function Index() {

    const [isThemeToggled, setIsThemeToggled] = useState(false);
  
    const handleThemeChange = (newTheme) => {
      setIsThemeToggled(newTheme);
    };  
  
    const themeName = isThemeToggled ? "dark_blue" : "light_blue";

    return (
        <TamaguiProvider config={config}>
            <Theme name={themeName}>
                <View style={styles.container}>
                    <Text>This is from the main menu</Text>
                    <Link href="login">Go to Login</Link>
                </View>
            </Theme>
        </TamaguiProvider>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
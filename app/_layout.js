import React from 'react';
import { useFonts } from 'expo-font';

import { Stack } from "expo-router";

export default function Layout() {
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
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen 
                name="index"
            />
        </Stack>
    )
}
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { XStack, YStack } from 'tamagui';
import { Form, Input, Button, Switch } from 'tamagui';
import { H1, H2, H3, H4 } from 'tamagui';
import { Sun, Moon } from '@tamagui/lucide-icons';

export default function Login() {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [loaded] = useFonts({
      Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
      InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    })
  
    function toggleDarkTheme() {
      console.log("Before : ", isDarkTheme);
      if (isDarkTheme === false) {
        setIsDarkTheme(true);
      } else {
        setIsDarkTheme(false);
      }
      console.log("After : ", isDarkTheme);
    }
  
    if (!loaded) {
      return null;
    }
  
    return (
      <YStack backgroundColor="$blue3" flex={1} justifyContent="center" width="100%">
        <Form
          padding="$5"
          alignItems="center"
          alignSelf="center"
          width="80%"
          backgroundColor="$background"
          borderColor="$borderColor"
          borderWidth={1}
          borderRadius="$4"
          elevation={2}
          gap="$4"
        >
          <YStack padding="$3">
            <H2 alignSelf="center" fontWeight="bold">Login</H2>
          </YStack>
          <YStack padding="$3" space="$5" width={300} justifyContent="center">
            <Input size="$6" placeholder="Username"></Input>
            <Input size="$6" secureTextEntry={true} placeholder="Password"></Input>
            <Button size="$6" onClick={() => {console.log("Login Button Clicked")}}>Login</Button>
          </YStack>
        </Form>
        <XStack justifyContent="flex-end">
          <YStack paddingTop="$4" paddingRight="$8">
            {!isDarkTheme ? 
              (<Button borderRadius={100} onClick={toggleDarkTheme}><Sun /></Button>) : 
              (<Button borderRadius={100} onClick={toggleDarkTheme}><Moon /></Button>) }
          </YStack>
        </XStack>
      </YStack>
    );
  }
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import { XStack, YStack } from 'tamagui';
import { Form, Input, Button, Switch, SizableText } from 'tamagui';
import { H1, H2, H3, H4 } from 'tamagui';
import { Sun, Moon } from '@tamagui/lucide-icons';

export default function Login({ isThemeToggled, onThemeChange }) {

    const [loaded] = useFonts({
      Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
      InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    })
  
    function toggleDarkTheme() {
      onThemeChange(!isThemeToggled);
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
            <H2 alignSelf="center" fontWeight="800">Login</H2>
          </YStack>
          <YStack padding="$3" space="$5" width={300} justifyContent="center">
            <Input size="$6" backgroundColor="$blue3" placeholder="Username"></Input>
            <Input size="$6" backgroundColor="$blue3" secureTextEntry={true} placeholder="Password"></Input>
            <Button size="$6" onPress={() => {console.log("Login Button Clicked")}}>Login</Button>
          </YStack>
        </Form>
        <YStack alignSelf="center" marginTop="$6" space="$5" width={300} justifyContent="center">
            <SizableText size="$6" alignSelf="center">Are you a new staff? <SizableText theme="alt2" size="$6" fontWeight="800" onPress={() => {console.log("Sign Up Clicked")}}>Sign Up</SizableText></SizableText>
        </YStack>
        <XStack justifyContent="center">
          <YStack marginTop="$5">
            {!isThemeToggled ? 
              (<Button borderRadius={100} onPress={toggleDarkTheme}><Sun /></Button>) : 
              (<Button borderRadius={100} onPress={toggleDarkTheme}><Moon /></Button>) }
          </YStack>
        </XStack>
      </YStack>
    );
  }
import React from 'react';
import { useFonts } from 'expo-font';
import { H1, H2, H3, H4 } from 'tamagui';
import { YStack, XStack, YGroup, XGroup } from 'tamagui';
import { Form, Input, Label, Button, SizableText } from 'tamagui';

import { useRouter } from 'expo-router';

export default function SignUp() {
    const router = useRouter();

    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    })

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
                    <H2 alignSelf="center" fontWeight="800">Sign Up</H2>
                </YStack>
                <YStack padding="$3" space="$3" width={300} justifyContent="center">
                    <XStack space="$2">
                        <Input flex={1} id="first_name" backgroundColor="$blue3" placeholder="First Name" />
                        <Input flex={1} id="last_name" backgroundColor="$blue3" placeholder="Last Name" />
                    </XStack>
                    <Input id="user" backgroundColor="$blue3" secureTextEntry={true} placeholder="Username" />
                    <Input id="pw" backgroundColor="$blue3" secureTextEntry={true} placeholder="Password" />
                    <Input id="pw_confirm" backgroundColor="$blue3" placeholder="Confirm Password" />
                    <Button size="$6" marginTop="$3" onPress={() => {console.log("Sign Up Button Clicked")}}>Sign Up</Button>
                </YStack>
            </Form>
            <YStack alignSelf="center" marginTop="$6" space="$5" width={300} justifyContent="center">
                <SizableText size="$6" alignSelf="center">Already have an account? <SizableText theme="alt2" size="$6" fontWeight="800" onPress={() => router.replace("/login")}>Login</SizableText></SizableText>
            </YStack>
        </YStack>
    )
}
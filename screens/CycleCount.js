import React from 'react';
import { useFonts } from 'expo-font';
import { H1, H2, H3, H4 } from 'tamagui';
import { Button, Form, Input, Label } from 'tamagui';
import { XStack, YStack, XGroup, YGroup } from 'tamagui';
import { Upload } from '@tamagui/lucide-icons';

export default function CycleCount() {

    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    })

    if (!loaded) {
        return null;
    }

    return (
        <YStack backgroundColor="$blue3" flex={1} justifyContent="center" alignSelf="center" width="100%">
            <YStack alignSelf="center" width="80%">
                <YGroup marginBottom="$8">
                    <H2>Cycle Count Upload</H2>
                    <H3 id="date">2023/##/##</H3>
                </YGroup>
                <H3>Press button to upload Image File <H4>(.png, .jpg)</H4></H3>
                
                <YStack marginTop="$5">
                    <Button id="upload" borderRadius={100}><Upload /></Button>
                </YStack>
            </YStack>
        </YStack>
    )
}
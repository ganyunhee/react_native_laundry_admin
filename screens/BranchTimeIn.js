import React from 'react';
import { useFonts } from 'expo-font';
import { YStack, XStack, XGroup, YGroup } from 'tamagui';
import { H1, H2, H3, H4 } from 'tamagui';
import { Button, Form, Input, Label } from 'tamagui';

export default function BranchTimeIn() {

    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    })

    if (!loaded) {
        return null;
    }

    const branches = [
        { name: "Bulihan" },
        { name: "Luta Norte" }
    ]

    return (
        <YStack backgroundColor="$blue3" flex={1} justifyContent="center" alignSelf="center" width="100%">
            <YStack alignSelf="center" width="80%">
                <YGroup marginBottom="$4">
                    <H2>Branch Time In</H2>
                    <H3 id="date">2023/##/##</H3>
                </YGroup>
                <Form marginTop="$4">
                    <Label htmlFor="branch">Branch</Label>
                    <Input id="branch" placeholder="Branch Name" />
                    <YStack marginTop="$4">
                        <Button id="submit" size="$6" marginBottom="$8">Submit</Button>
                    </YStack>
                </Form>
            </YStack>
        </YStack>
    )
}
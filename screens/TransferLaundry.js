import React from 'react';
import { useFonts } from 'expo-font';
import { XStack, YStack, XGroup, YGroup } from 'tamagui';
import { Form, Input, Label, Button } from 'tamagui';
import { H1, H2, H3, H4 } from 'tamagui';

export default function CheckReceivables() {

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
        <YStack backgroundColor="$blue3" flex={1} justifyContent="center" width="100%">
            <YStack alignSelf="center" width="80%">
                <YGroup marginBottom="$4">
                    <H2>Transfer Laundry</H2>
                    <H3 id="date">2023/##/##</H3>
                </YGroup>
                <Form marginTop="$4">
                    <Label htmlFor="client_code">Client Code</Label>
                    <Input id="client_code" placeholder="Client Code" />
                    <Label htmlFor="branch">Branch</Label>
                    <Input id="branch" placeholder="Branch Name" />
                    <YStack marginTop="$6">
                        <Button id="transfer" size="$6" marginBottom="$6">Transfer</Button>
                    </YStack>
                </Form>
            </YStack>
        </YStack>
    )
}
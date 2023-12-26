import React from 'react';
import { useFonts } from 'expo-font';
import { H1, H2, H3, H4 } from 'tamagui';
import { Button, Form, Input, Label, ScrollView, Select } from 'tamagui';
import { XStack, YStack, XGroup, YGroup } from 'tamagui';

export default function StatusReport() {

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
            <ScrollView marginTop="$12" marginBottom="$6">
                <YStack alignSelf="center" width="80%">
                    <YGroup marginBottom="$4">
                        <H2>Status Report</H2>
                        <H3 id="date">2023/##/##</H3>
                    </YGroup>
                    <Form>
                        <Label htmlFor="branch">Branch</Label>
                        <Input id="branch" placeholder="Branch Name" />

                        <Label htmlFor="washer">Washer</Label>
                        <Input id="washer" placeholder="Number of washer tasks" />

                        <Label htmlFor="dryer">Dryer</Label>
                        <Input id="dryer" placeholder="Number of dryer tasks" />

                        <Label htmlFor="">Fold</Label>
                        <Input id="fold" placeholder="Number of fold tasks" />

                        <YStack marginTop="$6">
                            <Button id="reset" size="$6" marginBottom="$3">Reset</Button>
                            <Button id="submit" size="$6" marginBottom="$6">Submit</Button>
                        </YStack>
                    </Form>
                </YStack>
            </ScrollView>
        </YStack>
    )
}
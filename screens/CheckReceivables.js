import React from 'react';
import { useFonts } from 'expo-font';
import { XStack, YStack, XGroup, YGroup } from 'tamagui';
import { Form, Input, Label, Button } from 'tamagui';
import { H1, H2, H3, H4 } from 'tamagui';

export default function CheckReceivables() {
    return (
        <YStack backgroundColor="$blue3" flex={1} justifyContent="center" width="100%">
            <YStack alignSelf="center" width="80%">
                <YGroup marginBottom="$4">
                    <H2>Check Receivables</H2>
                    <H3 id="date">2023/##/##</H3>
                </YGroup>
                <Form marginTop="$4">
                    <Label htmlFor="client_code">Client Code</Label>
                    <Input id="client_code" placeholder="Client Code" />
                    <YStack marginTop="$4">
                        <Button id="search" size="$6" marginBottom="$6">Search</Button>
                    </YStack>
                    <YStack marginTop="$4">
                        <H3>Receivable Amount</H3>
                        <XStack id="amount">
                            <H1 id="currency_symbol">₱ </H1>
                            <H1 id="calc_amount">####</H1>
                        </XStack>
                    </YStack>
                </Form>
            </YStack>
        </YStack>
    )
}
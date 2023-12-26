import React, { useMemo, useState } from 'react';
import { useFonts } from 'expo-font';
import { XStack, YStack, XGroup, YGroup } from 'tamagui';
import { Button, Form, Input, Label, Select, ScrollView } from 'tamagui';
import { H1, H2, H3 } from 'tamagui';
import { Check, ChevronUp, ChevronDown } from '@tamagui/lucide-icons';

export default function DailyReport() {

    const [loaded] = useFonts({
        Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
        InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    })
   
    if (!loaded) {
        return null;
    }

    const items = [
        { code: 'W', type: 'White'  },
        { code: 'A', type: 'Assorted' },
        { code: 'Co', type: 'Comforter' },
        { code: 'Cu', type: 'Curtain' },
        { code: 'B', type: 'Blanket' },
        { code: 'Bs', type: 'Bedsheet' },
        { code: 'Pc', type: 'Pillowcase' },
    ]

    return (
        <YStack backgroundColor="$blue3" flex={1} justifyContent="center" alignSelf="center" width="100%">
            <ScrollView marginTop="$12" marginBottom="$6">
            <YStack alignSelf="center" width="80%">
                <YGroup marginBottom="$4">
                    <H2>Daily Report</H2>
                    <H3 id="date">2023/##/##</H3>
                </YGroup>
                <Form>
                    <Label htmlFor="client_code">Client Code</Label>
                    <Input id="client_code" placeholder="Client Code"></Input>
                    
                    <Label htmlFor="client_name">Client Name</Label>
                    <XStack space="$1.5" id="client_name" justifyContent="space-between">
                        <Input flex={1} placeholder="First Name"></Input>
                        <Input flex={1} placeholder="Last Name"></Input>
                    </XStack>
                    
                    <XStack space="$1.5" justifyContent="space-between">
                        {/*Change to Select later*/}
                        <YStack flex={1}>
                            <Label htmlFor="laundry_type">Type</Label>
                            <Input id="laundry_type" placeholder="Category"/>
                        </YStack>
                        <YStack flex={1}>
                            <Label htmlFor="laundry_kg">KG</Label>
                            <Input id="laundry_kg" placeholder="Weight"/>
                        </YStack>
                    </XStack>

                    <Label htmlFor="payment_method">Payment Method</Label>
                    <XStack>
                        <XGroup backgroundColor="$blue4" id="payment_method">
                            <XGroup.Item>
                                <Button>Cash</Button>
                            </XGroup.Item>
                            <XGroup.Item>
                                <Button>GCash</Button>
                            </XGroup.Item>
                        </XGroup>
                    </XStack>
                    
                    <Label htmlFor="amount">Amount(Price)</Label>
                    <XStack id="amount">
                        <H1 id="currency_symbol">₱ </H1>
                        <H1 id="calc_amount">####</H1>
                    </XStack>

                    <YStack marginTop="$4">
                        <Button id="reset" size="$6" marginBottom="$3">Reset</Button>
                        <Button id="submit" size="$6" marginBottom="$6">Submit</Button>
                    </YStack>
                </Form>
            </YStack>
            </ScrollView>
        </YStack>
    )
}
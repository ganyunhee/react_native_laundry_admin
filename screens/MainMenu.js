import React from 'react';
import { useFonts } from 'expo-font';
import { XStack, YStack, XGroup, YGroup, ListItem, Separator } from 'tamagui';
import { H3, H4 } from 'tamagui';
import { UserCircle, ChevronRight, BookOpen, 
         FileText, Clock, Upload, 
         ClipboardSignature, Truck, LogOut } from '@tamagui/lucide-icons';

export default function MainMenu() {

    const [loaded] = useFonts({
     Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
     InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
    })

    if (!loaded) {
        return null;
    }

    return (
        <YStack backgroundColor="$blue3" flex={1} justifyContent="center" alignSelf="center" width="100%">
            <XGroup alignSelf="center" width="80%" justifyContent="space-between" marginBottom="$6">
                <XGroup justifyContent="space-between">
                    <UserCircle size="$6" color="$blue12" marginRight="$4" s/>
                    <YGroup>
                        <H3 textTransform="uppercase" fontWeight="800">Username</H3>
                        <H4 color="#8f8f8f" textTransform="uppercase">Status</H4>
                    </YGroup>
                </XGroup>
                <YGroup marginTop="$2">
                    <LogOut size="$2" />
                </YGroup>  
            </XGroup>
            <YGroup alignSelf="center" bordered width="80%" separator={<Separator />}>
                <YGroup.Item>
                    <ListItem
                        hoverTheme
                        pressTheme
                        title="Daily Report"
                        icon={BookOpen}
                        iconAfter={ChevronRight}
                        padding="$5"
                        size="$6"
                    />
                </YGroup.Item>
                <YGroup.Item>
                    <ListItem
                        hoverTheme
                        pressTheme
                        title="Status Report"
                        icon={FileText}
                        iconAfter={ChevronRight}
                        padding="$5"
                        size="$6"
                    />
                </YGroup.Item>
                <YGroup.Item>
                    <ListItem
                        hoverTheme
                        pressTheme
                        title="Branch Time-In"
                        icon={Clock}
                        iconAfter={ChevronRight}
                        padding="$5"
                        size="$6"
                    />
                </YGroup.Item>
                <YGroup.Item>
                    <ListItem
                        hoverTheme
                        pressTheme
                        title="Cycle Count"
                        icon={Upload}
                        iconAfter={ChevronRight}
                        padding="$5"
                        size="$6"
                    />
                </YGroup.Item>
                <YGroup.Item>
                    <ListItem
                        hoverTheme
                        pressTheme
                        title="Check Receivables"
                        icon={ClipboardSignature}
                        iconAfter={ChevronRight}
                        padding="$5"
                        size="$6"
                    />
                </YGroup.Item>
                <YGroup.Item>
                    <ListItem
                        hoverTheme
                        pressTheme
                        title="Transfer Laundry"
                        icon={Truck}
                        iconAfter={ChevronRight}
                        padding="$5"
                        size="$6"
                    />
                </YGroup.Item>
            </YGroup>
        </YStack>
    )
}
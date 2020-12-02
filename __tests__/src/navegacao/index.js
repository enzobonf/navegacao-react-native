import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainter } from '@react-navigation/native'
import Stack from './Stack';

export default props => (
    
    <SafeAreaView>
        <NavigationContainter>
            <Stack />
        </NavigationContainter>
    </SafeAreaView>

);
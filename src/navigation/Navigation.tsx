import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/dashboard/HomeScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import { useCustomTheme } from './Theme';
import { navigationRef } from '../utils/NavigationUtil';

const Stack = createStackNavigator();


const Navigation = () => {
    const theme = useCustomTheme();
    const MyTheme = {
        ...DefaultTheme,
        colors: {
            ...DefaultTheme.colors,
            background: theme.colors.background,
            text: theme.colors.text,
            card: theme.colors.card,
            border: theme.colors.border,
            notification: theme.colors.notification,
            primary: theme.colors.primary
        }
    }
    return (
        <NavigationContainer ref={navigationRef} theme={MyTheme}>
            <Stack.Navigator initialRouteName='LoginScreen'
                screenOptions={() => ({
                    headerShown: false
                })}
                >  
                <Stack.Screen name="HomeScreen" component={HomeScreen} />
                <Stack.Screen name="LoginScreen" component={LoginScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation
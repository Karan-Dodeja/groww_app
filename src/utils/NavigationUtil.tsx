import { View, Text } from 'react-native'
import React from 'react'

import { createNavigationContainerRef, CommonActions } from '@react-navigation/native'

export const navigationRef = createNavigationContainerRef();

export async function navigate(routeName: string, params?: object) {
    await navigationRef.isReady();
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.navigate(routeName, params))
    }
}

export async function resetAndNavigate(routeName: string) {
    await navigationRef.isReady();
    if (navigationRef.isReady()) {
        navigationRef.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: routeName }]
            })
        )
    }
}

export async function goBack() {
    await navigationRef.isReady();
    if (navigationRef.isReady()) {
        navigationRef.dispatch(CommonActions.goBack())
    }
}
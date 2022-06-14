import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from '../screens/LoginScreen';
import NewLawScreen from '../screens/NewLawScreen';
import ResultScreen from '../screens/ResultScreen';
import LawDetailScreen from '../screens/LawDetailScreen';
import LawScreen from '../screens/Law';

export default function Router() {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <>
                    <Stack.Screen
                        name={"Login"}
                        component={LoginScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={"Law"}
                        component={LawScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={"DetailLaw"}
                        component={LawDetailScreen}
                        options={{
                            title: ``,
                            headerTintColor: 'purple',
                            headerBackTitle: `tornar`,
                            headerStyle: { backgroundColor: '#F2F2F2' },
                        }}
                    />
                    <Stack.Screen
                        name={"NewLaw"}
                        component={NewLawScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                    <Stack.Screen
                        name={"Result"}
                        component={ResultScreen}
                        options={{
                            headerShown: false
                        }}
                    />
                </>
            </Stack.Navigator >
        </NavigationContainer>
    )
}

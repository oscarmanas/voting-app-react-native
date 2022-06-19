import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import NewLawScreen from '../screens/NewLawScreen';
import ResultScreen from '../screens/ResultScreen';
import LawDetailScreen from '../screens/LawDetailScreen';
import LawScreen from '../screens/Law';
import { Pressable } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Router() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <>
                    <Stack.Screen
                        name={"Law"}
                        component={LawScreen}
                        options={{
                            title: `Lleis`,
                            headerTintColor: 'black',
                            headerStyle: { backgroundColor: '#F2F2F2' },
                            headerTitleStyle: { fontSize: 22 },
                            headerShadowVisible: false
                        }}
                    />
                    <Stack.Screen
                        name={"DetailLaw"}
                        component={LawDetailScreen}
                        options={({navigation}) => ({
                            title: ``,
                            headerTintColor: 'black',
                            headerBackTitle: ``,
                            headerStyle: { backgroundColor: '#F2F2F2' },
                            headerShadowVisible: false,
                            headerLeft: () => (
                                <Pressable
                                  style={{
                                    backgroundColor: 'black',
                                    padding: 10,
                                    borderRadius: 10
                                  }}
                                  onPress={() => navigation.goBack() }>
                                  <AntDesign name="left" size={14} color="white" />
                                </Pressable>
                              ),
                        })}
                    />
                    <Stack.Screen
                        name={"NewLaw"}
                        component={NewLawScreen}
                        options={({navigation}) => ({
                            title: ``,
                            headerTintColor: 'white',
                            headerBackTitle: ``,
                            headerStyle: { backgroundColor: '#F2F2F2' },
                            headerTitleStyle: { fontSize: 22 },
                            headerShadowVisible: false,
                            headerLeft: () => (
                                <Pressable
                                  style={{
                                    backgroundColor: 'black',
                                    padding: 10,
                                    borderRadius: 10
                                  }}
                                  onPress={() => navigation.goBack() }>
                                  <AntDesign name="left" size={14} color="white" />
                                </Pressable>
                              ),
                        })}
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

import * as React from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    KeyboardAvoidingView,
    Image,
    Alert,
} from 'react-native';
import NetInfo from "@react-native-community/netinfo";
import { Input } from '@rneui/themed';
import { styles } from '../../hooks/styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LoginScreen({ navigation }: any) {

    /// CONST & VAR ///
    const [userText, setUsertext] = React.useState('');

    /// CHECK THE USER TYPE AND THEN CHECK EMAIL AND USER  ///
    const check = async () => {
        if (userText) {
            let is_internet_connection: boolean | null = null;
            await NetInfo.fetch().then(state => {
                is_internet_connection = state.isConnected;
            });
            if (is_internet_connection) {
                if (userText == "Eudoro" || "Crixus22") {
                    navigation.navigate("Law");
                }
            } else {
                Alert.alert("Error", "Sense connexió");
            }
        } else {
            Alert.alert("Ups...", "Has deixat el camp en blanc");
        }
    }

    return (
        <SafeAreaView style={styles.wrapper}>
            <Image source={require("../../assets/images/logoHoz.png")} style={{width: 400}} />
            <View style={{ flex: 1, justifyContent: 'center', }}>
                <Input
                    placeholder={"usuari"}
                    placeholderTextColor={'black'}
                    onChangeText={(userText: string) => setUsertext(userText.trim())}
                    autoCapitalize='none'
                    maxLength={24}
                    style={styles.inputs}
                />
            </View>
            <TouchableOpacity
                onPress={() => check()}
                style={styles.button}
            >
                <Text style={styles.textButton}>Accedir</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

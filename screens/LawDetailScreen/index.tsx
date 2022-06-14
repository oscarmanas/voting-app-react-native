import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function LawDetailScreen({ route }) {

  const navigation = useNavigation();
  const { info } = route.params;

  return (
    <SafeAreaView style={styles.wrapper}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{info.name}</Text>
        </View>
        <View style={styles.description}>
          <Text>{info.description}</Text>
        </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Result", { delete: true })}
        style={styles.button}
      >
        <Text style={styles.textButton}>Revocar llei</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { data } from '../../assets/data/data';
import LawComponent from '../../components/LawComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../hooks/styles';

export default function LawDetailScreen({ info, navigation }: any) {

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>{info.name}</Text>
        </View>
        <View style={styles.description}>
        <Text>{info.description}</Text>
        </View>
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
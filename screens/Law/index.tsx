import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
//import { useNavigation } from '@react-navigation/native';
import LawComponent from '../../components/LawComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../hooks/styles';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../core/Config';

export default function LawScreen({ navigation }: any) {


  const laws = doc(db, "Laws");

  getDoc(laws)
 

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        {/* <FlatList
          data={data}
          renderItem={({ item }) => <LawComponent info={item} />}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={
            <View style={styles.title}>
              <Text style={styles.text}>Lleis vigents</Text>
            </View>
          }
        /> */}
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("NewLaw")}
        style={styles.button}
      >
        <Text style={styles.textButton}>Crear nova llei</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
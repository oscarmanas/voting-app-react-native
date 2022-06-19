import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './styles';

export default function LawDetailScreen({ route }) {

  const navigation = useNavigation();
  const { info } = route.params;
  console.log(info)

  return (
    <View>
      <View style={{backgroundColor: 'white', margin: 20, borderRadius: 10}}>
        <View style={styles.title}>
          <Text style={styles.titleText}>#Llei: {info.name}</Text>
        </View>
        <View style={styles.description}>
          <Text numberOfLines={5}>{info.description}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', margin: 12 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15 }}>Tipus de llei:</Text>
          </View>
          <View style={{ justifyContent: 'center', width: 120, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>{info.type}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', margin: 12 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15 }}>Creació:</Text>
          </View>
          <View style={{ justifyContent: 'center', width: 120, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>{info.today}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', margin: 12 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15 }}>Expiració:</Text>
          </View>
          <View style={{ justifyContent: 'center', width: 120, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>{info.expiration}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', margin: 12 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15 }}>Resultat (a favor):</Text>
          </View>
          <View style={{ justifyContent: 'center', width: 120, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>{info.result}%</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', margin: 12 }}>
          <View style={{ justifyContent: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'gray', fontSize: 15 }}>participació:</Text>
          </View>
          <View style={{ justifyContent: 'center', width: 120, alignItems: 'center' }}>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 17 }}>{info.participation}%</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center', padding: 20, width: '100%' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Result", { delete: true })}
            style={styles.pressableCreate}
          >
            <Text style={styles.textButton}>Revocar llei</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
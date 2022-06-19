import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LawComponent({ info }: any) {

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("DetailLaw", { info: info })}
    >
      <View style={styles.cardContainer}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <View>
            <View style={{ marginTop: 10, marginBottom: 5 }}>
              <Text style={styles.titleText} numberOfLines={1}>{info.name}</Text>
            </View>
            <View>
              <Text style={{fontWeight: 'bold', color: 'gray'}}>Expira: {info.expiration}</Text>
            </View>
          </View>
          <View style={{ marginTop: 15, marginBottom: 3, backgroundColor: 'black' }}>
            <Text style={{ fontWeight: 'bold', color: 'white' }}>{info.creation}</Text>
          </View>
        </View>
        <View style={{marginTop: 35, marginBottom: 5, flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{backgroundColor: 'black', padding: 10, borderRadius: 5}}>
            <Text style={{justifyContent: 'center', alignItems: 'center', color: 'white', fontWeight: 'bold'}}>{info.type}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  )
}
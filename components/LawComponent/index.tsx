import { View, Text, Pressable } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Octicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LawComponent({info}: any) {

  const navigation = useNavigation();

  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("DetailLaw", {info: info})}
    >
      <View style={styles.containerRight}>
        <Octicons name="law" size={55} color="black" style={{ justifyContent: 'center', alignItems: 'center' }} />
      </View>
      <View style={styles.containerLeft}>
        <View>
          <Text style={styles.titleText} numberOfLines={1}>{info.name}</Text>
        </View>
        <View>
          <Text style={styles.normalText}>Tipus: {info.type}</Text>
        </View>
        <View>
          <Text style={styles.normalText}>Publicada: {info.creation}</Text>
        </View>
        <View>
          <Text style={styles.normalText}>Expira: {info.expiration}</Text>
        </View>
        <View style={{ borderWidth: 1, borderColor: 'lightgray', width: 250, marginTop: 10 }} />
      </View>
    </Pressable>
  )
}
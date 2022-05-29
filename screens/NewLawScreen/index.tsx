import { Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../hooks/styles';
import { Input } from 'react-native-elements';
import { Octicons } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';

export default function NewLawScreen({ navigation }: any) {

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [pickerType, setPickerType] = useState("");
  let today = new Date();
  today = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  let expiration = new Date();
  expiration = (expiration.getFullYear() + 1) + '-' + (expiration.getMonth() + 1) + '-' + expiration.getDate();

  const check = () => {
    if (name != "" && description != "" && pickerType != "") {
      navigation.navigate('Result', {name: name, description: description, pickerType: pickerType, today: today, expiration: expiration});
    } else {
      alert("Has deixat un o més camps en blanc");
    }
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <View style={styles.imageCenter}>
          <Octicons name="law" size={55} color="black" style={{ borderWidth: 1, borderRadius: 10, padding: 25, marginBottom: 10 }} />
        </View>
        <Input
          placeholder={"Nom de la llei"}
          onChangeText={(text) => setName(text)}
          value={name}
          style={styles.inputs}
          maxLength={24}
          rightIcon={<Text>{name.length}/24</Text>}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
        <Input
          placeholder={"Contingut de la llei"}
          style={styles.inputs}
          onChangeText={(text) => setDescription(text)}
          value={description}
          multiline
          maxLength={500}
          rightIcon={<Text>{description.length}/500</Text>}
          blurOnSubmit={true}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
        <Picker
          selectedValue={pickerType}
          onValueChange={(itemValue: any) => setPickerType(itemValue)}
        >
          <Picker.Item label="-----" value="" />
          <Picker.Item label={"Social"} value={"Welfare"} style={{ fontSize: 17 }} />
          <Picker.Item label={"Transport"} value={"Transport"} style={{ fontSize: 17 }} />
          <Picker.Item label={"Economia"} value={"Economy"} style={{ fontSize: 17 }} />
          <Picker.Item label={"Serveis Públics"} value={"Public"} style={{ fontSize: 17 }} />
          <Picker.Item label={"Llei i Ordre"} value={"Security"} style={{ fontSize: 17 }} />
          <Picker.Item label={"Exteriors"} value={"Foreign"} style={{ fontSize: 17 }} />
          <Picker.Item label={"Impost"} value={"Tax"} style={{ fontSize: 17 }} />
        </Picker>
        <Text>Creació: </Text>
        <Input
          value={today}
          editable={false}
          style={styles.inputs}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
        <Text>Expiració: </Text>
        <Input
          value={expiration}
          editable={false}
          style={styles.inputs}
          inputContainerStyle={{ borderBottomWidth: 0 }}
        />
      </View>
      <TouchableOpacity
        onPress={() => check()}
        style={styles.button}
      >
        <Text style={styles.textButton}>Votació</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
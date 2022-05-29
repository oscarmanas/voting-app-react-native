import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../hooks/styles';
import Speedometer from 'react-native-speedometer-chart';
import { db } from '../../core/Config';
import { doc, setDoc } from 'firebase/firestore';
import {autoId} from "@google-cloud/firestore/build/src/util";

export default function ResultScreen({name, description, pickerType, today, expiration, navigation}:any) {

  const [result, setResult] = useState();
  const [participation, setParticipation] = useState();
  const id = Math.random() * (1000000 - 0);

  const setLaw = () => {
    const law = doc(db, "Laws", id);

    const lawData = {
      "name": name,
      "description": description,
      "type": pickerType,
      "creation": today,
      "expiration": expiration,
      "participation": participation,
      "result": result
    }

    setDoc(law, lawData)
    .then(() =>{
      alert("Llei proposada");
    })
    .catch((error) =>{
      alert(error.message);
    })
  }

  const filter = () => {
    let participation = Math.random() * (100 - 0) + 0;
    participation = participation.toFixed(2);
    if (participation > 59.99) {
      setParticipation(participation)
      referendum();
    } else {
      setParticipation(participation)
      Alert.alert("Ups...", `La teva participació ha estat de ${participation}% com no ha superat el 60% de la participació ha quedat invalidada.`)
    }
  };

  const referendum = () => {
    let result = Math.random() * (100 - 0) + 0;
    result = result.toFixed(2);
    if (result > 49.99) {
      Alert.alert("Llei Aprovada", `La llei ha estat aprovada pel ${result}% dels vots.`)
      setResult(result);
      setLaw();
    } else {
      Alert.alert("Llei Rebutjada", `La llei ha estat rebutjada pel ${result}% dels vots.`)
      setResult(result);
    }
  }

  useEffect(() => {
    filter();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <View style={styles.chart}>
          <Speedometer
            value={result}
            totalValue={100}
            size={300}
            outerColor={'red'}
            internalColor={'green'}
            showPercent
            showText
            text="A favor"
            textStyle={{ color: 'green' }}
            percentStyle={{ color: 'green' }}
          />
        </View>
        <View style={styles.chart}>
          <Speedometer
            value={participation}
            totalValue={100}
            size={300}
            outerColor={'lightgray'}
            internalColor={'orange'}
            showPercent
            showText
            text="Participació"
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("Law")}
        style={styles.button}
      >
        <Text style={styles.textButton}>Fet</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}
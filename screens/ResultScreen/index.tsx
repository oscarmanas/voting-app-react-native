import { Alert, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../hooks/styles';
import Speedometer from 'react-native-speedometer-chart';
import { graphqlOperation, API } from 'aws-amplify';
import { createTodo } from '../../src/graphql/mutations';

export default function ResultScreen({ navigation, route }: any) {

  const {name, description, pickerType, today, expiration,} = route.params;
  const [result, setResult] = useState();
  const [participation, setParticipation] = useState();

  const filter = () => {
    let participation = Math.random() * (100 - 0) + 0;
    participation = participation.toFixed(0);
    if (participation > 59.99) {
      setParticipation(participation)
      referendum(participation);
    } else {
      setParticipation(participation)
      Alert.alert("Ups...", `La teva participaci√≥ ha estat de ${participation}% com no ha superat el 60% de la participaci√≥ ha quedat invalidada.`)
    }
  };

  const referendum = (participation) => {
    let result = Math.random() * (100 - 0) + 0;
    result = result.toFixed(0);
    if (result > 49.99) {
      Alert.alert("Llei Aprovada", `La llei ha estat aprovada pel ${result}% dels vots.`)
      setResult(result);
      setLaw(result, participation);
    } else {
      Alert.alert("Llei Rebutjada", `La llei ha estat rebutjada pel ${result}% dels vots.`)
      setResult(result);
    }
  }

  const setLaw = async (resultPa, participationPa) => {
    try {
      const newLaw = {
        name: name,
        description: description,
        type: pickerType,
        today: today,
        expiration: expiration,
        participation: participationPa.toString(),
        result: resultPa.toString()
      }
      await API.graphql(graphqlOperation(createTodo, { input: newLaw }))
    } catch(e) {
      alert(e)
    }
  }

  useEffect(() => {
    filter();
  }, []);

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={[styles.container, { justifyContent: 'center' }]}>
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
            text="Participaci√≥"
          />
        </View>
      </View>
      <View style={{ backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center', padding: 20, width: '100%' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Law")}
          style={styles.pressableCreate}
        >
          <Text style={styles.textButton}>Finalitzar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}
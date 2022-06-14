import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../hooks/styles';
import LawComponent from '../../components/LawComponent';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from '../../src/graphql/queries'

export default function LawScreen({ navigation }: any) {

  const [lawsData, setLawsData] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        const postResult = await API.graphql(
          graphqlOperation(listTodos)
        )

        setLawsData(postResult.data.listTodos.items)
      } catch (e) {
        console.log(e)
      }
    }

    fetchPosts();
  }, [])
  

  return (
    <SafeAreaView style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          data={lawsData}
          renderItem={({ item }) => <LawComponent info={item} />}
          //keyExtractor={item => item.id.toString()}
          ListHeaderComponent={
            <View style={styles.title}>
              <Text style={styles.text}>Lleis vigents</Text>
            </View>
          }
        />
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
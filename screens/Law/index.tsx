import { FlatList, Pressable, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../../hooks/styles';
import LawComponent from '../../components/LawComponent';
import { API, graphqlOperation } from 'aws-amplify';
import { listTodos } from '../../src/graphql/queries'
import { useIsFocused } from '@react-navigation/native';

export default function LawScreen({ navigation }: any) {

  const [lawsData, setLawsData] = useState([]);
  const [vigents, setVigents] = useState(true);
  const [revocades, setRevocades] = useState(false);

  const is_focus = useIsFocused();

  useEffect(() => {
    const fetchPosts = async () => {
      try {

        const postResult = await API.graphql(
          graphqlOperation(listTodos)
        )

        setLawsData(postResult.data.listTodos.items)
      } catch (e) {
        alert(e);
      }
    }

    fetchPosts();
  }, [is_focus])


  return (
    <View style={styles.wrapper}>
      <View style={{ backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center', padding: 20, width: '100%' }}>
        <View style={{ backgroundColor: '#d9d9d9', flexDirection: 'row', width: '100%', justifyContent: 'space-between', borderRadius: 10, height: 50, padding: 5 }}>
          <Pressable
            style={vigents ? styles.pressableOn : styles.pressableOff}
            onPress={() => {
              setVigents(true)
              setRevocades(false)
            }}
          >
            <Text style={vigents ? styles.textOn : styles.textOff}>Vigents</Text>
          </Pressable>
          <Pressable
            style={revocades ? styles.pressableOn : styles.pressableOff}
            onPress={() => {
              setVigents(false)
              setRevocades(true)
            }}
          >
            <Text style={revocades ? styles.textOn : styles.textOff}>Revocades</Text>
          </Pressable>
        </View>
      </View>
      <FlatList
        data={lawsData}
        renderItem={({ item }) => <LawComponent info={item} />}
        //keyExtractor={item => item.id.toString()}
        style={{ backgroundColor: '#F2F2F2' }}
      />
      {revocades ?
        null
        :
        <View style={{ backgroundColor: '#F2F2F2', justifyContent: 'center', alignItems: 'center', padding: 20, width: '100%' }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("NewLaw")}
            style={styles.pressableCreate}
          >
            <Text style={styles.textButton}>Proposar nova llei</Text>
          </TouchableOpacity>
        </View>
      }
    </View>
  )
}
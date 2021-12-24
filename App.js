

import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import styles from './style';


const style = StyleSheet.create(styles)

function App() {
  const [text, settext] = useState("")
  const [list, setlist] = useState([])
  const [edit, setedit] = useState(false)
  const [indexval, setindexval] = useState(null)


  const add = () => {
    if (edit) {
      list[indexval] = text
      edit(false)
      setindexval(null)
    }
    else {
      list.push(text)

      // setlist([...list, text])
    }
    settext("")
    setlist([...list,])
    // console.log(list);
  }

  const del = (i) => {
    list.splice(i, 1)
    setlist([...setlist])
  }

  const edit = (i) => {
    setedit(true)
    setindexval(i)
    settext(list[i])



  }

  return (<>

    <View style={{ flex: 1 }}>
      <View style={style.headercont}>
        <Text style={styles.header}>To Do</Text>
      </View>
      <ScrollView>
        {list.map((e, i) => (
          <View key={i}>
            <View>
              <View>  <Text>Date and time</Text></View>
              <View style={{ flexDirection: "row" }}>
                <TouchableOpacity onPress={() => del(i)} style={style.btn}><Text style={style.fs}>X</Text></TouchableOpacity>
                <TouchableOpacity onPress={() => edit(i)} style={style.btn}><Text style={style.fs}>edit</Text></TouchableOpacity>
              </View>

            </View>
            <Text>{e}</Text>
          </View>
        ))}

      </ScrollView>

      <View style={{ flex: 5 }}></View>

      <View style={{ flex: 1 }}>
        <TextInput multiline value={text} onChangeText={(e) => settext(e.target.value)} style={[style.input, style.flexcenter, { flexDirection: 'row' }]} placeholder='Enter Task' />
        <TouchableOpacity onPress={add} style={style.btn}><Text style={style.fs}>+</Text></TouchableOpacity>
      </View>
    </View>

  </>)

}



export default App;

import { StatusBar } from 'expo-status-bar';
import {useState} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Button } from 'react-native';


export default function App() {
  const [calcData,setCalcData]= useState({num: 0.0, result: null});
  const doCalc=() => {
    if(isNaN(calcData.num)){
      setCalcData({...calcData, result: 'Invalid Number'})
      return ;
    }
    const num =calcData.num;
    const sqr= num*num;
    setCalcData({...calcData,result : `Result of ${num} is ${sqr}`})

  }
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Square it gworl!</Text>
      <TextInput value={calcData.num} keyboardType='numeric'
      placeholder='Enter number'
      onChangeText={(data) => setCalcData({...calcData, num: data})}/>
      <Button title='Find square' onPress={doCalc}/>
      <Text>{calcData.result}Hello</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },title:{
    fontWeight: 'bold',
    fontSize: 30,
    color: "white",
    textShadowColor:'black',        // glow color
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 15, 
  },
});

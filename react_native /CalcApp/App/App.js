import CubeCalc from "./CubeCalc";
import SqrCalc from "./SqrCalc";   
import {Link} from 'expo-router';
import { View, Text } from "react-native";


export default function App() {
  return (
    <View>
      <Text>calculator App</Text>
      <Link href='/SqrCalc'>Square Calc</Link>
      <Link href='/CubeCalc'>Cube Calc</Link>
      </View>
  );
}


import React from "react";
import {Text} from "react-native";
import Estilo from "../Estilo";

export default props => {
    let x = 13
    let y = 100
    return (
       <>
       <Text style={Estilo.txtGrande}>
           {props.a}
       </Text>
       <Text style={Estilo.txtGrande}>
           {props.b}
       </Text>
       </>
    )

}
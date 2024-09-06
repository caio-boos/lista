import React from "react";
import { style } from "./styles";
import{Text,View}from 'react-native';
type Props = {
    caption:string,
    color:string
}
export  function Flag({...rest}:Props){
    return(
      <View style={[style.container,{backgroundColor:rest?.color}]}>
        <Text style={style.caption}>{rest.caption}</Text>
      </View>
    );
}
import React from 'react'
import { Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { theme } from '../../infrastructure/theme'

const List = (props) => {
   return (
      <View
      style={{
         flexDirection: 'row',
         justifyContent: 'space-between',
         alignItems: 'center',
         paddingTop: 20,
         paddingLeft: 27,
         paddingRight: 19,
         paddingBottom: 20,
      }}
   >
      <Text style={{ color: theme.colors.text.neutral, fontSize: 20, fontWeight: 600 }}>
         {props.title}
      </Text>
      <Ionicons name="add" size={30} color= {theme.colors.icon.orange} />
   </View>
   )
}

export default List

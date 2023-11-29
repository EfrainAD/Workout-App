import React from 'react'
import { View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../infrastructure/theme'

const ProgressBar = () => {
   return (
      <View>
            <View
         style={{
            paddingTop: 10,
            flexDirection: 'row',
            gap: 5,
            alignItems: 'center',
            justifyContent: 'space-between',
         }}
      >
         <LinearGradient
            colors={[
               theme.colors.progress.start,
               theme.colors.progress.middle,
               theme.colors.progress.end,
            ]}
            locations={[0, 0.5104, 0.9531]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={{
               borderRadius: 10,
               height: 25,
               width: 243,
               borderWidth: 2,
               borderColor: theme.colors.borders.neutral,
            }}
         ></LinearGradient>
         <View
            style={{
               padding: 1,
               marginLeft: 15,
               borderWidth: 1,
               borderColor: theme.colors.borders.neutral,
               borderRadius: 100,
               backgroundColor: theme.colors.background.neutral[2],
            }}
         >
            <Ionicons name="remove" size={25} color={theme.colors.text.neutral} />
         </View>
         <View
            style={{
               padding: 1,
               borderWidth: 1,
               borderColor: theme.colors.borders.neutral,
               borderRadius: 100,
               backgroundColor: theme.colors.background.neutral[0],
            }}
         >
            <Ionicons name="add" size={25} color={theme.colors.text.neutral} />
         </View>
      </View>
   </View>
   )
}

export default ProgressBar

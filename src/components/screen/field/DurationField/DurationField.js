import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WheelPicker from './WheelPicker'
import { theme } from '../../../../infrastructure/theme'
import Accordion from '../Accordion/Accordion'

const DurationField = ({ onChange }) => {
   const [minutes, setMinutes] = useState(0)
   const [seconds, setSeconds] = useState(0)

   useEffect(() => {
      onChange(`${minutes}:${seconds}`)
   }, [minutes, seconds])

   return (
      <Accordion
         header={
            <View style={styles.field}>
               <Text style={styles.text}>Duration</Text>
               <Text style={styles.text}>
                  <Text style={styles.digit}>{minutes}</Text>
                  {'m:'}
                  <Text style={styles.digit}>{seconds}</Text>
                  {'s'}
               </Text>
            </View>
         }
         content={
            <View style={styles.pickerContainer}>
               <WheelPicker
                  label={'Minutes'}
                  value={minutes}
                  setValue={setMinutes}
                  range={60}
               />
               <WheelPicker
                  label={'Seconds'}
                  value={seconds}
                  setValue={setSeconds}
                  range={60}
               />
            </View>
         }
         height={210}
      />
   )
}

const styles = StyleSheet.create({
   field: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
      paddingLeft: 20,
   },
   text: {
      color: theme.colors.text.neutral,
      fontSize: 18,
      fontWeight: '600',
   },
   digit: {
      color: theme.colors.text.durationDigit,
   },
   pickerContainer: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 15,
      justifyContent: 'space-evenly',
   },
})

export default DurationField

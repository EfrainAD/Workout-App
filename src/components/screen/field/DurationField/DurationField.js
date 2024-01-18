import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WheelPicker from './WheelPicker'
import { theme } from '../../../../infrastructure/theme'
import Accordion from '../Accordion/Accordion'

const DurationField = ({ onChange }) => {
   const [days, setDays] = useState(0)
   const [hours, setHours] = useState(0)
   const [minutes, setMinutes] = useState(0)

   useEffect(() => {
      onChange(`${days}:${hours}:${minutes}`)
   }, [days, hours, minutes])

   return (
      <Accordion
         header={
            <View style={styles.field}>
               <Text style={{ fontSize: 50, textAlign: 'center' }}>
                  {`${days} : ${hours} : ${minutes}`}{' '}
               </Text>
            </View>
         }
         content={
            <View style={styles.pickerContainer}>
               <WheelPicker
                  label={'Days'}
                  value={days}
                  setValue={setDays}
                  range={365}
               />
               <Text style={styles.separator}>d</Text>
               <WheelPicker
                  label={'Hours'}
                  value={hours}
                  setValue={setHours}
                  range={24}
               />
               <Text style={styles.separator}>h</Text>
               <WheelPicker
                  label={'Minutes'}
                  value={minutes}
                  setValue={setMinutes}
                  range={60}
               />
               <Text style={styles.separator}>m</Text>
            </View>
         }
         height={200}
      />
   )
}

const styles = StyleSheet.create({
   field: {
      color: theme.colors.text.neutral,
      fontSize: 18,
      fontWeight: '600',
      paddingBottom: 0,
      marginBottom: 0,
   },
   pickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      height: 200,
   },
   separator: {
      marginHorizontal: 5,
   },
})

export default DurationField

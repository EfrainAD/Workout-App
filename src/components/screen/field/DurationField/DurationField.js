import { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import WheelPicker from './WheelPicker'

const DurationField = ({ onChange }) => {
   const [days, setDays] = useState(0)
   const [hours, setHours] = useState(0)
   const [minutes, setMinutes] = useState(0)

   useEffect(() => {
      onChange(`${days}:${hours}:${minutes}`)
   }, [days, hours, minutes])

   return (
      <View style={styles.container}>
         <Text style={{ fontSize: 50, textAlign: 'center', marginBottom: 10 }}>
            {`${days} : ${hours} : ${minutes}`}
         </Text>
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
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      marginBottom: 20,
   },
   pickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      height: 150,
   },
   separator: {
      marginHorizontal: 5,
   },
})

export default DurationField

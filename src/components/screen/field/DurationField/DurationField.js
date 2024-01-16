import { useEffect, useRef, useState } from 'react'
import {
   View,
   Text,
   StyleSheet,
   Animated,
   TouchableWithoutFeedback,
} from 'react-native'
import WheelPicker from './WheelPicker'
import { theme } from '../../../../infrastructure/theme'

const DurationField = ({ onChange }) => {
   const [days, setDays] = useState(0)
   const [hours, setHours] = useState(0)
   const [minutes, setMinutes] = useState(0)
   const animationDuration = 1000
   const useNativeDriver = !['height'].includes('height') // Check if the property supports native driver
   const [open, setOpen] = useState(false)
   const animatedController = useRef(new Animated.Value(0)).current
   const [bodySectionHeight, setBodySectionHeight] = useState(0)
   const bodyHeight = animatedController.interpolate({
      inputRange: [0, 1],
      outputRange: [0, bodySectionHeight],
   })
   const toggleAccordion = () => {
      if (open) {
         Animated.timing(animatedController, {
            duration: animationDuration,
            toValue: 0,
            useNativeDriver,
         }).start()
      } else {
         Animated.timing(animatedController, {
            duration: animationDuration,
            toValue: 1,
            useNativeDriver,
         }).start()
      }
      setOpen(!open)
   }

   useEffect(() => {
      onChange(`${days}:${hours}:${minutes}`)
   }, [days, hours, minutes])

   return (
      <View style={styles.container}>
         <TouchableWithoutFeedback onPress={() => toggleAccordion()}>
            <View style={styles.field}>
               <Text style={{ fontSize: 50, textAlign: 'center' }}>
                  {`${days} : ${hours} : ${minutes}`}{' '}
               </Text>
            </View>
         </TouchableWithoutFeedback>
         <Animated.View style={[{ height: bodyHeight }]}>
            <View
               style={styles.pickerContainer}
               onLayout={(event) =>
                  setBodySectionHeight(event.nativeEvent.layout.height)
               }
            >
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
         </Animated.View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      marginBottom: 20,
      backgroundColor: theme.colors.background.neutral[2],
      margin: 5,
      marginLeft: 8,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: theme.colors.borders.neutral,
      padding: 10,
      paddingBottom: 10,
      paddingLeft: 20,
      overflow: 'hidden',
   },
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
      marginTop: 10,
      height: 150,
   },
   separator: {
      marginHorizontal: 5,
   },
   // For the the accordion
   bodyBackground: {
      backgroundColor: '#EFEFEF',
      overflow: 'hidden',
   },
   titleContainer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      paddingLeft: '1.5rem',
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: '#EFEFEF',
   },
   bodyContainer: {
      padding: '1rem',
      paddingLeft: '1.5rem',
      position: 'absolute',
      bottom: 0,
   },
})

export default DurationField

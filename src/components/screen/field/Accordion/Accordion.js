import { useRef, useState } from 'react'
import {
   View,
   StyleSheet,
   Animated,
   TouchableWithoutFeedback,
} from 'react-native'
import { theme } from '../../../../infrastructure/theme'

const Accordion = ({ header, content, height }) => {
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
      console.log('toggleAccordion')
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
      console.log('toggleAccordion 2')
   }

   return (
      <View style={styles.container}>
         <TouchableWithoutFeedback onPress={() => toggleAccordion()}>
            {header}
         </TouchableWithoutFeedback>
         <Animated.View style={[{ height: bodyHeight }]}>
            <View
               style={[styles.pickerContainer, { height }]}
               onLayout={(event) =>
                  setBodySectionHeight(event.nativeEvent.layout.height)
               }
            >
               {content}
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
   pickerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
   },
})

export default Accordion

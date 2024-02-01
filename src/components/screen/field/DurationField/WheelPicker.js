import { useEffect, useRef } from 'react'
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   TouchableOpacity,
} from 'react-native'
import { theme } from '../../../../infrastructure/theme'

const WheelPicker = ({ label, value, setValue, range }) => {
   const scrollRef = useRef(null)
   let isHumanScroll = false

   const scrollToValue = (index) => {
      console.log('scrollToValue(Index) =', index)
      if (!scrollRef.current) return

      isHumanScroll = !isHumanScroll
      console.log('isHumanScroll is changed to', isHumanScroll)

      const scrollPosition = 50 * index
      scrollRef.current.scrollTo({ y: scrollPosition, animated: true })
   }

   const handleScroll = (event) => {
      console.log('isHuman in handleScroll', isHumanScroll)
      if (!isHumanScroll) {
         isHumanScroll = true
         return
      }

      const isMoving = event.nativeEvent.velocity
         ? event.nativeEvent.velocity.y !== 0
         : false

      console.log('isMoving', isMoving)
      if (!isMoving) {
         const offsetY = event.nativeEvent.contentOffset.y

         console.log('offsetY', offsetY)
         // Calculate the index based on the scroll position
         const newValue = Math.round(offsetY / 50)

         console.log('newValue', newValue)
         if (newValue === value) {
            console.log('newValue === value')
            scrollToValue(newValue)
         } else {
            setValue(newValue)
            scrollToValue(newValue)
         }
      }
   }

   useEffect(() => {
      if (scrollRef.current) scrollToValue(value)
   }, [scrollRef.current])

   return (
      <View style={styles.wheelContainer}>
         <View
            style={{
               alignItems: 'center',
            }}
         >
            <ScrollView
               ref={scrollRef}
               onScrollEndDrag={handleScroll}
               onMomentumScrollEnd={handleScroll}
               contentContainerStyle={styles.wheelContent}
               showsVerticalScrollIndicator={false}
            >
               {Array.from({ length: range }, (_, i) => (
                  <View key={i} style={styles.wheelItem}>
                     <Text style={styles.wheelItemText}>{i}</Text>
                  </View>
               ))}
            </ScrollView>
            <View style={styles.wheelLabel}>
               <Text style={styles.textLabel}>{label}</Text>
            </View>
         </View>
         <View style={styles.arrowContainer}>
            <Text style={styles.arrow}>{'\u2190'}</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   wheelContainer: {
      height: 140,
   },
   wheelContent: {
      paddingVertical: 50,
      paddingHorizontal: 25,
   },
   wheelItem: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
   },
   wheelItemText: {
      fontSize: 20,
      color: theme.colors.text.neutral,
   },
   wheelLabel: {
      marginTop: 15,
   },
   textLabel: {
      fontSize: 20,
      color: theme.colors.text.neutral,
   },
   arrowContainer: {
      position: 'absolute',
      top: '44%',
      right: '0%',
      pointerEvents: 'none',
   },
   arrow: {
      fontSize: 23,
      color: theme.colors.text.durationDigit,
   },
})

export default WheelPicker

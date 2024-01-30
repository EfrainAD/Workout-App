import { useEffect, useRef } from 'react'
import {
   View,
   Text,
   StyleSheet,
   ScrollView,
   TouchableOpacity,
} from 'react-native'

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
               flexDirection: 'row',
               // justifyContent: 'center',
               alignItems: 'center',
            }}
         >
            <ScrollView
               ref={scrollRef}
               onScrollEndDrag={handleScroll}
               onMomentumScrollEnd={handleScroll}
               contentContainerStyle={styles.wheelContent}
            >
               {Array.from({ length: range }, (_, i) => (
                  <View key={i} style={styles.wheelItem}>
                     <Text style={styles.wheelItemText}>{i}</Text>
                  </View>
               ))}
            </ScrollView>
            <Text style={{ marginHorizontal: 5 }}>{'\u2190'}</Text>
         </View>
         <TouchableOpacity onPress={() => scrollToValue(value)}>
            <View style={styles.wheelLabel}>
               <Text>{label}</Text>
            </View>
         </TouchableOpacity>
      </View>
   )
}

const styles = StyleSheet.create({
   wheelContainer: {
      flexDirection: 'column',
      alignItems: 'center',
      marginHorizontal: 10,
   },
   wheelContent: {
      textAlign: 'center',
      paddingTop: 50,
      paddingBottom: 100,
      marginTop: 25,
   },
   wheelItem: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      // borderWidth: 1,
      // borderColor: 'black',
   },
   wheelItemText: {
      fontSize: 16,
   },
   wheelLabel: {
      // marginTop: 10,
   },
})

export default WheelPicker

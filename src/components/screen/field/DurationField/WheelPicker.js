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

   const scrollToValue = (index) => {
      console.log('Index value', index)

      const scrollPosition = 50 * index + 1

      scrollRef.current.scrollTo({ y: scrollPosition, animated: true })
   }

   const handleScroll = (event) => {
      const isMoving = event.nativeEvent.velocity
         ? event.nativeEvent.velocity.y !== 0
         : false
      console.log(isMoving)
      if (!isMoving) {
         const offsetY = event.nativeEvent.contentOffset.y
         console.log('offsetY', offsetY)
         // Calculate the index based on the scroll position
         const index = Math.round(offsetY / 50)
         console.log('index', index)
         setValue(index)
      }
   }

   useEffect(() => {
      if (scrollRef.current) scrollToValue(value)
   }, [scrollRef.current, value])

   return (
      <View style={styles.wheelContainer}>
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
         <TouchableOpacity onPress={() => scrollToValue(value)}>
            <View style={styles.wheelLabel}>
               <Text>{label + 'HI'}</Text>
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
      paddingBottom: 50,
   },
   wheelItem: {
      width: 50,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: 'black',
   },
   wheelItemText: {
      fontSize: 16,
   },
   wheelLabel: {
      // marginTop: 10,
   },
})

export default WheelPicker

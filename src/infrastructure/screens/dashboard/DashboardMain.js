import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { theme } from '../../theme'

const DashboardMain = () => {
   return (
      // Dashboard Title
      <View style={{ flex: 1, backgroundColor: theme.colors.background.neutral[0] }}>
         <View
            style={{
               flexDirection: 'row',
               justifyContent: 'space-between',
               alignItems: 'center',
               paddingLeft: 17,
               paddingTop: 5,
               paddingBottom: 20,
               paddingRight: 17,
            }}
         >
            <Ionicons
               style={{ color: theme.colors.icon.neutral, fontWeight: 600 }}
               name="ios-arrow-back"
               size={24}
            />
            <Text style={{ color: theme.colors.text.neutral, fontSize: 24, fontWeight: 600 }}>
               Dashboard
            </Text>
            <Ionicons
               style={{ color: theme.colors.icon.neutral }}
               name="settings-outline"
               size={24}
            />
         </View>
         {/* Calendar */}
         <ScrollView>
            <View style={{ backgroundColor: theme.colors.background.neutral[2] }}>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     paddingTop: 15,
                     paddingRight: 19,
                     paddingBottom: 17,
                  }}
               >
                  <Text
                     style={{
                        color: theme.colors.text.neutral,
                        alignSelf: 'center',
                        fontSize: 16,
                        fontWeight: 600,
                        paddingLeft: 11,
                     }}
                  >
                     Today, 7 Dec 2023
                  </Text>
                  <Feather
                     style={{ alignSelf: 'center' }}
                     name="calendar"
                     size={24}
                     color= {theme.colors.icon.tertiary}
                  />
               </View>
               {/* Days of Week */}
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     paddingBottom: 20,
                     paddingLeft: 4,
                     paddingRight: 4,
                  }}
               >
                  <View
                     style={{
                        height: 80,
                        borderWidth: 2,
                        borderColor: theme.colors.borders.neutral,
                        backgroundColor: theme.colors.calendar.noWorkout,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                           padding: 5,
                        }}
                     >
                        SUN
                     </Text>
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                        }}
                     >
                        3
                     </Text>
                  </View>
                  <View
                     style={{
                        height: 80,
                        borderWidth: 2,
                        borderColor: theme.colors.borders.neutral,
                        backgroundColor: theme.colors.calendar.pastWorkout,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                           padding: 5,
                        }}
                     >
                        MON
                     </Text>
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                        }}
                     >
                        4
                     </Text>
                  </View>
                  <View
                     style={{
                        height: 80,
                        borderWidth: 2,
                        borderColor: theme.colors.borders.neutral,
                        backgroundColor: theme.colors.calendar.noWorkout,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                           padding: 5,
                        }}
                     >
                        TUE
                     </Text>
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                        }}
                     >
                        5
                     </Text>
                  </View>
                  <View
                     style={{
                        height: 80,
                        borderWidth: 2,
                        borderColor: theme.colors.borders.neutral,
                        backgroundColor: theme.colors.calendar.pastWorkout,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                           padding: 5,
                        }}
                     >
                        WED
                     </Text>
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                        }}
                     >
                        6
                     </Text>
                  </View>
                  <View
                     style={{
                        height: 80,
                        borderWidth: 2,
                        borderColor: theme.colors.borders.neutral,
                        backgroundColor: theme.colors.calendar.current.workout,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                           padding: 5,
                        }}
                     >
                        THU
                     </Text>
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                        }}
                     >
                        7
                     </Text>
                  </View>
                  <View
                     style={{
                        height: 80,
                        borderWidth: 2,
                        borderColor: theme.colors.borders.neutral,
                        backgroundColor: theme.colors.calendar.noWorkout,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                           padding: 5,
                        }}
                     >
                        FRI
                     </Text>
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                        }}
                     >
                        8
                     </Text>
                  </View>
                  <View
                     style={{
                        height: 80,
                        borderWidth: 2,
                        borderColor: theme.colors.borders.neutral,
                        backgroundColor: theme.colors.calendar.noWorkout,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                     }}
                  >
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                           padding: 5,
                        }}
                     >
                        SAT
                     </Text>
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           fontSize: 16,
                           fontWeight: 600,
                        }}
                     >
                        9
                     </Text>
                  </View>
               </View>
            </View>
            {/* Current */}
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
                  Current
               </Text>
               <Ionicons name="add" size={30} color= {theme.colors.icon.orange} />
            </View>
            {/* Current Cards */}
            <View
               style={{
                  backgroundColor:theme.colors.background.neutral[2],
                  margin: 10,
                  marginLeft: 6,
                  borderWidth: 1,
                  borderColor: theme.colors.borders.neutral,
                  borderRadius: 20,
                  padding: 10,
                  paddingLeft: 20,
                  marginBottom: 5,
               }}
            >
               <View style={{ paddingBottom: 0 }}>
                  <Text
                     style={{ color: theme.colors.text.neutral, fontSize: 16, fontWeight: 600 }}
                  >
                     The Ultimate Upper Body
                  </Text>
               </View>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Text
                     style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}
                  >
                     Beginner
                  </Text>
                  <View
                     style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                     }}
                  >
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           paddingRight: 27,
                           fontSize: 14,
                           fontWeight: 600,
                        }}
                     >
                        15m 45sec
                     </Text>
                     <MaterialIcons
                        name="arrow-forward-ios"
                        size={24}
                        color= {theme.colors.icon.orange}
                        style={{ alignSelf: 'center' }}
                     />
                  </View>
               </View>
               <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                  <Text
                     style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}
                  >
                     MON, WED, FRI
                  </Text>
               </View>
            </View>
            {/* Current Cards */}
            <View
               style={{
                  backgroundColor: theme.colors.background.neutral[2],
                  color: theme.colors.text.neutral,
                  margin: 10,
                  marginLeft: 6,
                  borderWidth: 1,
                  borderColor: theme.colors.borders.neutral,
                  borderRadius: 20,
                  padding: 10,
                  paddingLeft: 20,
                  marginBottom: 5,
               }}
            >
               <View style={{ paddingBottom: 0 }}>
                  <Text
                     style={{
                        color: theme.colors.text.neutral,
                        fontSize: 16,
                        fontWeight: 600,
                        paddingBottom: 0,
                        marginBottom: 0,
                     }}
                  >
                     The Ultimate Upper Body
                  </Text>
               </View>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Text
                     style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}
                  >
                     Beginner
                  </Text>
                  <View
                     style={{
                        flexDirection: 'row',
                        justifyContent: 'space-around',
                     }}
                  >
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           paddingRight: 27,
                           fontSize: 14,
                           fontWeight: 600,
                        }}
                     >
                        15m 45sec
                     </Text>
                     <MaterialIcons
                        name="arrow-forward-ios"
                        size={24}
                        color={theme.colors.icon.orange}
                        style={{ alignSelf: 'center' }}
                     />
                  </View>
               </View>
               <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                  <Text
                     style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}
                  >
                     MON, WED, FRI
                  </Text>
               </View>
            </View>
            {/* Goals */}
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
               <Text
                  style={{
                     color: theme.colors.text.neutral,
                     fontSize: 20,
                     fontWeight: 600,
                  }}
               >
                  Goals
               </Text>
               <Ionicons name="add" size={30} color={theme.colors.icon.orange} />
            </View>
            {/* Goal Cards */}
            <View
               style={{
                  backgroundColor: theme.colors.background.neutral[2],
                  margin: 6,
                  marginLeft: 6,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: theme.colors.borders.neutral,
                  padding: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
               }}
            >
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                  }}
               >
                  <Text
                     style={{
                        color: theme.colors.text.neutral,
                        fontSize: 16,
                        fontWeight: 600,
                        paddingBottom: 0,
                        marginBottom: 0,
                     }}
                  >
                     Goal: Name
                  </Text>
                  <Text
                     style={{
                        color: theme.colors.text.neutral,
                        fontSize: 14,
                        fontWeight: 600,
                        paddingBottom: 0,
                        marginBottom: 0,
                     }}
                  >
                     220 lbs
                  </Text>
               </View>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Text
                     style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}
                  >
                     Description of 40 characters
                  </Text>
               </View>
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
                  <View>
                     <Text
                        style={{
                           color: theme.colors.text.neutral,
                           alignSelf: 'center',
                           borderWidth: 1,
                           borderColor: theme.colors.borders.neutral,
                           backgroundColor: theme.colors.background.neutral[0],
                           textAlign: 'center',
                           padding: 5,
                           paddingLeft: 10,
                           paddingRight: 10,
                           fontSize: 14,
                           fontWeight: 600,
                        }}
                     >
                        0
                     </Text>
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
            {/* Challenges */}
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
                  Challenges
               </Text>
               <Ionicons name="add" size={30} color={theme.colors.icon.orange} />
            </View>
            {/* Challenges Cards */}
            <View
               style={{
                  backgroundColor: theme.colors.background.neutral[2],
                  margin: 6,
                  marginLeft: 6,
                  borderRadius: 20,
                  borderWidth: 1,
                  borderColor: theme.colors.borders.neutral,
                  padding: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
               }}
            >
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                  }}
               >
                  <Text
                     style={{
                        color: theme.colors.text.neutral,
                        fontSize: 16,
                        fontWeight: 600,
                        paddingBottom: 0,
                        marginBottom: 0,
                     }}
                  >
                     30 day Streak
                  </Text>
                  <Text
                     style={{
                        color: theme.colors.text.neutral,
                        fontSize: 14,
                        fontWeight: 600,
                        paddingBottom: 0,
                        marginBottom: 0,
                     }}
                  >
                     Workout name{' '}
                  </Text>
               </View>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Text
                     style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}
                  >
                     Description of 40 characters
                  </Text>
               </View>
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
            <View
               style={{
                  backgroundColor: theme.colors.background.neutral[2],
                  margin: 6,
                  marginLeft: 6,
                  borderWidth: 1,
                  borderColor: theme.colors.borders.neutral,
                  borderRadius: 20,
                  padding: 10,
                  paddingBottom: 10,
                  paddingLeft: 20,
               }}
            >
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                  }}
               >
                  <Text
                     style={{
                        color: theme.colors.text.neutral,
                        fontSize: 16,
                        fontWeight: 600,
                        paddingBottom: 0,
                        marginBottom: 0,
                     }}
                  >
                     60 day Streak
                  </Text>
                  <Text
                     style={{
                        color: theme.colors.text.neutral,
                        fontSize: 14,
                        fontWeight: 600,
                        paddingBottom: 0,
                        marginBottom: 0,
                     }}
                  >
                     Workout name{' '}
                  </Text>
               </View>
               <View
                  style={{
                     flexDirection: 'row',
                     justifyContent: 'space-between',
                     alignItems: 'center',
                  }}
               >
                  <Text
                     style={{ color: theme.colors.text.neutral, fontSize: 14, fontWeight: 600 }}
                  >
                     Description of 40 characters
                  </Text>
               </View>
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
                        backgroundColor: theme.colors.background.neutral[2],
                     }}
                  >
                     <Ionicons name="add" size={25} color={theme.colors.text.neutral} />
                  </View>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}

export default DashboardMain

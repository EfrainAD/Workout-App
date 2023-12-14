import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Button, Text } from 'react-native'
import { SafeArea } from './../../components/utilities/safeArea.component'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme } from './../theme'

import DashboardMain from '../../screens/dashboard/DashboardMain'
import AddWorkoutExample from '../../services/api/addWorkoutExample.screen'

// Navigation Components
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()

const TAB_ICONS = {
   Stats: (size, color) => (
      <Ionicons name="stats-chart" size={size} color={color} />
   ),
   Workouts: (size, color) => (
      <FontAwesome5 name="dumbbell" size={size} color={color} />
   ),
   Dashboard: (size, color) => (
      <Ionicons name="speedometer" size={size} color={color} />
   ),
   Account: (size, color) => (
      <Ionicons name="person" size={size} color={color} />
   ),
}

// Screens for Work
function WorkMain({ navigation }) {
   return (
      <SafeArea
         style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <Text style={{ fontSize: theme.fontSizes.h2 }}>Work Main!</Text>
         <Button
            title="Go to Work1 Screen"
            onPress={() => navigation.navigate('Work1')}
         />
         <Button
            title="Go to Work2 Screen"
            onPress={() => navigation.navigate('Work2')}
         />
         <Button
            title="Go to Work3 Screen"
            onPress={() => navigation.navigate('Work3')}
         />
      </SafeArea>
   )
}
function Work1({ navigation }) {
   return (
      <SafeArea
         style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <Text style={{ fontSize: theme.fontSizes.h2 }}>Work One!</Text>
         <Button
            title="Go to Work1 Screen"
            onPress={() => navigation.navigate('Work1')}
         />
         <Button
            title="Go to Work2 Screen"
            onPress={() => navigation.navigate('Work2')}
         />
         <Button
            title="Go to Work3 Screen"
            onPress={() => navigation.navigate('Work3')}
         />
      </SafeArea>
   )
}
function Work2({ navigation }) {
   return (
      <SafeArea
         style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
         <Text style={{ fontSize: theme.fontSizes.h2 }}>Work2!</Text>
         <Button
            title="Go to Work1 Screen"
            onPress={() => navigation.navigate('Work1')}
         />
         <Button
            title="Go to Work2 Screen"
            onPress={() => navigation.navigate('Work2')}
         />
         <Button
            title="Go to Work3 Screen"
            onPress={() => navigation.navigate('Work3')}
         />
      </SafeArea>
   )
}
function Work3({ navigation }) {
   return (
      <SafeArea
         style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
         <Text style={{ fontSize: theme.fontSizes.h2 }}>Work3!</Text>
         <Button
            title="Go to MAIN Screen"
            onPress={() => navigation.navigate('WorkMain')}
         />
         <Button
            title="Go to Work1 Screen"
            onPress={() => navigation.navigate('Work1')}
         />
         <Button
            title="Go to Work2 Screen"
            onPress={() => navigation.navigate('Work2')}
         />
         <Button
            title="Go to Work3 Screen"
            onPress={() => navigation.navigate('Work3')}
         />
      </SafeArea>
   )
}
// Screens for Acc
function AccMain({ navigation }) {
   return (
      <SafeArea
         style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <Text style={{ fontSize: theme.fontSizes.h2 }}>Work Main!</Text>
         <Button
            title="Go to Work2 Screen"
            onPress={() => navigation.navigate('Work2')}
         />
      </SafeArea>
   )
}

// Navigation Stacks
function WorkStack() {
   return (
      <Stack.Navigator>
         <Stack.Screen name="WorkMain" component={WorkMain} />
         <Stack.Screen name="Work1" component={Work1} />
         <Stack.Screen name="Work2" component={Work2} />
         <Stack.Screen name="Work3" component={Work3} />
      </Stack.Navigator>
   )
}
function AccStack() {
   return (
      <Stack.Navigator>
         <Stack.Screen name="AccMain" component={AccMain} />
      </Stack.Navigator>
   )
}

const screenOptions = ({ route }) => ({
   tabBarIcon: ({ color, size }) => {
      const iconRenderer = TAB_ICONS[route.name]

      return iconRenderer(size, color)
   },
   tabBarActiveTintColor: theme.colors.ui.primary,
   tabBarInactiveTintColor: theme.colors.ui.secondary,
   headerShown: false,
})

export const AppNavigator = () => {
   return (
      <NavigationContainer>
         <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Stats" component={WorkStack} />
            <Tab.Screen name="Workouts" component={AddWorkoutExample} />
            <Tab.Screen name="Dashboard" component={DashboardMain} />
            <Tab.Screen name="Account" component={AccStack} />
         </Tab.Navigator>
      </NavigationContainer>
   )
}

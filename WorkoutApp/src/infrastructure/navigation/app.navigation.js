import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from 'react-native'
import { SafeArea } from './../../components/utilities/safeArea.component'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme } from './../theme'

const Tab = createBottomTabNavigator()

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

// Temps, until they are actoually name..
function StatsScreen() {
   return (
      <SafeArea
         style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
         }}
      >
         <Text style={{ fontSize: theme.fontSizes.h2 }}>Stats!</Text>
      </SafeArea>
   )
}
function WorkoutsScreen() {
   return (
      <SafeArea
         style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
         <Text style={{ fontSize: theme.fontSizes.h2 }}>Workouts!</Text>
      </SafeArea>
   )
}
function DashboardScreen() {
   return (
      <SafeArea
         style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
         <Text style={{ fontSize: theme.fontSizes.h2 }}>Dashboard!</Text>
      </SafeArea>
   )
}
function AccountScreen() {
   return (
      <SafeArea
         style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
      >
         <Text style={{ fontSize: theme.fontSizes.h2 }}>Account!</Text>
      </SafeArea>
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
            <Tab.Screen name="Stats" component={StatsScreen} />
            <Tab.Screen name="Workouts" component={WorkoutsScreen} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
         </Tab.Navigator>
      </NavigationContainer>
   )
}

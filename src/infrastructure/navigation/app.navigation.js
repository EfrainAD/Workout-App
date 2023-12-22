import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack'

import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme } from './../theme'

import DashboardMain from '../../screens/dashboard/DashboardMain'
import AddWorkoutExample from '../../services/api/addWorkoutExample.screen'

import AccountScreen from '../../screens/account/account.screen'
import StatsScreen from '../../screens/stats/stats.screen'
import Settings from '../../components/settings/Settings.Screen'
import NotificationsScreen from '../../screens/account/notifications.screen'
import DeleteAccountScreen from '../../screens/account/deleteAccount.screen'
import SecurityScreen from '../../screens/account/security.screen'
import HelpScreen from '../../screens/account/help.screen'
import FeedbackScreen from '../../screens/account/feedback.screen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const SettingsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Account Screen"
        component={AccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown: false,
          title: 'Settings', // You can customize the title here
        }}
      />
      <Stack.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          headerShown: false,
          title: 'Notifications', // You can customize the title here
        }}
      />
      <Stack.Screen
        name="Delete Account"
        component={DeleteAccountScreen}
        options={{
          headerShown: false,
          title: 'Delete Account', // You can customize the title here
        }}
      />
      <Stack.Screen
        name="Security and Privacy"
        component={SecurityScreen}
        options={{
          headerShown: false,
          title: 'Security and Privacy', // You can customize the title here
        }}
      />
      <Stack.Screen
        name="Help and Support"
        component={HelpScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Send Feedback"
        component={FeedbackScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

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

const screenOptions = ({ route }) => ({
   tabBarIcon: ({ color, size }) => {
      const iconRenderer = TAB_ICONS[route.name]

      return iconRenderer(size, color)
   },
   tabBarActiveTintColor: theme.colors.ui.primary,
   tabBarInactiveTintColor: theme.colors.ui.secondary,
   headerShown: false,
})

const headerOptions = ({ route, navigation }) => ({
   headerShown: true,
   headerStyle: {
      backgroundColor: theme.colors.background.neutral[0],
      borderBottomColor: 'transparent',
      borderBottomWidth: 0,
      shadowColor: 'transparent',
      elevation: 0,
   },
   headerTitleStyle: {
      color: theme.colors.text.neutral, // Set your desired text color
      fontSize: 24,
      fontWeight: 600,
   },
   headerRight: () =>
   route.name === 'Account' ? (
     <Ionicons
       style={{
         color: theme.colors.icon.neutral,
         paddingRight: 17,
       }}
       name="settings-outline"
       size={24}
       onPress={() => navigation.navigate('Settings')}
     />
   ) : null,
   headerLeft: () => (
      <Ionicons
         style={{
            color: theme.colors.icon.neutral,
            fontWeight: 600,
            paddingLeft: 17,
            paddingTop: 5,
            paddingBottom: 20,
         }}
         name="ios-arrow-back"
         size={24}
      />
   ),
})

export const AppNavigator = () => {
   return (
      <NavigationContainer>
         <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen
               name="Stats"
               component={StatsScreen}
               options={headerOptions}
            />
            <Tab.Screen
               name="Workouts"
               component={AddWorkoutExample}
               options={headerOptions}
            />
            <Tab.Screen
               name="Dashboard"
               component={DashboardMain}
               options={headerOptions}
            />

            <Tab.Screen
               name="Account"
               component={SettingsStack}
               options={headerOptions}
            />
         </Tab.Navigator>
      </NavigationContainer>
   )
}

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text, View } from 'react-native'
import { SafeArea } from './../../components/utilities/safeArea.component'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome5 } from '@expo/vector-icons'
import { theme } from './../theme'

import DashboardMain from '../../screens/dashboard/DashboardMain'
import AddWorkoutExample from '../../services/api/addWorkoutExample.screen'
import WorkoutsScreen from '../../screens/workout/workouts.screens'
import UserExercisesScreen from '../../screens/exercise/userExercises.screen'
import ExercisesScreen from '../../screens/exercise/exercises.screens'
import ExerciseInfoScreen from '../../screens/exercise/exerciseInfo.screen'
import AccountScreen from '../../screens/account/account.screen'
import StatsScreen from '../../screens/stats/stats.screen'
import UserWorkoutsScreen from '../../screens/workout/userWorkouts.screen'
import AddChallengeScreen from '../../screens/challenge/addChallenge.screen'
import AddGoalScreen from '../../screens/goal/addGoal.screen'
import AddExerciseScreen from '../../screens/exercise/addExercise.screen'
import AddWorkoutScreen from '../../screens/workout/addWorkout.screen'
import ChangePasswordScreen from '../../screens/account/changePassword.screen copy 2'
import DeleteAccountScreen from '../../screens/account/deleteAccount.screen'
import FeedbackScreen from '../../screens/account/feedback.screen'
import HelpScreen from '../../screens/account/help.screen'
import NotificationsScreen from '../../screens/account/notifications.screen'
import SecurityScreen from '../../screens/account/security.screen'
import ChategoryScreen from '../../screens/trophy/userTrophy.screen'

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
// function StatsScreen() {
//    return (
//       <SafeArea
//          style={{
//             flex: 1,
//             justifyContent: 'center',
//             alignItems: 'center',
//          }}
//       >
//          <Text style={{ fontSize: theme.fontSizes.h2 }}>Stats!</Text>
//       </SafeArea>
//    )
// }
// function WorkoutsScreen() {
//    return (
//       <SafeArea
//          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
//       >
//          <Text style={{ fontSize: theme.fontSizes.h2 }}>Workouts!</Text>
//       </SafeArea>
//    )
// }
function DashboardScreen() {
   return (
      <>
         <SafeArea>
            <DashboardMain></DashboardMain>
         </SafeArea>
      </>
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
            <Tab.Screen name="Workouts" component={AddWorkoutExample} />
            <Tab.Screen name="Dashboard" component={DashboardScreen} />
            <Tab.Screen name="Account" component={AccountScreen} />
         </Tab.Navigator>
      </NavigationContainer>
   )
}

import React from 'react'
import { View, ScrollView } from 'react-native'
import { theme } from '../../infrastructure/theme'
import Header from '../../components/section/Header'
import Calendar from '../../components/dashboard/Calendar'
import GoalsCard from '../../components/goals/GoalsCard'
import ChallengesCards from '../../components/challenges/ChallengesCards'
import WorkoutList from '../../components/currentWorkouts/WorkoutList'
import SectionHeader from '../../components/screen/SectionHeader'

const DashboardMain = () => {
   return (
      <View
         style={{
            flex: 1,
            backgroundColor: theme.colors.background.neutral[0],
         }}
      >
         <Header title="Dashboard" />
         <ScrollView>
            <Calendar />
            <WorkoutList title="Current" />
            <GoalsCard title="Goals" />
            <ChallengesCards title="Challenges" />
         </ScrollView>
      </View>
   )
}

export default DashboardMain

import React from 'react'
import { View, ScrollView } from 'react-native'
import { theme } from '../../infrastructure/theme'
import Header from '../../components/section/Header'
import Calendar from '../../components/dashboard/Calendar'
import GoalsCard from '../../components/goals/GoalsCard'
import ChallengesCards from '../../components/challenges/ChallengesCards'
import CurrentCards from '../../components/current/CurrentCards'
import Title from '../../components/screen/Title'

const DashboardMain = () => {
   return (
      <View style={{ flex: 1, backgroundColor: theme.colors.background.neutral[0] }}>
         <Header title="Dashboard"/>
         <ScrollView>
            <Calendar/>
            <Title title="Current"/>
            <CurrentCards />
            <Title title="Goals"/>
            <GoalsCard/>
            <Title title="Challenges"/>
            <ChallengesCards />
         </ScrollView>
      </View>
   )
}

export default DashboardMain

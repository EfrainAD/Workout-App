import React from 'react'
import { StatusBar as ExpoStatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './src/infrastructure/theme'
import {
   useFonts as useOswald,
   Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

import { Navigator } from './src/infrastructure/navigation'
import { SafeArea } from './src/components/utilities/safeArea.component'

export default function App() {
   const [oswaldLoaded] = useOswald({ Oswald_400Regular })
   const [latoLoaded] = useLato({ Lato_400Regular })
   if (!oswaldLoaded || !latoLoaded) return null

   return (
      <>
         <ThemeProvider theme={theme}>
            <SafeArea>
               <Navigator />
            </SafeArea>
         </ThemeProvider>
         <ExpoStatusBar style="auto" />
      </>
   )
}

import React from 'react'
import {
   ProgressBarContainer,
   StyledLinearGradient,
   IconButtonContainer,
   AddRemoveIconButtonContainer,
   StyledIonicons,
} from './progressBar.styles'
import { theme } from '../../infrastructure/theme'

const ProgressBar = () => {
   return (
      <ProgressBarContainer>
         <StyledLinearGradient
            colors={[
               theme.colors.progress.start,
               theme.colors.progress.middle,
               theme.colors.progress.end,
            ]}
            locations={[0, 0.5104, 0.9531]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
         />
         <IconButtonContainer>
            <StyledIonicons name="remove" />
         </IconButtonContainer>
         <AddRemoveIconButtonContainer>
            <StyledIonicons name="add" />
         </AddRemoveIconButtonContainer>
      </ProgressBarContainer>
   )
}

export default ProgressBar

import { useState } from 'react'
import { StyledDropdown } from './selectLevelField.styles.js'
import { getLevelObj } from './selectLevelField.utils.js'

const levels = [
   { label: 'Beginner', value: 'Beginner' },
   { label: 'Intermediate', value: 'Intermediate' },
   { label: 'Advanced', value: 'Advanced' },
]

const SelectLevelField = ({
   value: defaultValue = levels[0].value,
   onChange,
   ...props
}) => {
   const valueObj = getLevelObj(levels, defaultValue)

   if (!valueObj)
      throw new Error(
         "The default value that was passed in the dropdown prop, doesn't match any of the  available optons",
      )

   const [value, setValue] = useState(valueObj)

   return (
      <StyledDropdown
         leftSideLabel={'Difficulty Level'}
         data={levels}
         value={value}
         setValue={setValue}
         onChange={onChange}
         {...props}
      />
   )
}

export default SelectLevelField

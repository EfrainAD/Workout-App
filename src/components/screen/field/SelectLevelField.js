import { Dropdown } from 'react-native-element-dropdown'
import { Text } from 'react-native'
import { useState } from 'react'

// style={{
//    color: theme.colors.text.neutral,
//    fontSize: 18,
//    fontWeight: '600',
//    paddingBottom: 0,
//    marginBottom: 0,
// }}
// placeholderTextColor={theme.colors.text.placeholder}

const SelectLevelField = ({ value, onChange, ...props }) => {
   const levels = ['Beginner', 'Intermediate', 'Advanced']
   const [isFocus, setIsFocus] = useState(false)

   return (
      <Dropdown
         data={levels}
         placeholder={`Difficulty Level: ${value}`}
         value={value}
         onFocus={() => setIsFocus(true)}
         onBlur={() => setIsFocus(false)}
         onChange={(level) => {
            onChange(level)
            setIsFocus(false)
         }}
         renderItem={(level) => <Text>{level}</Text>}
         {...props}
      />
   )
}

export default SelectLevelField

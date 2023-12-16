import { Dropdown } from 'react-native-element-dropdown'
import { Text } from 'react-native'
import { useState } from 'react'
import { theme } from './../../../infrastructure/theme'

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
   const valueObj = levels.find((level) => level.value === defaultValue)
   if (!valueObj)
      throw new Error(
         "The default value that was passed in the dropdown prop, doesn't match any of the  available optons",
      )

   const [value, setValue] = useState(valueObj)
   const [isFocus, setIsFocus] = useState(false)

   return (
      <Dropdown
         labelField="label"
         valueField="value"
         data={levels}
         renderLeftIcon={() => {
            return (
               <Text
                  style={{
                     color: theme.colors.text.neutral,
                     fontSize: 18,
                     fontWeight: '600',
                  }}
               >
                  Difficulty Level
               </Text>
            )
         }}
         selectedTextStyle={{
            color: theme.colors.text.neutral,
            fontSize: 16,
            textAlign: 'right',
            display: isFocus ? 'none' : 'flex',
         }}
         activeColor="none"
         style={{
            height: 43.5,
            backgroundColor: theme.colors.background.neutral[2],
            margin: 5,
            marginLeft: 8,
            borderWidth: 1,
            borderBottomWidth: isFocus ? 0 : 1,
            borderColor: theme.colors.borders.neutral,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            borderBottomRightRadius: isFocus ? 0 : 20,
            borderBottomLeftRadius: isFocus ? 0 : 20,
            paddingTop: 5,
            paddingRight: 10,
            paddingBottom: 5,
            paddingLeft: 20,
         }}
         containerStyle={{
            backgroundColor: theme.colors.background.neutral[2],
            borderColor: theme.colors.borders.neutral,
            borderWidth: 1,
            borderRadius: 20,
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
            padding: 5,
            marginTop: -2,
         }}
         itemContainerStyle={{
            padding: 10,
            margin: 0,
         }}
         itemTextStyle={{
            color: theme.colors.text.dropdown.notSelected,
            fontSize: 18,
            fontWeight: '600',
            padding: 0,
            margin: 0,
         }}
         iconStyle={{
            height: 33,
            transform: isFocus
               ? [{ rotate: '180deg' }]
               : [{ rotate: '270deg' }],
         }}
         iconColor={theme.colors.icon.dropdown.arrowIcon}
         placeholder={`Difficulty Level: ${value.label}`}
         value={value}
         onFocus={() => setIsFocus(true)}
         onBlur={() => setIsFocus(false)}
         onChange={(level) => {
            setValue(level)
            onChange(level.value)
            setIsFocus(false)
         }}
         renderItem={(level, isSelected) => {
            return (
               <Text
                  style={{
                     color: isSelected
                        ? theme.colors.text.neutral
                        : theme.colors.text.dropdown.notSelected,
                     fontSize: 18,
                     fontWeight: '600',
                  }}
               >
                  {level.label}
               </Text>
            )
         }}
         {...props}
      />
   )
}

export default SelectLevelField

import { Dropdown } from 'react-native-element-dropdown'
import { Text } from 'react-native'
import { useState } from 'react'
import { theme } from './../../../infrastructure/theme'
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
         // backgroundColor={}
         placeholderStyle={{
            color: theme.colors.text.placeholder,
            fontSize: 18,
            fontWeight: '600',
         }}
         selectedTextStyle={{
            color: 'blue',
            fontSize: 24,
            backgroundColor: 'black',
            textDecorationLine: 'underline',
         }}
         style={{
            height: 31.5,
         }}
         containerStyle={{
            backgroundColor: theme.colors.background.neutral[2],
            borderWidth: 4,
            borderColor: 'purple',
            padding: 0,
            margin: 0,
         }}
         itemContainerStyle={{
            // borderWidth: 1,
            // borderColor: 'blue',
            // padding: 10,
            // margin: 10,
            padding: 0,
            margin: 0,
         }}
         itemTextStyle={{
            color: theme.colors.text.neutral,
            fontSize: 18,
            fontWeight: '600',
            // borderWidth: 10,
            // borderColor: 'black',
            padding: 0,
            margin: 0,
            backgroundColor: 'green',
         }}
         iconStyle={isFocus ? null : { transform: [{ rotate: '270deg' }] }}
         // backgroundColor string
         placeholder={`Difficulty Level: ${value}`}
         value={value}
         onFocus={() => setIsFocus(true)}
         onBlur={() => setIsFocus(false)}
         onChange={(level) => {
            onChange(level)
            setIsFocus(false)
         }}
         renderItem={(level) => (
            <Text
               style={{
                  color: theme.colors.text.neutral,
                  fontSize: 18,
                  fontWeight: '600',
               }}
            >
               {level}
            </Text>
         )}
         {...props}
      />
   )
}

export default SelectLevelField

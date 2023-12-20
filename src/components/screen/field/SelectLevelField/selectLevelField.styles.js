import styled from 'styled-components/native'
import { Dropdown } from 'react-native-element-dropdown'
import { theme } from '../../../../infrastructure/theme'
import { useState } from 'react'

// Styled Components
const StyledText = styled.Text`
   color: ${({ theme }) => theme.colors.text.neutral};
   font-size: 18px;
   font-weight: 600;
`

const ItemText = styled.Text`
   color: ${({ isSelected }) =>
      isSelected
         ? theme.colors.text.neutral
         : theme.colors.text.dropdown.notSelected};
   font-size: 18px;
   font-weight: 600;
`

const StyledDropdownWrapper = styled(Dropdown)`
   height: 43.5px;
   background-color: ${(props) => props.theme.colors.background.neutral[2]};
   margin: 5px;
   margin-left: 8px;
   border-width: 1px;
   border-color: ${(props) => props.theme.colors.borders.neutral};
   border-top-left-radius: 20px;
   border-top-right-radius: 20px;
   padding-top: 5px;
   padding-right: 10px;
   padding-bottom: 5px;
   padding-left: 20px;
   border-bottom-left-radius: ${(props) => (props.isFocus ? '0' : '20px')};
   border-bottom-right-radius: ${(props) => (props.isFocus ? '0' : '20px')};
   border-bottom-width: ${(props) => (props.isFocus ? '0' : '1px')};
`
// Styled Object for the <Dropdown> props
const selectedTextStyle = {
   color: theme.colors.text.neutral,
   fontSize: 16,
   textAlign: 'right',
}
const containerStyle = {
   backgroundColor: theme.colors.background.neutral[2],
   borderColor: theme.colors.borders.neutral,
   borderWidth: 1,
   borderRadius: 20,
   borderTopLeftRadius: 0,
   borderTopRightRadius: 0,
   padding: 5,
   marginTop: -2,
}
const itemContainerStyle = {
   padding: 10,
   margin: 0,
}
const itemTextStyle = {
   color: theme.colors.text.dropdown.notSelected,
   fontSize: 18,
   fontWeight: '600',
   padding: 0,
   margin: 0,
}
const iconStyle = {
   height: 33,
}

// MAIN
export const StyledDropdown = ({
   value,
   setValue,
   data,
   leftSideLabel,
   onChange,
}) => {
   const [isFocus, setIsFocus] = useState(false)
   const handleOnFocus = () => setIsFocus(true)
   const handleOnBlur = () => setIsFocus(false)
   const handleOnChange = (level) => {
      setValue(level)
      onChange(level.value)
      setIsFocus(false)
   }
   return (
      <StyledDropdownWrapper
         data={data}
         value={value}
         theme={theme}
         isFocus={isFocus}
         onFocus={handleOnFocus}
         onBlur={handleOnBlur}
         labelField="label"
         valueField="value"
         activeColor="none"
         renderLeftIcon={() => {
            return <StyledText theme={theme}>{leftSideLabel}</StyledText>
         }}
         selectedTextStyle={{
            ...selectedTextStyle,
            display: isFocus ? 'none' : 'flex',
         }}
         // The part that drops down when clicked
         containerStyle={containerStyle}
         itemContainerStyle={itemContainerStyle}
         itemTextStyle={itemTextStyle}
         iconStyle={{
            ...iconStyle,
            transform: isFocus
               ? [{ rotate: '180deg' }]
               : [{ rotate: '270deg' }],
         }}
         iconColor={theme.colors.icon.dropdown.arrowIcon}
         onChange={handleOnChange}
         renderItem={(level, isSelected) => (
            <ItemText isSelected={isSelected}>{level.label}</ItemText>
         )}
      />
   )
}

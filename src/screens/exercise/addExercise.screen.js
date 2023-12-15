import { Text, View, TextInput, Button, ScrollView } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import { useEffect, useState } from 'react'
import { theme } from '../../infrastructure/theme'
import { SafeArea } from '../../components/utilities/safeArea.component'
import {
   addExercise,
   createExerciseTable,
   dropExerciseTable,
   getExercises,
} from '../../services/api/exersice'
import {
   CenteredView,
   RowView,
   StyledDropdown,
   StyledView,
} from '../../infrastructure/styledComponents/styledComonents'
import Header from '../../components/section/Header'
import SelectLevelField from '../../components/screen/field/SelectLevelField'

const AddExercise = () => {
   const [lists, setLists] = useState([])
   const {
      control,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm({
      defaultValues: {
         name: '',
         level: '',
         description: '',
         sets_goal: null, // int
         reps_goal: '',
         duration_goal: '', // interval - format DD:HH:MM:SS
         archive: false,
      },
   })
   const onSubmit = (data) => {
      addExercise(data, setLists)
      reset()
   }

   useEffect(() => {
      createExerciseTable()
   }, [])
   useEffect(() => {
      getExercises(setLists)
   }, [])

   return (
      <SafeArea>
         <View
            style={{
               flex: 1,
               backgroundColor: theme.colors.background.neutral[0],
            }}
         >
            <Header title="Add Exercise!" />
            <ScrollView>
               {/* <CenteredView> */}
               {/* <View> */}
               {/* DISPLAY DATA */}
               <ScrollView horizontal>
                  <RowView>
                     {lists.map((list, idx) => (
                        <Text key={idx} style={{ color: 'white' }}>
                           Name: {list.name} {'\n'}
                           Level: {list.level} {'\n'}
                           Description: {list.description} {'\n'}
                           Sets Goal: {list.sets_goal} {'\n'}
                           Reps Goal: {list.reps_goal} {'\n'}
                           Duration Goal: {list.duration_goal} {'\n'}
                           Archive: {list.archive ? 'Yes' : 'No'} {'\n'}
                        </Text>
                     ))}
                  </RowView>
               </ScrollView>

               {/* FORM */}
               {/*  Name */}
               <StyledView>
                  <Controller
                     control={control}
                     rules={{
                        required: true,
                     }}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              color: theme.colors.text.neutral,
                              fontSize: 18,
                              fontWeight: '600',
                              paddingBottom: 0,
                              marginBottom: 0,
                           }}
                           placeholder="Name"
                           placeholderTextColor={theme.colors.text.placeholder}
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="name"
                  />
               </StyledView>
               {errors.name && <Text>This is required.</Text>}

               {/* Level */}
               <StyledDropdown>
                  <Controller
                     control={control}
                     rules={{
                        maxLength: 100,
                     }}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <SelectLevelField onChange={onChange} value={value} />
                     )}
                     name="level"
                  />
               </StyledDropdown>

               {/* Sets Goal */}
               <StyledView>
                  <Controller
                     control={control}
                     rules={{
                        required: true,
                        pattern: /^[0-9]*$/,
                     }}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              color: theme.colors.text.neutral,
                              fontSize: 18,
                              fontWeight: '600',
                              paddingBottom: 0,
                              marginBottom: 0,
                           }}
                           placeholder="Sets Goal"
                           placeholderTextColor={theme.colors.text.placeholder}
                           keyboardType="numeric"
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="sets_goal"
                  />
               </StyledView>
               {errors.sets_goal && (
                  <Text>Only numeric input is allowed for Sets Goal.</Text>
               )}

               {/* Reps Goal */}
               <StyledView>
                  <Controller
                     control={control}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              color: theme.colors.text.neutral,
                              fontSize: 18,
                              fontWeight: '600',
                              paddingBottom: 0,
                              marginBottom: 0,
                           }}
                           placeholder="Reps Goal"
                           placeholderTextColor={theme.colors.text.placeholder}
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="reps_goal"
                  />
               </StyledView>

               {/* Duration Goal  */}
               <StyledView>
                  <Controller
                     control={control}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              color: theme.colors.text.neutral,
                              fontSize: 18,
                              fontWeight: '600',
                              paddingBottom: 0,
                              marginBottom: 0,
                           }}
                           placeholder="Duration Goal (DD:HH:MM:SS)"
                           placeholderTextColor={theme.colors.text.placeholder}
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="duration_goal"
                  />
               </StyledView>

               {/* Description */}
               <StyledView>
                  <Controller
                     control={control}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              color: theme.colors.text.neutral,
                              fontSize: 18,
                              fontWeight: '600',
                              paddingBottom: 0,
                              marginBottom: 0,
                           }}
                           placeholder="Description"
                           placeholderTextColor={theme.colors.text.placeholder}
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="description"
                  />
               </StyledView>

               <Button title="Submit" onPress={handleSubmit(onSubmit)} />
               {/* </View> */}

               <Button
                  title="DROP DB TABLE"
                  onPress={() => {
                     dropExerciseTable()
                     setLists([])
                  }}
               />
               {/* </CenteredView> */}
            </ScrollView>
         </View>
      </SafeArea>
   )
}

export default AddExercise

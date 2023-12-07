import { Text, View, TextInput, Button, Alert, ScrollView } from 'react-native'
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
import { CenteredView } from '../../infrastructure/styledComponents/styledComonents'

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
         <ScrollView>
            <CenteredView>
               <View style={{ padding: 30 }}>
                  <Text style={{ fontSize: theme.fontSizes.h2 }}>
                     Workouts!
                  </Text>
               </View>
               <View>
                  {/* DISPLAY DATA */}
                  {lists.map((list, idx) => (
                     <Text key={idx}>
                        Name: {list.name} {'\n'}
                        Level: {list.level} {'\n'}
                        Description: {list.description} {'\n'}
                        Sets Goal: {list.sets_goal} {'\n'}
                        Reps Goal: {list.reps_goal} {'\n'}
                        Duration Goal: {list.duration_goal} {'\n'}
                        Archive: {list.archive ? 'Yes' : 'No'} {'\n'}
                     </Text>
                  ))}

                  {/* FORM */}

                  {/*  Name */}
                  <Controller
                     control={control}
                     rules={{
                        required: true,
                     }}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              fontSize: parseInt(
                                 theme.fontSizes.body.slice(0, -2)
                              ),
                           }}
                           placeholder="Name"
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="name"
                  />
                  {errors.name && <Text>This is required.</Text>}

                  {/* Level */}
                  <Controller
                     control={control}
                     rules={{
                        maxLength: 100,
                     }}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              fontSize: parseInt(
                                 theme.fontSizes.body.slice(0, -2)
                              ),
                           }}
                           placeholder="Level"
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="level"
                  />

                  {/* Sets Goal */}
                  <Controller
                     control={control}
                     rules={{
                        required: true,
                        pattern: /^[0-9]*$/,
                     }}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              fontSize: parseInt(
                                 theme.fontSizes.body.slice(0, -2)
                              ),
                           }}
                           placeholder="Sets Goal"
                           keyboardType="numeric"
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="sets_goal"
                  />
                  {errors.sets_goal && (
                     <Text>Only numeric input is allowed for Sets Goal.</Text>
                  )}

                  {/* Reps Goal */}
                  <Controller
                     control={control}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              fontSize: parseInt(
                                 theme.fontSizes.body.slice(0, -2)
                              ),
                           }}
                           placeholder="Reps Goal"
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="reps_goal"
                  />

                  {/* Duration Goal  */}
                  <Controller
                     control={control}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              fontSize: parseInt(
                                 theme.fontSizes.body.slice(0, -2)
                              ),
                           }}
                           placeholder="Duration Goal (DD:HH:MM:SS)"
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="duration_goal"
                  />

                  {/* Description */}
                  <Controller
                     control={control}
                     render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                           style={{
                              fontSize: parseInt(
                                 theme.fontSizes.body.slice(0, -2)
                              ),
                           }}
                           placeholder="Description"
                           onBlur={onBlur}
                           onChangeText={onChange}
                           value={value}
                        />
                     )}
                     name="description"
                  />

                  <Button title="Submit" onPress={handleSubmit(onSubmit)} />
               </View>

               <Button
                  title="DROP DB TABLE"
                  onPress={() => {
                     dropExerciseTable()
                     setLists([])
                  }}
               />
            </CenteredView>
         </ScrollView>
      </SafeArea>
   )
}

export default AddExercise

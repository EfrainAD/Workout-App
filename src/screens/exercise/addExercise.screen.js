import { Text, View, TextInput, Button, Alert } from 'react-native'
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

const AddExercise = () => {
   const [lists, setLists] = useState()
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
      <SafeArea style={{ flex: 1, alignItems: 'center' }}>
         <View style={{ padding: 30 }}>
            <Text style={{ fontSize: theme.fontSizes.h2 }}>Workouts!</Text>
         </View>
         <View>
            {lists &&
               lists.map((list, idx) => (
                  <Text key={idx}>
                     {list.name} {list.level} {list.description}
                  </Text>
               ))}

            <Controller
               control={control}
               rules={{
                  required: true,
               }}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     style={{ fontSize: '60px' }}
                     placeholder="Name"
                     onBlur={onBlur}
                     onChangeText={onChange}
                     value={value}
                  />
               )}
               name="name"
            />
            {errors.name && <Text>This is required.</Text>}

            <Controller
               control={control}
               rules={{
                  maxLength: 100,
               }}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     style={{ fontSize: '60px' }}
                     placeholder="Level"
                     onBlur={onBlur}
                     onChangeText={onChange}
                     value={value}
                  />
               )}
               name="level"
            />

            <Controller
               control={control}
               // rules={{
               //    maxLength: 100,
               // }}
               render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                     style={{ fontSize: '60px' }}
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
               setLists(null)
            }}
         />
      </SafeArea>
   )
}

export default AddExercise

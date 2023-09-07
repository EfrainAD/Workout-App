import db from './database' // Import the database instance

export function createWorkoutTemplateTable() {
   db.transaction(
      (tx) => {
         tx.executeSql(
            'create table if not exists Workout_Template (id integer primary key not null, name text, level text, description text);',
         )
      },
      (error) => {
         console.log(error)
      },
   )
}

export function dropWorkoutTemplateTable() {
   db.transaction(
      (tx) => {
         tx.executeSql('drop table Workout_Template;')
      },
      (error) => {
         console.log(error)
      },
      () => createWorkoutTemplateTable(),
   )
}

export function addWorkout(data, setLists) {
   db.transaction(
      (tx) => {
         const { name, level, description } = data

         tx.executeSql(
            'insert into Workout_Template (name, level, description) values (?, ?, ?)',
            [name, level, description],
         )
         tx.executeSql('select * from Workout_Template', [], (_, { rows }) => {
            const allRows = rows._array
            console.log(allRows)
            setLists(allRows)
         })
      },
      (error) => {
         console.log(error)
      },
   )
}

export const getWorkouts = (setWorkouts, setErrors) => {
   db.transaction(
      (tx) => {
         tx.executeSql('select * from Workout_Template', [], (_, { rows }) => {
            const allRows = rows._array
            setWorkouts(allRows)
         })
      },
      (error) => {
         if (setErrors) {
            setErrors(error)
         }
         console.log(error)
      },
   )
}

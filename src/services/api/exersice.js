import db from './database' // Import the database instance

export function createExerciseTable() {
   db.transaction(
      (tx) => {
         tx.executeSql(
            'CREATE TABLE IF NOT EXISTS Exercise (id INTEGER PRIMARY KEY NOT NULL, name TEXT, level TEXT, description TEXT, sets_goal INTEGER, reps_goal TEXT, duration_goal TEXT, archive INTEGER DEFAULT 0);'
         )
      },
      (error) => {
         console.log(error)
      }
   )
}

export function dropExerciseTable() {
   db.transaction(
      (tx) => {
         tx.executeSql('drop table Exercise;')
      },
      (error) => {
         console.log(error)
      },
      () => createExerciseTable()
   )
}

export function addExercise(data, setLists) {
   db.transaction(
      (tx) => {
         const {
            name,
            level,
            description,
            sets_goal,
            reps_goal,
            duration_goal,
            archive,
         } = data

         tx.executeSql(
            'INSERT INTO Exercise (name, level, description, sets_goal, reps_goal, duration_goal, archive) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [
               name,
               level,
               description,
               sets_goal,
               reps_goal,
               duration_goal,
               archive ? 1 : 0,
            ]
         )
         tx.executeSql('select * from Exercise', [], (_, { rows }) => {
            const allRows = rows._array
            console.log(allRows)
            setLists(allRows)
         })
      },
      (error) => {
         console.log(error)
      }
   )
}

export const getExercises = (setExercises, setErrors) => {
   db.transaction(
      (tx) => {
         tx.executeSql('select * from Exercise', [], (_, { rows }) => {
            const allRows = rows._array
            setExercises(allRows)
         })
      },
      (error) => {
         if (setErrors) {
            setErrors(error)
         }
         console.log(error)
      }
   )
}

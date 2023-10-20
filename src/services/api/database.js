import * as SQLite from 'expo-sqlite'

export function openDatabase() {
   if (Platform.OS === 'web') {
      return {
         transaction: () => {
            return {
               executeSql: () => {},
            }
         },
      }
   }

   const db = SQLite.openDatabase('workoutApp')
   return db
}

export default openDatabase() // Export the db instance

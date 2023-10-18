# Entity Relationship Diagram For Verson One

```mermaid
	erDiagram
		USER ||--o{ EXERCISE : creates
		USER ||--o{ CHALLENGE : create
		USER ||--o{ GOAL : create
		USER ||--o| EQUIPMENT : create
		USER ||--o| FITNESS_GOAL : create
		USER ||--o| SETTINGS : create
		USER ||--o{ WORKOUT : creates
		USER ||--o{ WORKOUT_PROGRAM : creates
		USER {
			int id PK
			string username(Unique)
			string password
			string avatarURL
		}
		SETTINGS {
			int id PK
			int user FK
			boolean darkmode
		}
		EQUIPMENT {
			int id PK
			int user FK
			string name
		}
		WORKOUT_PROGRAM }o--o{ WORKOUT : create
		WORKOUT_PROGRAM {
			int id PK
			int user FK
			string name
			string description
		}
		WORKOUT }o--o{ EXERCISE : creates
		WORKOUT ||--o{ WORKOUT_LOG : creates
		WORKOUT ||--|| WORKOUT_SCHEDULE : creates
		WORKOUT {
			int id PK
			int user FK
			string name
			boolean archive
			string level
			interval duration
		}
		EXERCISE_TEMPLATE ||--o{ EXERCISE : create
		EXERCISE_TEMPLATE }o--o{ EQUIPMENT : create
		EXERCISE_TEMPLATE {
			int id PK
			int user FK
			string name
			string level
			string description
			int equipment FK
		}
		EXERCISE ||--o{ EXERCISE_LOG : create
		EXERCISE {
			int id PK
			int user FK
			int exercise_template FK
			int sets_goal
			string reps_goal
			interval duration_goal
			boolean archive
		}
			EXERCISE_LOG {
			int id PK
			int user FK
			int exercise FK
			string weights_unit
			int weight
			int sets
			interval duration
			date date
		}
		WORKOUT_LOG {
			int id PK
			interval duration
			date date
		}
		WORKOUT_SCHEDULE ||--o{ CUSTOM_DATE : create
		WORKOUT_SCHEDULE {
			int id PK
			int owner FK
			boolean custom
			boolean sunday
			boolean monday
			boolean tuesday
			boolean wednesday
			boolean thursday
			boolean friday
			boolean saturday
		}
		CUSTOM_DATE{
			int id PK
			int owner FK
			int workout_schedule FK
			date date
		}
		FITNESS_GOAL {
			int id PK
			int user FK
			string name
			string description
		}
		GOAL {
			int id PK
			int user FK
			string name
			string description
			string target
			interval duration
			date started_date
			double weight
			string weight_unit
			string frequency
			int reps
			int repsPerSet
		}
		CHALLENGE {
			int id PK
			int user FK
			string name
			string description
			int daily_streak
			int workout_streak
			interval duration
			date started_date
			double weight
			string weight_unit
			string frequency
			int reps
			int repsPerSet
		}
```

# NOTES

## Understanding the ERD

-  This is not a FK relationship ERD, it's overview on how the data relate to each other.
-  create - It only add to the table if it needs it.
-  Any many to many relationship are a joint table that just not put there to save space

## About Data Types

-  interval
   -  is not SQLite support
   -  will be a string type
   -  format DD:HH:MM:SS
-  date
   -  is not SQLite support
   -  will be a string type,
   -  function that SQLite have are
      -  https://www.sqlite.org/lang_datefunc.html
-  boolean
   -  is not SQLite support
   -  will be a int type,
   -  0 for false, 1 for true
   -  SQLite recognizes the keywords "TRUE" and "FALSE",

---

# Convertions

-  Weight
   -  all Weight are recorded in lb, and converted on frontend if need to be

## Nots on a Table

-  FITNESS_GOAL: This just name/heading discription/sub_heading that can go up on a flash screen to remind the user of whatever their over all goal is for exercising
-  SETTINGS will never be moved to a cloud for a vertion 2

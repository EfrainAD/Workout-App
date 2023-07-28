# Entity Relationship Diagram For Verson One

```mermaid
	erDiagram
		USER ||--o{ WORKOUT : creates
		USER ||--o{ CHALLENGE : create
		USER ||--o| FITNESS_GOAL : create
		USER ||--o| EQUIPMENT : create
		USER ||--o| SETTINGS : create
		USER ||--o{ WORKOUT_SESSION : creates
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
		WORKOUT_PROGRAM }o--o{ WORKOUT_SESSION : create
		WORKOUT_PROGRAM {
			int id PK
			int user FK
			string name
			string description
		}
		WORKOUT_SESSION }o--o{ WORKOUT : creates
		WORKOUT_SESSION ||--o{ SESSION_LOG : creates
		WORKOUT_SESSION ||--|| SCHEDULE : creates
		WORKOUT_SESSION {
			int id PK
			int user FK
			string name
			boolean archive
			string level
			interval duration
		}
		WORKOUT_Template ||--o{ WORKOUT : create
		WORKOUT_Template {
			int id PK
			int user FK
			string name
			string level
			string description
			int equipment FK
		}
		WORKOUT ||--o{ WORKOUT_LOG : create
		WORKOUT {
			int id PK
			int user FK
			int workout_template FK
			int sets_goal
			string reps_goal
			interval duration_goal
			boolean archive
		}
			WORKOUT_LOG {
			int id PK
			int user FK
			int workout FK
			string weights_unit
			int weight
			int sets
			int reps
			string duration_unit
			double duration
			date date
		}
		SESSION_LOG {
			int id PK
			interval duration
			date date
		}
		SCHEDULE {
			int id PK
			int owner FK
			boolean sunday
			boolean monday
			boolean tuesday
			boolean wednesday
			boolean thursday
			boolean friday
			boolean saturday
		}
		FITNESS_GOAL {
			int id PK
			int user FK
			string name
			string description
		}
		CHALLENGE {
			int id PK
			int user FK
			string name
			string description
		}
		EQUIPMENT {
			int id PK
			int user FK
			string equipment
		}
```

# NOTES

-  This is not a FK relationship ERD, it's overview on how the data relate to each other.
-  create - It only add to the table if it needs it.
-  Any many to many relationship are a joint table that just not put there to save space
-  SETTINGS will never be moved to a cloud for a vertion 2
-  boolean is not supported by expo-SQLite so bool will actoully be an int.

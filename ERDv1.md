# Entity Relationship Diagram For Verson One

```mermaid
erDiagram
    USER ||--o{ WORKOUT : creates
    USER ||--o{ CHALLENGE : create
    USER ||--o| FITNESS_GOAL : create
    USER ||--o{ WORKOUT_SESSION : creates
    USER ||--o{ WORKOUT_PROGRAM : creates
    USER {
        int id PK
        string username(Unique)
        string password
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
    WORKOUT_SESSION }o--o{ WORKOUT : creates
    WORKOUT_SESSION {
        int id PK
        int user FK
        int workout_program FK
        string name
        boolean archive
    }
    WORKOUT_SESSION ||--|| SCHEDULE : creates
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
    WORKOUT ||--o{ WORKOUT_LOG : create
    WORKOUT {
        int id PK
        int user FK
        string name
        string description
        int sets_goal
        string reps_goal
        string duration_goal
        boolean archive
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
	 WORKOUT_PROGRAM }o--o{ WORKOUT_SESSION : create
    WORKOUT_PROGRAM {
        int id PK
        int user FK
        string name
        string description
    }
```

# NOTES

-  This is not a FK relationship ERD, it's overview on how the data relate to each other.
   create - It only add to the table if it needs it.

## WORKOUT > boolean archive

Users may want to stop seeing it on their plan but don't want to lose what they have done in the past.

## PLAN > boolean public and tracker_public

This is so the user can make their plan public to show people what it is or they can copy it, but they don't want their personal history shared. Some people may want that open as an accountability.

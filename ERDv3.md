# Entity Relationship Diagram For Verson One

```mermaid
erDiagram
    ACCOUNT ||--o{ PLAN : creates
    ACCOUNT ||--o{ WORKOUT : creates
    ACCOUNT ||--o{ GOAL : "can create"
    ACCOUNT ||--o{ CHALLENGE : "can create"
    ACCOUNT {
		int id PK
		string username(Unique)
		string password
	}
	TRACKER |o--|| WORKOUT : has
	TRACKER {
		int id PK
		int account FK
		int workout FK
		int plan FK
		string weights_unit
		int weight
		int sets
		int reps
		string duration_unit
		double duration
		date date
	}
    PLAN }o--o{ WORKOUT : contains
    PLAN {
		int id PK
		int account FK
		string name
		boolean archive
	}
	PLAN ||--|{ PLAN_SCHEDULE : has
    PLAN_SCHEDULE {
		int id PK
		int plan FK
		boolean sunday
		boolean monday
		boolean tuesday
		boolean wednesday
		boolean thursday
		boolean friday
		boolean saturday
	}
    WORKOUT {
		int id PK
		int account FK
		int plan FK
		int tracker FK
		string name
		string description
		int sets_goal
		string reps_goal
		string duration_goal
		boolean archive
    }
    GOAL {
		int id PK
		int account FK
		string name
		string description
	}
    CHALLENGE {
		int id PK
		int account FK
		string name
		string description
	}

```

# NOTES

## WORKOUT > boolean archive

Users may want to stop seeing it on their plan but don't want to lose what they have done in the past.

## PLAN > boolean public and tracker_public

This is so the user can make their plan public to show people what it is or they can copy it, but they don't want their personal history shared. Some people may want that open as an accountability.

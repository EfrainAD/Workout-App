# Entity Relationship Diagram

```mermaid
%%{
	init: {
		'theme': 'base',
		'themeVariables': {
			'primaryColor': '#BBB6A5',
			'primaryTextColor': '#2A2F33',
			'primaryBorderColor': '#8C9491',
			'lineColor': '#8C8C9C',
			'secondaryColor': '#8C9491',
			'tertiaryColor': '#fff'
		}
	}
}%%
erDiagram
    ACCOUNT ||--o{ PLAN : creates
    ACCOUNT }|--o{ WORKOUT : "creates and contains"
    ACCOUNT {
		int id PK
		string username(Unique)
		string password
		string oauth FK
		string goal
		array workouts FK
		array plans FK
		array trackers FK
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
		boolean public
		boolean tracker_public
		boolean archive
		array workout FK
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

```

# NOTES

## WORKOUT > boolean archive

Users may want to stop seeing it on their plan but don't want to lose what they have done in the past.

## PLAN > boolean public and tracker_public

This is so the user can make their plan public to show people what it is or they can copy it, but they don't want their personal history shared. Some people may want that open as an accountability.

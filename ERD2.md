```mermaid
erDiagram
    USER ||--|{ TRACKER : has
    USER {
        string password
        string username
        array tracker
    }
    TRACKER }|--|{ PUZZLE : has
    TRACKER }|--|{ COLLECTION : has
    TRACKER{
        array puzzles
        array collections
        string problem
        string answer
        date dueDate
        number jumper
    }
    PUZZLE }|--|{ COLLECTION : has
    PUZZLE }|--|{ USER : has
    PUZZLE {
        string user
        array collections
        boolean public
        string problem
        string answer
    }
    COLLECTION {
        string user
        boolean public
        array puzzles
    }
```

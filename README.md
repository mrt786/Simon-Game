# Simon-Game

In this Simon game project, players interact with a game interface consisting of four distinct boxes labeled 1, 2, 3, and 4, along with a start button that initiates the game. The gameplay follows these key mechanics:

**Game Start:** 
    Upon pressing the start button, the game begins, and the player is taken to Level 1.

**Pattern Generation:** 
    At the start of each level, the game randomly selects one of the four boxes to flash by temporarily changing its background color to black. This adds to the pattern that the player must remember and follow.

**Pattern Recall:** 
    As the game progresses, each new level appends a new box flash to the existing pattern. For example, if Level 1 flashes box 3, Level 2 might flash boxes 3, then 1.

**Player Turn:** 
    After the game has displayed the pattern, it’s the player's turn to replicate the pattern by clicking on the boxes in the correct order. The player must remember the entire sequence from previous levels and include the new box flash for the current level.

**Level Advancement:** 
    If the player successfully replicates the pattern, they advance to the next level where a new box flash is added to the sequence.

**Game Over:** 
    If the player clicks the boxes in the wrong order, the game ends, and the player's score is displayed. The score corresponds to the highest level the player successfully completed.

**Example Gameplay**
    Level 1: Box 3 flashes.
    Level 2: Box 3 flashes, then Box 1 flashes.
    Level 3: Box 3 flashes, Box 1 flashes, then Box 4 flashes.

**Technologies Used**

**HTML:** 
    For structuring the game interface with four boxes and a start button.

**CSS:**
    For styling the boxes and button, including the flash effect by changing the background color.

**JavaScript:** 
    For handling the game logic, including random pattern generation, detecting user clicks, comparing user input to the generated pattern, and managing game state (level advancement and game over).
Features

**Dynamic Level Generation:**
    Each level adds complexity by appending a new flash to the sequence.
    
**Interactive User Experience:**
    Players must remember and replicate increasingly complex patterns.

**Scoring System:**
    The player's score is determined by the highest level they successfully completed.
    
**Visual Feedback:** 
    The flash effect provides clear visual cues for the pattern the player must follow.

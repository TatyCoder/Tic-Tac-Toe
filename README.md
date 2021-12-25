# Tic Tac Toe
This is the general approach I want to follow:

Basically, the Tic Tac Toe can be represented by three arrays that represent the rows, each one with three columns.
Each time when one of the players click on the board I want to modify the arrays to capture their choice. At this time I want to validate their choices and print the messages to match the rules of the game. When this is completed I want to update the user interface by using render().

The design pattern works like this: everytime the player interacts with the user interface there is an event listener that modifies the application state or data, and then the render function refresh the html. Only the render function can update the html. 

I'm going to create the html file to display the basic design of the Tic Tac Toe game.

## How to handle player's choice:
This game is going to have two buttons named "Player X" and "Player O". The first player that chooses a button initiates the game, and buttons get disable at this point. 

## Set the validation of the player's choice:
Once the symbol selection has been made on a cell it can't be changed.

## Rules of the game:
A player wins once three consecutive same symbols are fill in a row, column or diagonally. I should create a function that keeps track of each player's mark during the game to validate the winning condition.
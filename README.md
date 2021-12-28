# Tic Tac Toe
This is the general approach I want to follow:

The Tic Tac Toe can be designed with three arrays that represent the rows of the game, as a grid, each array has three elements which represent the columns.
Each time one of the players click on the board I want to modify the arrays to capture their choice. At this time I want to validate their choices and print messages to match the rules or state of the game. When this is completed I use a render function to update the user interface. The approach I'm taking is similar to the React framework which I used in the past, that uses state and the render function to update the html based on the state.

The design pattern works like this: everytime the player interacts with the user interface there is an event listener that modifies the application state or data, and then the render function refreshes the html. Only render() can update the html. 

I'm going to create the html file to display the basic design of the Tic Tac Toe game.

![alt](Sketch.jpg "Sketch")

## How to handle player's choice
This game is going to have two buttons named "Player chooses X" and "Player chooses O". The first player that chooses a button initiates the game, and the buttons get disable at this point. 

## Set the validation of the player's choice
Once the symbol selection has been made on a cell it can't be changed without restarting the game.

## Rules of the game
A player wins once three consecutive same symbols are filled in a row, column or diagonally. I should create a function that keeps track of each player's selection during the game to validate the winning condition.

## Tic Tac Toe game user story
- As a player, when I play Tic Tac Toe, I want to see a game board which has a 3x3 grid.
- As a player, I will follow the rules of the game.
- As a player, I want to be able to choose my symbol: ‘X’ or ‘O’.
- As a player, I want to be able to click on the chosen symbol and have the cell filled with this symbol. Once the symbol selection has been made on a cell it can't be changed.
- As players take turns, they want to be able to put their marks in empty squares.
- When the first player gets 3 marks in a row (up, down or diagonally) the winner is declared and the game is over.
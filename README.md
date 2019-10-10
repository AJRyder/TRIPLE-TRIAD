# TRIPLE-TRIAD

What is triple triad? 

A mini-game from Final Fantasy 8 that utilizes cards to play against one another. The card with the greater numbered side it is touching on a hand, "captures" the card and adds to their score/subtracts from the opponent score. 

Players are represented by blue, CPU is represented by red. 

When a card is placed against an opposing cards’ sides (top bottom left or right) the card with the greater value ‘flips’ the color 

The goal of the game is capture the opposing player’s card to accumulate points; the player with the most points when all 9 card spaces are filled is declared the winner

In this version, player "blue" goes first, then "player red". You can not place a card on the board unless it is your turn, but you can pull one from your drawn cards for the next round. 

THE GAMEBOARD: 

The game table is a 3 x 3 board (hence the name, triple triad) that will be built with containers. 

Each of the 9 containers can be passed a card from a hand and rendered unplayable (unable to have another card placed) by the player or CPU for the rest of the game


THE GAME Logic 

Player and CPU start with a score of 5 - representing the 5 cards in their hand

One player randomly goes first and can place a card down on the board. 

Cards should have each side representing their on screen numbers correctly

The card sides, when exposed, should run a checkNum function to determine if the side is greater or less than the other card 

If a card is placed down that is less than the opposing card side, it will not cause the card to flip to the other player (only on player turns with a greater value will a card flip)

When a card is flipped, the score for the winner goes up +1, and to the loser -1 
(one card flip should show a score like Player 6 CPU 4 


When a card is flipped, the card background will change to the winning side’s color (red for cpu, blue for player) and can be reflipped by the opposite colored cards if there are exposed sides left to exploit 


When all 9 containers have cards placed, the game checks player and cpu scores; whoever has a higher score wins. 


	
	








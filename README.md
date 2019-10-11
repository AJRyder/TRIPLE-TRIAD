# TRIPLE-TRIAD

# Technologies Used:

Javascript/Jquery 
HTML 
CSS 

PLAY ME HERE 
https://ajryder.github.io/TRIPLE-TRIAD/

# What is triple triad? 

A mini-game from Final Fantasy 8 that utilizes cards to play against one another on a gameboard. The card with the greater numbered side it is touching on a hand, "captures" the card and adds to their score/subtracts from the opponent score. 

Players are represented by blue, CPU is represented by red. 

When a card is placed against an opposing cards’ sides (top bottom left or right) the card with the greater value ‘flips’ the color 

The goal of the game is capture the opposing player’s card to accumulate points; the player with the most points when all 9 card spaces are filled is declared the winner

In this version, player "blue" goes first, then "player red". You can not place a card on the board unless it is your turn, but you can pull one from your drawn cards for the next round. 

# THE GAMEBOARD: 

The game table is a 3 x 3 board (hence the name, triple triad) that will be built with containers. 

Each of the 9 containers can be passed a card from a hand and rendered unplayable (unable to have another card placed) by the player or CPU for the rest of the game


# THE GAME Logic 

Player and CPU start with a score of 5 - representing the 5 cards in their hand

One player randomly goes first and can place a card down on the board. 

Cards should have each side representing their on screen numbers correctly

The card sides, when exposed, should run a checkNum function to determine if the side is greater or less than the other card 

If a card is placed down that is less than the opposing card side, it will not cause the card to flip to the other player (only on player turns with a greater value will a card flip)

When a card is flipped, the score for the winner goes up +1, and to the loser -1 
(one card flip should show a score like Player 6 CPU 4 


When a card is flipped, the card background will change to the winning side’s color (red for cpu, blue for player) and can be reflipped by the opposite colored cards if there are exposed sides left to exploit 


When all 9 containers have cards placed, the game checks player and cpu scores; whoever has a higher score wins. 

# BOARD Mechanics: 
A 3x3 grid of ‘containers’ with clear divisions that can be chosen, and populated with a card object  
When a card object populates a container, no other card can be filled in that space for the rest of the round
(stretch goal) Elemental types (fire, water, wind, bolt) can randomly be placed on containers to affect card values 


# CPU/Player 2 MECHANICS: 
1. CPU cards are not visible (perhaps just the back of the card) when dealt to the left

2. CPU should have cards randomly chosen from the array of objects ‘cards’ 

3. CPU should be able to place a card on the grid randomly (to start there won’t be a smart AI like the real mini-game that pursues/punishes weak sides by choice)


# PLAYER MECHANICS:  
1.Player cards are visible after being dealt to the right

2.Player should have cards randomly chosen from the array of objects ‘cards’ 

3. Player should be able to ‘click’ on one of the cards to choose it 
	3a. Player should be able to click on an available container to SET where the card goes
	3b. An additional click should then confirm and place the card down (removing it from    
	the hand) 



# THE CARD MECHANICS
---General ideas for ‘under the hood’--
Cards objects will be a class that holds properties representing: 
The card name 
The card’s left, right, top, and bottom sides 
The card’s elemental type (if any)  

The cards will be stored as individual objects within an array that can later be accessed by the random shuffle and draw functions in the game logic 

There are 110 total cards - for this project I’ll be working with much less cards (let’s say 20)
 
Each player has a hand containing 5 cards; for now… cards are drawn randomly with players having a high chance of getting rare cards

Each card has 4 side values (Top, Bottom, Left, and Right) 

Card sides range from increasing values 1-10. 1 being the lowest, 10 being the highest











CSS Requirements: 
Thankfully the art assets already exist for all 100/110 cards; finding a way to set each card to an art asset could be done with a for loop
The board graphics are also easily accessible and can be set as a background property inside the primary ‘ gamecontainer’
HTML/CSS SKELETON 







	
	








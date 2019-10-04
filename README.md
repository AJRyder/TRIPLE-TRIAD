# TRIPLE-TRIAD

What is triple triad? 

A mini-game from Final Fantasy 8 that utilizes cards to play against CPU players

Players are represented by blue, CPU is represented by red. When a card is placed against an opposing cards’ sides (top bottom left or right) the card with the greater value ‘flips’ the color 

The goal of the game is capture the opposing player’s card to accumulate points; the player with the most points when all 9 card spaces are filled is declared the winner

THE GAMEBOARD: 

The game table is a 3 x 3 board (hence the name, triple triad) that will be built with containers. 



Each of the 9 containers can be passed a card from a hand and rendered unplayable (unable to have another card placed) by the player or CPU for the rest of the game

Big goals: adding elemental types to the board randomly that will +1 or -1 values of cards when placed 





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





MVP Requirements: 
There should be 100 cards that are drawn to the player and CPU randomly

Game rules (bare minimum) 
Open (shows player and cpu cards) 
Sudden Death (when there is a tie, the two hands are randomized and re-dealt to the player and CPU for a new round) 
Scores should reset to default 5 & 5 values whenever this happens 

(stretch goal) elemental rule activates elements on the board ------------------->>>>>>







BOARD Mechanics: 
A 3x3 grid of ‘containers’ with clear divisions that can be chosen, and populated with a card object  
When a card object populates a container, no other card can be filled in that space for the rest of the round
(stretch goal) Elemental types (fire, water, wind, bolt) can randomly be placed on containers to affect card values 
Cards should visually be ‘dealt’ out to each hand (with the dealt hand sound fx!) 
Each cursor and click should produce a sound (final fantasy ping) 



CPU MECHANICS: 
1. CPU cards are not visible (perhaps just the back of the card) when dealt to the left

2. CPU should have cards randomly chosen from the array of objects ‘cards’ 

3. CPU should be able to place a card on the grid randomly (to start there won’t be a smart AI like the real mini-game that pursues/punishes weak sides by choice)


PLAYER MECHANICS:  
1.Player cards are visible after being dealt to the right

2.Player should have cards randomly chosen from the array of objects ‘cards’ 

3. Player should be able to ‘click’ on one of the cards to choose it 
	3a. Player should be able to click on an available container to SET where the card goes
	3b. An additional click should then confirm and place the card down (removing it from    
the hand) 
3c. Player should be able to undo(‘back out of’) the container choice and the chosen card with a ‘back/undo’ button/clicks or type of event listener


THE CARD MECHANICS
---General ideas for ‘under the hood’--
Cards objects will be a class that holds properties representing: 
The card name 
The card’s left, right, top, and bottom sides 
The card’s elemental type (if any)  

The cards will be stored as individual objects within an array that can later be accessed by the random shuffle and draw functions in the game logic 


There are 100 total cards - for this project I’ll be working with much less cards (let’s say 20)
Every 10 cards is in a rarity category (level 1 through level 10 rarity); the rarer the card the higher the side values are… but depending on the game rules, having lots of high number (or same number cards could be a detriment)
 
Each player has a hand containing 5 cards; for now… cards are drawn randomly with players having a high chance of getting rare cards

Each card has 4 side values (Top, Bottom, Left, and Right) 

Card sides range from increasing values 1-10, J, Q, K, A (A being the highest)
IN MY GAME: Card numbers will range from 1-14, (1-10 as true integers in JS/CSS/HTML, J = 11,Q = 12,K =13, A=14) 
Example Card: 


     A(ace) represents the top value
     7 represents the left value
     8 represents the bottom value
     2 represents the right value 
     Stars indicate card rarity (though my version will only rely      
     on special card borders to visually indicate this)









CSS Requirements: 
Thankfully the art assets already exist for all 100/110 cards; finding a way to set each card to an art asset could be done with a for loop
The board graphics are also easily accessible and can be set as a background property inside the primary ‘ gamecontainer’
HTML/CSS SKELETON 


UI Requirements: 
Player should be able to put their name and choose an avatar(icebox) 
Player should be able to navigate the game using key bindings 
Up to move cursor up 
Down to move cursor down 
Left to move cursor left
Right to move cursor right 
Delete/backspace to undo a choice 
Enter to make a choice 
Space Bar to mute/unmute sound fx
Q to quit the game (close the tab and reload to the github page) 
R to to reset the game match 


A rules button that allows the player to choose the rules to turn/off
Hover over on rules should give a brief description of the rule for new players 


JS Wireframe/control flow: 

// render ( )
//masterCardList
// gameBoard (array with 9 indexes containing ‘undefined’) 
// player and CPU empty hands (empty array)
// (optional) Allow player to enter their name and choose an avatar/sprite
		// (extra optional) Avatar/sprites get different types of cards vs purely random
		
// shuffleDeck( )
// dealDeck( ) to player and CPU hands
// choose which player goes first → startRounds ( )

// placeCards onto gameBoard containers that are ONLY ‘null’
	// when card is placed, remove it from the player/CPU hand 
// check for other cards in adjacent gameboard containers
	// if there is no card in an adjacent container 
		//trigger next turn
	// if there is a card in an adjacent container 
// compare adjacent cards for card side values
// if card wins the round, change card color BG to winning color 
			// player is blue, CPU is red 
// update score +1/-1 to winner/loser respectively
// trigger next turn
// if the card doesn’t win the round
		// DONT CHANGE VALUES 
// trigger next turn 
// When gameBoard has no more ‘null’ elements in the array
	// compare player and cpu scores 
	// higher score wins the round 
		// Player wins, generate gfx for “you win” 
		// Player loses, generate gfx for “you lose” 
	// updates playerLevel (level ranges from 1-10 + J, Q, K, A, S)
		// if playerLevel meets certain thresholds, rarer/better cards can be more  
   frequently drawn into player hand

	// game renders/resets, but keeps player levels







DATA STRUCTURES TO CONSIDER: 

// Objects to contain player hands and player game score
Player {hand: [ array to be populated with 5 cards], score: 5}
Computer {hand: [ array to be populated with 5 cards], score :5}

// Array of Objects to hold the card data list of created cards
	cardList = [{card 1 data, 
       card 2 data, …. 
       card 100 data
     }] 

// a Class to pass parameters for card data 

Class triadCard  {
Constructor (name, color, topNum, btmNum,lftNum, rgtNum) 
This.color: color
	this.name: name
	this.top: topNum
	this.bottom: btmNum
	this.left: lftNum
	this.right: rgtNum 
}

ChildClass { 
Name “Squall”, 
1,
2, 
A, 
4
}  

SecondChild { 
Name: “Grat”
7, 
4, 
1, 
1
}

Etc…              
THE GAME BOARD: 

 The game board as an array (of objects) 
	Const board = [ 1 , 2, 3, 
  4,  5, 6, 
  7,  8, 9 ]

How does the game start? 
// a function starts the game and builds the game board 

setUp ( ) { 
// should create the game board with proper containers from the array
// should shuffle deck from cardList
// should deal five cards into the player and cpu hand
// should randomly choose which player gets first turn











HOW DOES A TURN WORK IN THE GAME? 

// I should be able to splice a card into the board’s array index when ‘placed’

placeCard ( ) {
	// we want to place the card into a specific index of the array
	// use case: player chooses slot a
	board.splice(0, 1, Squall) 
	// should return board with updated array such as
	Board =   . .  [{Name: “Squall”, top: 1, bottom: 2, left: A, right: 4}, 2, 3, 
								                4, 5, 6, 
								                7, 8, 9]
	// if CPU chooses slot 4 on their turn

	board.splice(3, 0, Grat)
	// the new board should look like this… 
	Board = [{Name: “Squall”, top: 1, bottom: 2, left: A, right: 4}, b, c, 
	               {Name: “Grat”, top: 7, bottom: 4, left: 1, right: 1},     e, f, 
								        G, h, k]

	// if a board container is already filled
	// player and CPU should be unable to place another card in that container



HOW TO CHECK CARDS ARE ON THE BOARD?

checkCardsOnBoard ( ) { }
// Are there any cards on the board at all? 

// if yes skip to check compareOpenSides function

//Are there cards next to the card being played?
// If board container has a card “placed”…
// e.g. If board[1] has an object (a card from our cardList)

// check what cards are on adjacent containers on the board
	//e.g. when card is played onto board[1] are there cards in container 2 or 4?
//e.g when card is played onto board[5] are there cards in container 2, 4, 6, or 8?  
		//e.g when card is played onto board[f] are there cards in container 3, 5, or 9? 

// if there ARE cards in those containers… 

// run the compareOpenSides function..


HOW TO CHECK CARD SIDES IN PLAY?

compareOpenSides ( )
	//e.g. is board[1].card.right < board[2].card.left  
         is board[4].card.top > board[1].card.bottom

// if there are NO cards in those containers..
 if (array[i] === undefined || array.length == 0) { // array empty or does not exist } (blah blah)

// then… START NEXT TURN 	

	
	








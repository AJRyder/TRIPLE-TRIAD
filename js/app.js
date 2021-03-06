
// CARD OBJECT CLASS 
class TriadCard { 
    constructor(cardName, colorVal, topValue, bottomValue, leftValue, rightValue, cardImg){
        this.name = cardName;
        this.color = colorVal;          
        this.topVal = topValue; 
        this.bottomVal = bottomValue; 
        this.leftVal = leftValue;
        this.rightVal = rightValue; 
        this.image = cardImg;
    } 
}   


const A = 10

// LEVEL 1 MONSTER CARDS
// name, colorVal, top, bottom, left, right
const geezard = new TriadCard('Geezard', null, 1, 1, 5, 4, "./img/cards/001.png")
const funguar = new TriadCard('Funguar', null, 5, 1, 3, 1, "./img/cards/002.png")
const biteBug = new TriadCard('Bite Bug', null, 5, 3, 1, 3, "./img/cards/003.png")
const redBat = new TriadCard('Red bat', null, 6, 1, 2, 1, "./img/cards/004.png")
const blobra = new TriadCard('Blobra', null, 2, 1, 5, 3, "./img/cards/005.png")
const gayla = new TriadCard('Gayla', null, 2, 4, 4, 1, "./img/cards/006.png")
const gesper = new TriadCard('Gesper', null, 1, 4, 1, 5, "./img/cards/007.png")
const fasticalonF = new TriadCard('Fasticalon-F', null, 3, 2, 1, 5, "./img/cards/008.png")
const bloodSoul = new TriadCard('Blood Soul', null, 2, 6, 1, 1, "./img/cards/009.png")
const caterchi = new TriadCard('Caterchipillar', null, 4, 4, 3, 2, "./img/cards/010.png")
const cocka = new TriadCard('Cockatrice', null, 2, 2, 6, 1, "./img/cards/011.png")

//LEVEL 2 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const grat = new TriadCard('Grat', null, 7, 3, 1, 1, "./img/cards/012.png")
const buel = new TriadCard('Buel', null, 6, 2, 3, 2, "./img/cards/013.png")
const mesmer = new TriadCard('Mesmerize', null, 5, 3, 4, 3, "./img/cards/014.png")
const glaceye = new TriadCard('Glacial Eye', null, 6, 4, 3, 1, "./img/cards/015.png")
const belhel = new TriadCard('Belhelmel', null, 3, 5, 3, 4, "./img/cards/016.png")
const thrust = new TriadCard('Thrustaevis', null, 5, 2, 5, 3, "./img/cards/017.png")
const anacond = new TriadCard('Anacondaur', null, 5, 2, 5, 3, "./img/cards/018.png")
const creep = new TriadCard('Creeps', null, 5, 5, 2, 2, "./img/cards/019.png")
const grend = new TriadCard('Grendel', null, 4, 5, 2, 4, "./img/cards/020.png")
const jelly = new TriadCard('Jelleye', null, 3, 1, 7, 2, "./img/cards/021.png")
const mantis = new TriadCard('Grand Mantis', null, 5, 5, 3, 2, "./img/cards/022.png")
//LEVEL 3 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const forbid = new TriadCard('Forbidden', null, 6, 3, 2, 6, "./img/cards/023.png")
const armad = new TriadCard('Armadodo', null, 6, 1, 6, 3, "./img/cards/024.png")
const triface = new TriadCard('Tri-face', null, 3, 5, 5, 5, "./img/cards/025.png")
const fastical = new TriadCard('Fasticalon', null, 7, 1, 3, 5, "./img/cards/026.png")
const snwln = new TriadCard('Snow Lion', null, 7, 5, 3, 1, "./img/cards/027.png")
const ochu = new TriadCard('Ochu', null, 5, 3, 3, 6, "./img/cards/028.png")
const sam = new TriadCard('SAM08G', null, 5, 2, 4, 6, "./img/cards/029.png")
const claw = new TriadCard('Death Claw', null, 4, 7, 2, 4, "./img/cards/030.png")
const cacti = new TriadCard('Cactuar', null, 6, 6, 3, 2, "./img/cards/031.png")
const tonbry = new TriadCard('Tonberry', null, 3, 4, 4, 6, "./img/cards/032.png")
const worm = new TriadCard('Abyss Worm', null, 7, 3, 5, 2, "./img/cards/033.png")

//LEVEL 4 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const turta = new TriadCard('Turtapod', null, 2, 6, 7, 3, "./img/cards/034.png")
const vysa = new TriadCard('Vysage', null, 6, 4, 5, 5, "./img/cards/035.png")
const rex = new TriadCard('T-Rexaur', null, 4, 2, 7, 6, "./img/cards/036.png")
const bomb = new TriadCard('Bomb', null, 2, 6, 3, 7, "./img/cards/037.png")
const blitz = new TriadCard('Blitz', null, 1, 4, 7, 6, "./img/cards/038.png")
const wendi = new TriadCard('Wendigo', null, 7, 1, 6, 3, "./img/cards/039.png")
const tora = new TriadCard('Torama', null, 7, 4, 4, 4, "./img/cards/040.png")
const imp = new TriadCard('Imp', null, 3, 3, 6, 7, "./img/cards/041.png")
const bludrag = new TriadCard('Blue Dragon', null, 6, 7, 3, 2, "./img/cards/042.png")
const adaman = new TriadCard('Adamantoise', null, 4, 5, 6, 5, "./img/cards/043.png")
const hexdrag = new TriadCard('Hexadragon', null, 7, 4, 3, 5, "./img/cards/044.png")

//LEVEL 5 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const giant = new TriadCard('Iron Giant', null, 6, 6, 5, 5, "./img/cards/045.png")
const behemo = new TriadCard('Behemoth', null, 3, 5, 7, 6, "./img/cards/046.png")
const chmra = new TriadCard('Chimera', null, 7, 5, 3, 6, "./img/cards/047.png")
const pupu = new TriadCard('PuPu', null, 3, 2, 1, A, "./img/cards/048.png")
const elast = new TriadCard('Elastoid', null, 6, 6, 7, 2, "./img/cards/049.png")
const gim = new TriadCard('GIM47N', null, 5, 7, 4, 5, "./img/cards/050.png")
const malbo = new TriadCard('Malboro', null, 7, 4, 2, 7, "./img/cards/051.png")
const rubdrag = new TriadCard('Ruby Dragon', null, 7, 7, 4, 2, "./img/cards/052.png")
const elnoy = new TriadCard('Elnoyle', null, 5, 7, 6, 3, "./img/cards/053.png")
const tonking = new TriadCard('Tonberry King', null, 4, 7, 4, 6, "./img/cards/054.png")
const bigwdg = new TriadCard('Biggs & Wedge', null, 6, 2, 7, 6, "./img/cards/055.png")

//LEVEL 6 BOSS CARDS 
// name, colorVal, top, bottom, left, right
const fujrai = new TriadCard('Fujin & Raijin', null, 2, 8, 4, 8, "./img/cards/056.png")
const elvo = new TriadCard('Elvoret', null, 7, 3, 4, 8, "./img/cards/057.png")
const xatmo = new TriadCard('X-ATM092', null, 3, 7, 3, 8, "./img/cards/058.png")
const grana = new TriadCard('Granaldo', null, 7, 8, 5, 2, "./img/cards/059.png")
const gero = new TriadCard('Gerogero', null, 1, 8, 3, 8, "./img/cards/060.png")
const igui = new TriadCard('Iguion', null, 8, 8, 2, 2, "./img/cards/061.png")
const abad = new TriadCard('Abadon', null, 6, 4, 5, 8, "./img/cards/062.png")
const traum = new TriadCard('Trauma', null, 4, 5, 6, 8, "./img/cards/063.png")
const oilboy = new TriadCard('Oilboyle', null, 1, 4, 8, 8, "./img/cards/064.png")
const shumi = new TriadCard('Shumi Tribe', null, 6, 8, 4, 5, "./img/cards/065.png")
const krysta = new TriadCard('Krysta', null, 7, 8, 1, 5, "./img/cards/066.png")

// LEVEL 7 BOSS CARDS 
// name, colorVal, top, bottom, left, right
const propa = new TriadCard('Propagator', null, 8, 4, 8, 4, "./img/cards/067.png")
const jumbo = new TriadCard('Jumbo Cactuar', null, 8, 4, 4, 8, "./img/cards/068.png")
const tripoint = new TriadCard('Tripoint', null, 8, 2, 8, 5, "./img/cards/069.png")
const gargant = new TriadCard('Gargantua', null, 5, 6, 8, 6, "./img/cards/gargant.png")
const mobtyp = new TriadCard('Mobile Type 8', null, 8, 7, 3, 6, "./img/cards/071.png")
const sphinx = new TriadCard('Sphinxara', null, 8, 5, 8, 3, "./img/cards/072.png")
const tiamat = new TriadCard('Tiamat', null, 8, 5, 4, 8, "./img/cards/073.png")
const bgh = new TriadCard('BGH251F2', null, 5, 8, 5, 7, "./img/cards/074.png")
const rgiant = new TriadCard('Red Giant', null, 6, 4, 7, 8, "./img/cards/075.png")
const catoblep = new TriadCard('Catoblepas', null, 1, 7, 7, 8, "./img/cards/076.png")
const ultima = new TriadCard('Ultima Weapon', null, 7, 2, 8, 7, "./img/cards/077.png")


// LEVEL 8 GF CARDS 
// name, colorVal, top, bottom, left, right
const chubby = new TriadCard('Chubby Chocobo', null, 4, 8, 9, 4, "./img/cards/078.png")
const angelo = new TriadCard('Angelo', null, 9, 7, 3, 6, "./img/cards/079.png")
const gilga = new TriadCard('Gilgamesh', null, 3, 10, 6, 7, "./img/cards/080.png")
const mog = new TriadCard('MiniMog', null, 9, 9, 2, 3, "./img/cards/081.png")
const chico = new TriadCard('Chicobo', null, 9, 8, 4, 4, "./img/cards/082.png")
const queza = new TriadCard('Quezacotl', null, 2, 9, 4, 9, "./img/cards/083.png")
const shiva = new TriadCard('Shiva', null, 6, 4, 9, 7, "./img/cards/084.png")
const ifrit = new TriadCard('Ifrit', null, 9, 2, 8, 6, "./img/cards/085.png")
const siren = new TriadCard('Siren', null, 8, 6, 2, 9, "./img/cards/086.png")
const sacred = new TriadCard('Sacred', null, 5, 9, 9, 1, "./img/cards/087.png")
const mintor = new TriadCard('Minotaur', null, 9, 2, 9, 5, "./img/cards/088.png")

// LEVEL 9 GF CARDS 
// name, colorVal, top, bottom, left, right
const carbun = new TriadCard('Carbuncle', null, 8, A, 4, 4, "./img/cards/089.png")
const diablo = new TriadCard('Diablos', null, 5, 8, 3, A, "./img/cards/090.png")
const levia = new TriadCard('Leviathan', null, 7, 1, 7, A, "./img/cards/091.png")
const odin = new TriadCard('Odin', null, 8, 3, 5, A, "./img/cards/092.png")
const pandem = new TriadCard('Pandemona', null, A, 7, 7, 1, "./img/cards/093.png")
const cerber = new TriadCard('Cerberus', null, 7, 6, A, 4, "./img/cards/094.png")
const alex = new TriadCard('Alexander', null, 9, 4, 2, A, "./img/cards/095.png")
const phenix = new TriadCard('Phoenix', null, 7, 7, A, 2, "./img/cards/096.png")
const baham = new TriadCard('Bahamut', null, A, 2, 6, 8, "./img/cards/097.png")
const doom = new TriadCard('Doomtrain', null, 3, A, A, 1, "./img/cards/098.png")
const eden = new TriadCard('Eden', null, 4, 9, A, 4, "./img/cards/099.png")

// LEVEL 10 CHARACTER CARDS 
// name, colorVal, top, bottom, left, right
const ward = new TriadCard('Ward', null, A, 2, 8, 7, "./img/cards/100.png")
const kiros = new TriadCard('Kiros', null, 6, 6, A, 7, "./img/cards/101.png")
const lagun = new TriadCard('Laguna', null, 5, 3, 9, A, "./img/cards/102.png")
const selph = new TriadCard('Selphie', null, A, 6, 4, 8, "./img/cards/103.png")
const quist = new TriadCard('Quistis', null, 9, A, 2, 6, "./img/cards/104.png")
const irv = new TriadCard('Irvine', null, 2, 9, A, 6, "./img/cards/105.png")
const zell = new TriadCard('Zell', null, 8, A, 6, 5, "./img/cards/106.png")
const rino = new TriadCard('Rinoa', null, 8, A, 6, 5, "./img/cards/107.png")
const edea = new TriadCard('Edea', null, 4, 2, A, A, "./img/cards/108.png")
const seifer = new TriadCard('Seifer', null, 6, A, 4, 9, "./img/cards/109.png")
const squall = new TriadCard('Squall', null, A, 6, 9, 4, "./img/cards/110.png")






// PLAYER OBJECT 
const players = {
    human: "Player",
    humanCards: [],
    humanHand: [],
    humanScore: 5,
    humanTurn: null,

    computer: "Computer",
    compCards: [],
    compHand: [],
    compScore: 5, 
    compTurn: null,
}




// game object 
// build the game board ... 3x3 'card tiles' 
const game = {
    // Game turns to determine end of game 
    gameTurns: null, 

    //     // GAME BOARD        
    board: [
            ["", "", ""], 
            ["", "", ""], 
            ["", "", ""]
            ],
    // this.board[row + 1][col] targets the space below
    // this.board[row][col - 1] targets the left
    // this.board[row][col + 1] targets right

    deck: [
            geezard, funguar , biteBug, redBat, blobra,
            gayla, gesper, fasticalonF,bloodSoul,caterchi, cocka,
            grat, buel, mesmer, glaceye, belhel, thrust, anacond,
            creep, mantis, jelly, grend, forbid, armad, triface,
            fastical, snwln, ochu, sam, claw, cacti, tonbry, worm, 
            turta, vysa, rex, bomb, blitz, wendi, tora, imp, 
            bludrag, adaman, hexdrag,giant, behemo, chmra, pupu, 
            elast, gim, malbo, rubdrag, elnoy, tonking, bigwdg,
            fujrai, elvo, xatmo, grana, gero, igui, abad, traum, 
            oilboy, shumi, krysta, propa, jumbo, tripoint, gargant, 
            mobtyp, sphinx, tiamat, bgh, rgiant, catoblep, ultima, 
            chubby, angelo, gilga, mog, chico, queza, shiva, 
            ifrit, siren, sacred, mintor, carbun, diablo, levia, 
            odin, pandem, cerber, phenix, baham, doom, eden, 
            ward, kiros, lagun, selph, quist, irv, zell, rino,
            edea, seifer, squall
    ],
    setTurn(){
        const firstTurn = Math.round(Math.random())
        console.log("This is the first turn value--->" + firstTurn)
        players.humanTurn = firstTurn
        if(players.humanTurn === 1){ 
            players.humanTurn = 1
            console.log("If this is 1, then player goes first " + players.humanTurn)
            alert("player blue goes first")
        } else { 
            players.compTurn = 1
            console.log(players.compTurn)
            alert("player red goes first")
        }
        console.log(players.humanTurn)
        return firstTurn
    },
    checkBoard(rowS, colS) {
        // console.log(this.board[row][col], row, col, 'THIS IS THE SPOT ON THE BOARD')
        const row = parseInt(rowS)
        const col = parseInt(colS)
        if(this.board[row - 1] && this.board[row - 1][col] && this.board[row -1][col]) {
            console.log('Check the Top')
            // // checkTop()
            if(players.humanTurn === 1 && this.board[row][col].topVal > this.board[row-1][col].bottomVal){
                if(this.board[row-1][col].color === 'red'){ // if the card being attacked is a comp card "red"
                console.log("top value is greater than bottom")
                players.humanScore+=1
                console.log(players.humanScore)
                players.compScore-=1
                console.log(players.compScore)

                
                console.log("This is how many turns there have been: " + game.gameTurns)
                // change card's bg color to blue with jquery
                let originalClass = $(`div[row=${row-1}]`).filter(`div[col=${col}]`).children().attr('class')

                $(`div[row=${row-1}]`).filter(`div[col=${col}]`).children().attr('class', `${originalClass}, playerBoardCard`)
                this.board[row-1][col].color = 'blue' // attacked card value is captured and becomes "blue"
                $('#playerScore').text(`${players.humanScore}`)
                $('#computerScore').text(`${players.compScore}`)
                }
            } else if(players.compTurn === 1 && this.board[row][col].topVal > this.board[row-1][col].bottomVal){
                if(this.board[row-1][col].color === 'blue'){ // if the card being attacked is a player card "blue"
                console.log('the top value is greater than the bottom')
                players.compScore+=1
                console.log(players.compScore)
                players.humanScore-=1
                console.log(players.humanScore)

                
                console.log("This is how many turns there have been: " + game.gameTurns)

                let originalClass = $(`div[row=${row-1}]`).filter(`div[col=${col}]`).children().attr('class')
                $(`div[row=${row-1}]`).filter(`div[col=${col}]`).children().attr('class', `${originalClass}, compBoardCard`)
                  // change card's bg color to red with jquery
                  this.board[row-1][col].color = 'red' // attacked card is captured and becomes 'red'   
                $('#playerScore').text(`${players.humanScore}`)
                $('#computerScore').text(`${players.compScore}`)
                }
            }
        }


        if(this.board[row] && this.board[row][col+1] && this.board[row][col+1]){
            console.log('Check the Right')
            if(players.humanTurn && this.board[row][col].rightVal > this.board[row][col+1].leftVal){
                if(this.board[row][col+1].color === 'red'){
                console.log("right value is greater than left")
                players.humanScore+=1
                console.log(players.humanScore)
                players.compScore-=1
                console.log(players.compScore)

                
                console.log("This is how many turns there have been: " + game.gameTurns)

                //change card's bg color to blue in jquery
                let originalClass = $(`div[row=${row}]`).filter(`div[col=${col+1}]`).children().attr('class')
                $(`div[row=${row}]`).filter(`div[col=${col+1}]`).children().attr('class', `${originalClass}, playerBoardCard`)
                this.board[row][col+1].color = 'blue'
                $('#playerScore').text(`${players.humanScore}`)
                $('#computerScore').text(`${players.compScore}`)
                }
            } else if(players.compTurn && this.board[row][col].rightVal > this.board[row][col+1].leftVal){
                if(this.board[row][col+1].color === 'blue'){
                console.log('the right value is greater than the left')
                players.humanScore-=1
                console.log("hitting " + players.humanScore)
                players.compScore+=1
                console.log(players.compScore)

                
                console.log("This is how many turns there have been: " + game.gameTurns)

                this.board[row][col+1].color = 'red'
                 //change card's bg color to red in jquery
                 let originalClass = $(`div[row=${row}]`).filter(`div[col=${col+1}]`).children().attr('class')
                 $(`div[row=${row}]`).filter(`div[col=${col+1}]`).children().attr('class', `${originalClass}, compBoardCard`)
                 this.board[row][col+1].color = 'red'
                $('#playerScore').text(`${players.humanScore}`)
                $('#computerScore').text(`${players.compScore}`)
                }
            }
        }
        if(this.board[row + 1] && this.board[row + 1][col]) {
            console.log('Check the Bottom')
            // if player's turn and card exists in position and there is a card below
            if(players.humanTurn && this.board[row][col].bottomVal > this.board[row+1][col].topVal){
                if(this.board[row+1][col].color === 'red'){
                    console.log("bottom value is greater than top")
                players.humanScore+=1
                console.log(players.humanScore)
                players.compScore-=1
                console.log(players.compScore)

                
                console.log("This is how many turns there have been: " + game.gameTurns)

                 //change card's bg color to blue in jquery
                 let originalClass = $(`div[row=${row+1}]`).filter(`div[col=${col}]`).children().attr('class')
                 $(`div[row=${row+1}]`).filter(`div[col=${col}]`).children().attr('class', `${originalClass}, playerBoardCard`)
                 this.board[row+1][col] = 'blue'
                $('#playerScore').text(`${players.humanScore}`)
                $('#computerScore').text(`${players.compScore}`)
                }
            } else if(players.compTurn && this.board[row][col].bottomVal > this.board[row+1][col].topVal){
                if(this.board[row+1][col].color === 'blue'){
                    console.log('the bottom value is greater than the top')
                players.humanScore-=1
                console.log(players.humanScore)
                players.compScore+=1
                console.log(players.compScore)

                
                console.log("This is how many turns there have been: " + game.gameTurns)

                 //change card's bg color to red in jquery
                 let originalClass = $(`div[row=${row+1}]`).filter(`div[col=${col}]`).children().attr('class')
                 $(`div[row=${row+1}]`).filter(`div[col=${col}]`).children().attr('class', `${originalClass}, compBoardCard`)
                 this.board[row][col+1].color = 'red'
                $('#playerScore').text(`${players.humanScore}`)
                $('#computerScore').text(`${players.compScore}`)
                }
            }
        }
        if(this.board[row] && this.board[row][col-1]) {
            console.log('Check the Left')
            // checkLeft()
            if(players.humanTurn && this.board[row][col].leftVal > this.board[row][col-1].rightVal){
                if(this.board[row][col-1].color === 'red'){
                console.log("left value is greater than right")
                players.humanScore+=1;
                players.compScore-=1;

                
                console.log("This is how many turns there have been: " + game.gameTurns)

                 //change card's bg color to blue in jquery
                 let originalClass = $(`div[row=${row}]`).filter(`div[col=${col-1}]`).children().attr('class')
                 $(`div[row=${row}]`).filter(`div[col=${col-1}]`).children().attr('class', `${originalClass}, playerBoardCard`)
                 this.board[row][col-1].color = 'blue'
                $('#playerScore').text(`${players.humanScore}`)
                $('#computerScore').text(`${players.compScore}`)
                }
            } else if(players.compTurn && this.board[row][col].leftVal > this.board[row][col-1].rightVal){
                if(this.board[row][col-1].color === 'blue'){
                console.log('the left value is greater than the right')
                players.humanScore-=1
                players.compScore+=1

                
                console.log("This is how many turns there have been: " + game.gameTurns)

                 //change card's bg color to red in jquery
                 let originalClass = $(`div[row=${row}]`).filter(`div[col=${col-1}]`).children().attr('class')
                 $(`div[row=${row}]`).filter(`div[col=${col-1}]`).children().attr('class', `${originalClass}, compBoardCard`) 
                 this.board[row][col-1].color = 'red'
                $('#playerScore').text(`${players.humanScore}`)
                $('#computerScore').text(`${players.compScore}`)
                }
            }
        }
    },
    randomizeDeck(array){
        let cardIndex = array.length;
        while (0 !== --cardIndex) { // so long as we haven't depleted the cards to "0", we continue to reduce cards from the array of objects
          let randomIndex = Math.floor(Math.random() * cardIndex); // randomizes the array order of the entire array
          [array[cardIndex], array[randomIndex]] = [array[randomIndex],  array[cardIndex]]; 
          // as cardIndex depletes in the while loop, they will be mutated into the random index 
          // and vice versa 
          // resulting in an accurate count of cards at the end of a round 
        } 
        return array;
    },
    
         draw(numOfCards){
        let playerCards = []
        for(let i = 0; i < 14; i+=2) {
            players.humanCards.push(game.deck[i])
            players.compCards.push(game.deck[i+=1])
            game.deck.splice(i, 1)
        }
        return playerCards
    },
        render(){
            //PLAYER CARD ONE
            $('#playerCardOne').css('background-image', `url(${players.humanCards[0].image})`)
                players.humanCards[0].color = "blue"
                $('.playerCardOneTop').append(players.humanCards[0].topVal)
                $('.playerCardOneBottom').append(players.humanCards[0].bottomVal)
                $('.playerCardOneLeft').append(players.humanCards[0].leftVal)
                $('.playerCardOneRight').append(players.humanCards[0].rightVal)
                
            //PLAYER CARD TWO 
            $('#playerCardTwo').css('background-image', `url(${players.humanCards[1].image})`)
                players.humanCards[1].color = "blue"
                $('.playerTopNumCard2').append(players.humanCards[1].topVal)
                $('.playerBottomNumCard2').append(players.humanCards[1].bottomVal)
                $('.playerLeftNumCard2').append(players.humanCards[1].leftVal)
                $('.playerRightNumCard2').append(players.humanCards[1].rightVal)
            //PLAYER CARD THREE
            $('#playerCardThree').css('background-image', `url(${players.humanCards[2].image})`)
               players.humanCards[2].color = "blue"
            $('.playerTopNumCard3').append(players.humanCards[2].topVal)
                $('.playerBottomNumCard3').append(players.humanCards[2].bottomVal)
                $('.playerLeftNumCard3').append(players.humanCards[2].leftVal)
                $('.playerRightNumCard3').append(players.humanCards[2].rightVal)
            //PLAYER CARD FOUR 
            $('#playerCardFour').css('background-image', `url(${players.humanCards[3].image})`)
                players.humanCards[3].color = "blue"
            $('.playerTopNumCard4').append(players.humanCards[3].topVal)
                $('.playerBottomNumCard4').append(players.humanCards[3].bottomVal)
                $('.playerLeftNumCard4').append(players.humanCards[3].leftVal)
                $('.playerRightNumCard4').append(players.humanCards[3].rightVal)
            //PLAYER CARD FIVE 
            $('#playerCardFive').css('background-image', `url(${players.humanCards[4].image})`)
                players.humanCards[4].color = "blue"
            $('.playerTopNumCard5').append(players.humanCards[4].topVal)
                $('.playerBottomNumCard5').append(players.humanCards[4].bottomVal)
                $('.playerLeftNumCard5').append(players.humanCards[4].leftVal)
                $('.playerRightNumCard5').append(players.humanCards[4].rightVal)
            
            // COMP CARD ONE 
            $('#compCardOne').css('background-image', `url(${players.compCards[0].image})`)
                players.compCards[0].color = "red"
                $('.compTopNum').append(players.compCards[0].topVal)
                $('.compBottomNum').append(players.compCards[0].bottomVal)
                $('.compLeftNum').append(players.compCards[0].leftVal)
                $('.compRightNum').append(players.compCards[0].rightVal)
                // COMP CARD TWO
            $('#compCardTwo').css('background-image', `url(${players.compCards[1].image})`)
                players.compCards[1].color = "red"
                $('.compTopNumCard2').append(players.compCards[1].topVal)
                $('.compBottomNumCard2').append(players.compCards[1].bottomVal)
                $('.compLeftNumCard2').append(players.compCards[1].leftVal)
                $('.compRightNumCard2').append(players.compCards[1].rightVal)
                // COMP CARD THREE
            $('#compCardThree').css('background-image', `url(${players.compCards[2].image})`)
                players.compCards[2].color = "red"
                $('.compTopNumCard3').append(players.compCards[2].topVal)
                $('.compBottomNumCard3').append(players.compCards[2].bottomVal)
                $('.compLeftNumCard3').append(players.compCards[2].leftVal)
                $('.compRightNumCard3').append(players.compCards[2].rightVal)
                // COMP CARD FOUR 
            $('#compCardFour').css('background-image', `url(${players.compCards[3].image})`)
                players.compCards[3].color = "red"
                $('.compTopNumCard4').append(players.compCards[3].topVal)
                $('.compBottomNumCard4').append(players.compCards[3].bottomVal)
                $('.compLeftNumCard4').append(players.compCards[3].leftVal)
                $('.compRightNumCard4').append(players.compCards[3].rightVal)
                // COMP CARD FIVE 
            $('#compCardFive').css('background-image', `url(${players.compCards[4].image})`)
                players.compCards[4].color = "red"
                $('.compTopNumCard5').append(players.compCards[4].topVal)
                $('.compBottomNumCard5').append(players.compCards[4].bottomVal)
                $('.compLeftNumCard5').append(players.compCards[4].leftVal)
                $('.compRightNumCard5').append(players.compCards[4].rightVal)
        }, 
        detectWin(){
            const turnCount = game.gameTurns 
            while(turnCount >= 9){
                if(players.humanScore > players.compScore) {
                    console.log("----------->player blue wins")
                    alert("Player blue wins!")
                } else { 
                    if(players.humanScore < players.compScore) {
                        console.log("------------->player red wins!")
                        alert("Player red wins!")
                } else { 
                    console.log("it's a tie")
                    alert("It's a draw!")
                }
                }
            }
        }
}

// end of GAME OBJECT AND LOGIC 


//CARD Clicks to choose card and place into playerHand
// Event Listeners for CHOOSING PLAYER CARD 
    //CARD ONE 
    $('#playerCardOne').on('click', (e) => {
        if(players.humanHand.length === 0){
        console.log('player card one works and is in hand')
        players.humanHand.splice(0,0,players.humanCards[0])
        const playerCardOne = $('#playerCardOne').detach()
        console.log(playerCardOne);
        $('#playerChosenCard').append(playerCardOne)
        }
    });

    //CARD TWO
    $('#playerCardTwo').on('click', (e) => {
        if(players.humanHand.length === 0){
        console.log('player card two works and is in hand')
        players.humanHand.splice(0,0,players.humanCards[1])
        const playerCardTwo = $('#playerCardTwo').detach()
        $('#playerChosenCard').append(playerCardTwo)
        }
    });

    //CARD THREE
    $('#playerCardThree').on('click', (e) => {
        if(players.humanHand.length === 0){
        console.log('player card three works and is in hand')
        players.humanHand.splice(0,0,players.humanCards[2])
        const playerCardThree = $('#playerCardThree').detach()
        $('#playerChosenCard').append(playerCardThree)
        }
    });

    //CARD FOUR
    $('#playerCardFour').on('click', (e) => {
        if(players.humanHand.length === 0){
        console.log('player card four works and is in hand')
        players.humanHand.splice(0,0,players.humanCards[3])
        const playerCardFour = $('#playerCardFour').detach()
        $('#playerChosenCard').append(playerCardFour)
        }
    });

    //CARD FIVE
    $('#playerCardFive').on('click', (e) => {
        if(players.humanHand.length === 0){
        console.log('player card five works and is in hand')
        players.humanHand.splice(0,0,players.humanCards[4])
        const playerCardFive = $('#playerCardFive').detach()
        $('#playerChosenCard').append(playerCardFive)
        }
    });


    //EVENT LISTENERS FOR CHOOSING COMPUTER CARD /player 2

    //CARD ONE 
    $('#compCardOne').on('click', (e) => {
        if(players.compHand.length === 0){
        console.log('computer card one works')
        players.compHand.splice(0,0,players.compCards[0])
        const compCardOne = $('#compCardOne').detach()
        $('#compChosenCard').append(compCardOne)
        }
    });

    //CARD TWO 
    $('#compCardTwo').on('click', (e) => {
        if(players.compHand.length === 0){
            console.log('computer card two works')
        players.compHand.splice(0,0,players.compCards[1])
        const compCardTwo = $('#compCardTwo').detach()
        $('#compChosenCard').append(compCardTwo)
        }
    });

    //CARD THREE
    $('#compCardThree').on('click', (e) => {
        if(players.compHand.length === 0){
            console.log('computer card three works')
        players.compHand.splice(0,0,players.compCards[2])
        const compCardThree = $('#compCardThree').detach()
        $('#compChosenCard').append(compCardThree)
        }
    });

    //CARD FOUR
    $('#compCardFour').on('click', (e) => {
        if(players.compHand.length === 0){
            console.log('computer card four works')
        players.compHand.splice(0,0,players.compCards[3])
        const compCardFour = $('#compCardFour').detach()
        $('#compChosenCard').append(compCardFour)
        }
    });

    //CARD FIVE 
    $('#compCardFive').on('click', (e) => {
        if(players.compHand.length === 0){
            console.log('computer card five works')
        players.compHand.splice(0,0,players.compCards[4])
        const compCardFive = $('#compCardFive').detach()
        $('#compChosenCard').append(compCardFive)
        }
    });
// EVENT LISTENER FOR PLACING ONE CARD FROM DRAW INTO HAND 

// EVENT LISTENER FOR PLACING CARDS FROM HAND INTO THE BOARD

$('#boardGrid').on('click', e => {
    let row = $(e.target).attr('row')
    let col = $(e.target).attr('col')
    if(players.humanTurn === 1 && players.humanHand.length === 1){
        console.log('human turn and card put down')
        if(!game.board[row][col] ) {
            console.log('human success')
            const card = $('#playerChosenCard').children().detach() // keeps the player chosen card active but styling is messed up 
            console.log(card)
            $(e.target).attr({
                'row': row,
                'col': col
            }).append(card)
            game.board[row].splice(col, 1, players.humanHand.pop())
            game.checkBoard(row, col)
            game.gameTurns++
            players.humanTurn = 0;
            players.compTurn = 1;
        } else {
            console.log('THIS SPOT IS TAKEN!!!!')
        }
    } else if(players.compTurn === 1 && players.compHand.length === 1) {
        console.log('comp turn and card put down')
        if(!game.board[row][col]) {
            console.log('comp success')
            const compCard = $('#compChosenCard').children().detach()
            $(e.target).attr({
                'row': row, 
                'col': col
            }).append(compCard)
            game.board[row].splice(col, 1, players.compHand.pop())
            game.checkBoard(row, col)
            game.gameTurns++
            players.compTurn = 0;
            players.humanTurn = 1;
        } else { 
            console.log("THIS SPOT IS TAKEN!!!")
        }
    }
});




 

const shuffledDeck = game.randomizeDeck(game.deck)
console.log(shuffledDeck)
const draw = game.draw()
game.setTurn(); 
console.log(players.humanCards)
console.log(players.compCards)
game.render();
game.checkBoard();
game.detectWin();







    

    










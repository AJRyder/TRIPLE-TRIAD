
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
const geezard = new TriadCard('Geezard', null, 1, 1, 5, 4, $('#001'))
const funguar = new TriadCard('Funguar', null, 5, 1, 3, 1, $('#002'))
const biteBug = new TriadCard('Bite Bug', null, 5, 3, 1, 3, $('#003'))
const redBat = new TriadCard('Red bat', null, 6, 1, 2, 1, $('#004'))
const blobra = new TriadCard('Blobra', null, 2, 1, 5, 3, $('#005'))
const gayla = new TriadCard('Gayla', null, 2, 4, 4, 1, $('#006'))
const gesper = new TriadCard('Gesper', null, 1, 4, 1, 5, $('#007'))
const fasticalonF = new TriadCard('Fasticalon-F', null, 3, 2, 1, 5, $('#008'))
const bloodSoul = new TriadCard('Blood Soul', null, 2, 6, 1, 1, $('#009'))
const caterchi = new TriadCard('Caterchipillar', null, 4, 4, 3, 2, $('#010'))
const cocka = new TriadCard('Cockatrice', null, 2, 2, 6, 1, $('#011'))

//LEVEL 2 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const grat = new TriadCard('Grat', null, 7, 3, 1, 1, $('#012'))
const buel = new TriadCard('Buel', null, 6, 2, 3, 2, $('#013'))
const mesmer = new TriadCard('Mesmerize', null, 5, 3, 4, 3, $('#014'))
const glaceye = new TriadCard('Glacial Eye', null, 6, 4, 3, 1, $('#015'))
const belhel = new TriadCard('Belhelmel', null, 3, 5, 3, 4, $('#016'))
const thrust = new TriadCard('Thrustaevis', null, 5, 2, 5, 3, $('#017'))
const anacond = new TriadCard('Anacondaur', null, 5, 2, 5, 3, $('#018'))
const creep = new TriadCard('Creeps', null, 5, 5, 2, 2, $('#019'))
const grend = new TriadCard('Grendel', null, 4, 5, 2, 4, $('#020'))
const jelly = new TriadCard('Jelleye', null, 3, 1, 7, 2, $('#021'))
const mantis = new TriadCard('Grand Mantis', null, 5, 5, 3, 2, $('#022'))
//LEVEL 3 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const forbid = new TriadCard('Forbidden', null, 6, 3, 2, 6, $('#023'))
const armad = new TriadCard('Armadodo', null, 6, 1, 6, 3, $('#024'))
const triface = new TriadCard('Tri-face', null, 3, 5, 5, 5, $('#025'))
const fastical = new TriadCard('Fasticalon', null, 7, 1, 3, 5, $('#026'))
const snwln = new TriadCard('Snow Lion', null, 7, 5, 3, 1, $('#027'))
const ochu = new TriadCard('Ochu', null, 5, 3, 3, 6, $('#028'))
const sam = new TriadCard('SAM08G', null, 5, 2, 4, 6, $('#029'))
const claw = new TriadCard('Death Claw', null, 4, 7, 2, 4, $('#030'))
const cacti = new TriadCard('Cactuar', null, 6, 6, 3, 2, $('#031'))
const tonbry = new TriadCard('Tonberry', null, 3, 4, 4, 6, $('#032'))
const worm = new TriadCard('Abyss Worm', null, 7, 3, 5, 2, $('#033'))

//LEVEL 4 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const turta = new TriadCard('Turtapod', null, 2, 6, 7, 3, $('#034'))
const vysa = new TriadCard('Vysage', null, 6, 4, 5, 5, $('#035'))
const rex = new TriadCard('T-Rexaur', null, 4, 2, 7, 6, $('#036'))
const bomb = new TriadCard('Bomb', null, 2, 6, 3, 7, $('#037'))
const blitz = new TriadCard('Blitz', null, 1, 4, 7, 6, $('#038'))
const wendi = new TriadCard('Wendigo', null, 7, 1, 6, 3, $('#039'))
const tora = new TriadCard('Torama', null, 7, 4, 4, 4, $('#040'))
const imp = new TriadCard('Imp', null, 3, 3, 6, 7, $('#041'))
const bludrag = new TriadCard('Blue Dragon', null, 6, 7, 3, 2, $('#042'))
const adaman = new TriadCard('Adamantoise', null, 4, 5, 6, 5, $('#043'))
const hexdrag = new TriadCard('Hexadragon', null, 7, 4, 3, 5, $('#044'))

//LEVEL 5 MONSTER CARDS 
// name, colorVal, top, bottom, left, right
const giant = new TriadCard('Iron Giant', null, 6, 6, 5, 5, $('#045'))
const behemo = new TriadCard('Behemoth', null, 3, 5, 7, 6, $('#046'))
const chmra = new TriadCard('Chimera', null, 7, 5, 3, 6, $('#047'))
const pupu = new TriadCard('PuPu', null, 3, 2, 1, A, $('#048'))
const elast = new TriadCard('Elastoid', null, 6, 6, 7, 2, $('#049'))
const gim = new TriadCard('GIM47N', null, 5, 7, 4, 5, $('#050'))
const malbo = new TriadCard('Malboro', null, 7, 4, 2, 7, $('#051'))
const rubdrag = new TriadCard('Ruby Dragon', null, 7, 7, 4, 2, $('#052'))
const elnoy = new TriadCard('Elnoyle', null, 5, 7, 6, 3, $('#053'))
const tonking = new TriadCard('Tonberry King', null, 4, 7, 4, 6, $('#054'))
const bigwdg = new TriadCard('Biggs & Wedge', null, 6, 2, 7, 6, $('#055'))

//LEVEL 6 BOSS CARDS 
// name, colorVal, top, bottom, left, right
const fujrai = new TriadCard('Fujin & Raijin', null, 2, 8, 4, 8, $('#056'))
const elvo = new TriadCard('Elvoret', null, 7, 3, 4, 8, $('#057'))
const xatmo = new TriadCard('X-ATM092', null, 3, 7, 3, 8, $('#058'))
const grana = new TriadCard('Granaldo', null, 7, 8, 5, 2, $('#059'))
const gero = new TriadCard('Gerogero', null, 1, 8, 3, 8, $('#060'))
const igui = new TriadCard('Iguion', null, 8, 8, 2, 2, $('#061'))
const abad = new TriadCard('Abadon', null, 6, 4, 5, 8, $('#062'))
const traum = new TriadCard('Trauma', null, 4, 5, 6, 8, $('#063'))
const oilboy = new TriadCard('Oilboyle', null, 1, 4, 8, 8, $('#064'))
const shumi = new TriadCard('Shumi Tribe', null, 6, 8, 4, 5, $('#065'))
const krysta = new TriadCard('Krysta', null, 7, 8, 1, 5, $('#066'))

// LEVEL 7 BOSS CARDS 
// name, colorVal, top, bottom, left, right
const propa = new TriadCard('Propagator', null, 8, 4, 8, 4, $('#067'))
const jumbo = new TriadCard('Jumbo Cactuar', null, 8, 4, 4, 8, $('#068'))
const tripoint = new TriadCard('Tripoint', null, 8, 2, 8, 5, $('#069'))
const gargant = new TriadCard('Gargantua', 5, 6, 8, 6, $('#070'))
const mobtyp = new TriadCard('Mobile Type 8', null, 8, 7, 3, 6, $('#071'))
const sphinx = new TriadCard('Sphinxara', null, 8, 5, 8, 3, $('#072'))
const tiamat = new TriadCard('Tiamat', null, 8, 5, 4, 8, $('#073'))
const bgh = new TriadCard('BGH251F2', null, 5, 8, 5, 7, $('#074'))
const rgiant = new TriadCard('Red Giant', null, 6, 4, 7, 8, $('#075'))
const catoblep = new TriadCard('Catoblepas', null, 1, 7, 7, 8, $('#076'))
const ultima = new TriadCard('Ultima Weapon', null, 7, 2, 8, 7, $('#077'))


// LEVEL 8 GF CARDS 
// name, colorVal, top, bottom, left, right
const chubby = new TriadCard('Chubby Chocobo', null, 4, 8, 9, 4, $('#078'))
const angelo = new TriadCard('Angelo', null, 9, 7, 3, 6, $('#079'))
const gilga = new TriadCard('Gilgamesh', null, 3, 0, 6, 7, $('#080'))
const mog = new TriadCard('MiniMog', null, 9, 9, 2, 3, $('#081'))
const chico = new TriadCard('Chicobo', null, 9, 8, 4, 4, $('#082'))
const queza = new TriadCard('Quezacotl', null, 2, 9, 4, 9, $('#083'))
const shiva = new TriadCard('Shiva', null, 6, 4, 9, 7, $('#084'))
const ifrit = new TriadCard('Ifrit', null, 9, 2, 8, 6, $('#085'))
const siren = new TriadCard('Siren', null, 8, 6, 2, 9, $('#086'))
const sacred = new TriadCard('Sacred', null, 5, 9, 9, 1, $('#087'))
const mintor = new TriadCard('Minotaur', null, 9, 2, 9, 5, $('#088'))

// LEVEL 9 GF CARDS 
// name, colorVal, top, bottom, left, right
const carbun = new TriadCard('Carbuncle', null, 8, A, 4, 4, $('#089'))
const diablo = new TriadCard('Diablos', null, 5, 8, 3, A, $('#090'))
const levia = new TriadCard('Leviathan', null, 7, 1, 7, A, $('#091'))
const odin = new TriadCard('Odin', null, 8, 3, 5, A, $('#092'))
const pandem = new TriadCard('Pandemona', null, A, 7, 7, 1, $('#093'))
const cerber = new TriadCard('Cerberus', null, 7, 6, A, 4, $('#094'))
const alex = new TriadCard('Alexander', null, 9, 4, 2, A, $('#095'))
const phenix = new TriadCard('Phoenix', null, 7, 7, A, 2, $('#096'))
const baham = new TriadCard('Bahamut', null, A, 2, 6, 8, $('#097'))
const doom = new TriadCard('Doomtrain', null, 3, A, A, 1, $('#098'))
const eden = new TriadCard('Eden', null, 4, 9, A, 4, $('#099'))

// LEVEL 10 CHARACTER CARDS 
// name, colorVal, top, bottom, left, right
const ward = new TriadCard('Ward', null, A, 2, 8, 7, $('#100'))
const kiros = new TriadCard('Kiros', null, 6, 6, A, 7, $('#101'))
const lagun = new TriadCard('Laguna', null, 5, 3, 9, A, $('#102'))
const selph = new TriadCard('Selphie', null, A, 6, 4, 8, $('#103'))
const quist = new TriadCard('Quistis', null, 9, A, 2, 6, $('#104'))
const irv = new TriadCard('Irvine', null, 2, 9, A, 6, $('#105'))
const zell = new TriadCard('Zell', null, 8, A, 6, 5, $('#106'))
const rino = new TriadCard('Rinoa', null, 8, A, 6, 5, $('#107'))
const edea = new TriadCard('Edea', null, 4, 2, A, A, $('#108'))
const seifer = new TriadCard('Seifer', null, 6, A, 4, 9, $('#109'))
const squall = new TriadCard('Squall', null, A, 6, 9, 4, $('#110'))






// GAME OBJECT BELOW 
// 
const players = {
    human: "Player",
    humanCards: [],
    humanHand: [],
    humanScore: 5,

    computer: "Computer",
    compCards: [],
    compHand: [],
    compScore: 5, 
}




// game object 
// build the game board ... 3x3 'card tiles' 
const game = {
    //     // GAME BOARD        
    board: [
            [null, null, null], 
            [null, null, null], 
            [null, null, null]
            ],

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
        // return Array.from({length:numOfCards}, () => deck.pop())
        let playerCards = []
        for(let i = 0; i < 14; i+=2) {
            players.humanCards.push(game.deck[i])
            players.compCards.push(game.deck[i+=1])
            game.deck.splice(i, 1)
        }
        return playerCards
    },
        // how can my player interact with their cards? 
        // cards should display.... in the dom 
        cardRender() {
            $('#playerCardOne').append(geezard.image)
        }

        //player chooses a card from their hand 
        // chooseCard(){
        //     let playerChoice = 
        //     // how does player access the card? 
        //     // prompt and input? 
        // }
   
}


const shuffledDeck = game.randomizeDeck(game.deck)
console.log(shuffledDeck)
const draw = game.draw()
console.log(players.humanCards)
console.log(players.compCards)
    

    










// testing a card battle... 
// const testBattle = () => {
// if (board[0].rightVal > board[1].leftVal) { 
//     console.log ("Player card wins - comp card turns blue")
// } else { 
//     console.log("Comp card wins - player card turns red")
// }
// }
// testBattle()

// linking boardGrid array to the rowCol divs
//which can {ideally} be passed card {object data}
// and later viewed in the DOM 
// board.splice(0,1,players.playerCards[0]) 
// const $row1Col1 = $('#row1_Col1').html(`${(board[0].bottomVal)}, ${(board[0].rightVal)}`)
// const $row1Col2 = $('#row1_Col2').append(board[1])
// const $row1Col3 = $('#row1_Col3').append(board[2])
// const $row2Col1 = $('#row2_Col1').append(board[3])
// const $row2Col2 = $('#row2_Col2').append(board[4])
// const $row2Col3 = $('#row2_Col3').append(board[5])
// const $row3Col1 = $('#row3_Col1').append(board[6])
// const $row3Col2 = $('#row3_Col2').append(board[7])
// const $row3Col3 = $('#row3_Col3').append(board[8])
// console.log($('#boardGrid'))

// // console.log($('#row1_Col1'), "has boarGrid value udpated the html div")
// // console.log($('#boardGrid'), 'checking to see if board grid is updating with array data')

// board.splice(0,1,players.playerCards[0]) // player card is played into board array

// board.splice(1,1,players.compCards[0]) // computer card is played in board array
// console.log(board, "has board received new card(s)? YES!")


// // $row1Col1.html(`<div>${board[0]}</div>`) returns object object in html
// console.log(players.playerCards[0])
// console.log($('#row1_Col1'), "has card passed into the div from player's hand?")
// console.log($('#boardGrid'))







// store these in an array to later be called upon during game turns
// to push/splice a card into the position 
// should include creation of the game board 
    // game board positions (columns & rows?)
    // 
    // e.g. check for cards, check sides of touching cards

// should include the player object 
// logic and computer logic     
// should randomly decide first turn
// should allow player turn to:     
    // to choose a card from player hand
    // should allow 'chosen card' to be '' onto the game board 
// 